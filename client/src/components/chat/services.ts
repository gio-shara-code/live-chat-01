import {User} from "../../models"
import io from "socket.io-client"

export const socketConnection = (user: User): SocketIOClient.Socket => {
  const config = {
    transports: ["websocket"],
    auth: user
  }

  const socket = io("https://super-live-chat.herokuapp.com/", config)

  window.addEventListener("beforeunload", () => {
    socket.disconnect()
  })

  return socket
}
