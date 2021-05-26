import {User} from "../../models"
import io from "socket.io-client"

export const socketConnection = (user: User): SocketIOClient.Socket => {
  const config = { 
    transports: ["websocket"],
    auth: {
      _id: `${user._id}`,
      nickname: `${user.nickname}`
    }
  }

  const socket = io("https://super-live-chat.herokuapp.com/", config)

  window.addEventListener("beforeunload", () => {
    socket.disconnect()
  })

  return socket
}
