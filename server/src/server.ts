import http from "http";
import express from "express";
import { Socket, Server } from "socket.io";
import { User, Message } from "./interfaces";
import { deleteUserFromList } from "./services/users";
import { generateRandomMessageId } from "./services/messages";
import { isHandShakeAuthNotValid } from "./utils/validation";

const app = express();
const nodejsServer = http.createServer(app);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("index.html"); 
});

const io = new Server(nodejsServer, {
  cors: {
    origin: "*",
  },
});

let users: User[] = [];

io.on("connection", async (socket: Socket) => {
  if (isHandShakeAuthNotValid(socket.handshake.auth as User)) return;

  const currentUser: User = {
    nickname: socket.handshake.auth.nickname,
    _id: socket.handshake.auth._id,
  };

  users.push(currentUser);

  //Client connects...
  socket.broadcast.emit("client_on_participant_list", users);
  socket.emit("client_on_participant_list", users);

  const msgConnection: Message = {
    content: "has been connected!",
    fromId: currentUser._id,
    timestamp: Date.now(),
    id: generateRandomMessageId(),
    type: "connect",
  };

  socket.broadcast.emit("client_on_message", msgConnection);

  socket.on("disconnecting", (reason) => {
    //Client disconnects....

    users = [...deleteUserFromList(users, currentUser._id)];
    socket.broadcast.emit("client_on_participant_list", users); //Send to everyone but the user
    const msgDisconnection: Message = {
      content: "has been disconnected!",
      fromId: currentUser._id,
      timestamp: Date.now(),
      id: generateRandomMessageId(),
      type: "disconnect",
    };
    socket.broadcast.emit("client_on_message", msgDisconnection);
  });

  socket.on("server_on_message", (message: Message) => {
    socket.broadcast.emit("client_on_message", message);
    socket.emit("client_on_message", message);
  });
});

const port = process.env.PORT || 3000;

nodejsServer.listen(port, () =>
  console.log(`Server is running on the port ${port}!`)
);
