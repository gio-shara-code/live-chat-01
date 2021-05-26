import React, {useEffect, useState, useRef} from "react"
import styles from "./ChatBuilder.module.css"
import ChatView from "../../components/chat_view/ChatView"
import {User, Message} from "../../models"
import ChatInput from "../../components/chat/chat_input/ChatInput"
import {v4} from "uuid"
import {isMessageValid} from "../../utils/validation"

interface Props {
  socket: SocketIOClient.Socket
  user: User
}

const chatBuilder: React.FC<Props> = ({socket, user}) => {
  const chatInputEl = useRef<HTMLInputElement>(null)

  useEffect(() => {
    chatInputEl.current.focus()
  }, [])

  const [message, setMessage] = useState("")

  const onKeyPressed = (e: React.KeyboardEvent<any>) => {
    if (e.code === "Enter") {
      if (isMessageValid(message)) {
        const msg: Message = {
          fromId: user._id,
          content: message,
          timestamp: Date.now(),
          id: v4(),
          type: "message"
        }
        socket.emit("server_on_message", msg)
      }
      setMessage("")
    }
  }

  return (
    <div className={styles.ChatBuilder}>
      <ChatView socket={socket} user={user} />
      <ChatInput
        onKeyPress={(e: React.KeyboardEvent<any>) => onKeyPressed(e)}
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        placeholder="Type..."
        ref={chatInputEl}
      />
    </div>
  )
}

export default chatBuilder
