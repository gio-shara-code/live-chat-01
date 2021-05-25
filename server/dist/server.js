"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const socket_io_1 = require("socket.io");
const users_1 = require("./services/users");
const messages_1 = require("./services/messages");
const app = express_1.default();
const nodejsServer = http_1.default.createServer(app);
app.use(express_1.default.static("public"));
app.get("/", (req, res) => {
    res.sendFile("index.html");
});
// const db = mongodbClient.db() //db name optional because you passed it in connect function
// const usersCollection = db.collection('users')
// const changeStream: mongodb.ChangeStream<any> = usersCollection.watch([], { })
const io = new socket_io_1.Server(nodejsServer, {
    cors: {
        origin: "*",
    },
});
let users = [];
//connect is a default event which will be fired when the socket connection is established
io.on("connection", (socket) => __awaiter(void 0, void 0, void 0, function* () {
    if (!socket.handshake.auth.nickname && !socket.handshake.auth._id)
        return;
    const currentUser = {
        nickname: socket.handshake.auth.nickname,
        _id: socket.handshake.auth._id,
    };
    users.push(currentUser);
    //Client connects...
    socket.broadcast.emit("client_on_participant_list", users);
    socket.emit("client_on_participant_list", users);
    const msgConnection = {
        content: "has been connected!",
        from: currentUser.nickname,
        timestamp: Date.now(),
        id: messages_1.generateRandomMessageId(),
        type: "connect",
    };
    socket.broadcast.emit("client_on_message", msgConnection);
    socket.on("disconnecting", (reason) => {
        //Client disconnects....
        users = [...users_1.deleteUserFromList(users, currentUser._id)];
        socket.broadcast.emit("client_on_participant_list", users); //Send to everyone but the user
        const msgDisconnection = {
            content: "has been disconnected!",
            from: currentUser.nickname,
            timestamp: Date.now(),
            id: messages_1.generateRandomMessageId(),
            type: "disconnect",
        };
        socket.broadcast.emit("client_on_message", msgDisconnection);
    });
    socket.on("server_on_message", (message) => {
        socket.broadcast.emit("client_on_message", message);
        socket.emit("client_on_message", message);
    });
}));
const port = process.env.PORT || 3000;
nodejsServer.listen(port, () => console.log(`Server is running on the port ${port}!`));
