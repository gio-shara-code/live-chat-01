import styles from "./Messages.module.css"
import React, {useEffect, useState, useRef} from "react"
import {Message, User} from "../../../models"

import MessageComponent from "./message/Message"
interface Props {
  socket: SocketIOClient.Socket
  user: User
  setSideBarVisibility(e: boolean): void
}

const messages: React.FC<Props> = ({socket, user, setSideBarVisibility}) => {
  const messagesEl = useRef<HTMLDivElement>(null)

  const [messages, setMessages] = useState((): Message[] => [])

  const updateMessage = (message) => {
    return (messages) => [...messages, message]
  }

  useEffect(() => {
    socket.on("client_on_message", (message: Message) => {
      setMessages(updateMessage(message))
      messagesEl.current.scrollTop = messagesEl.current.scrollHeight
    })
  }, [])

  return (
    <div onClick={() => setSideBarVisibility(false)} className={styles.Messages} ref={messagesEl}>
      {messages.map((message: Message) => (
        <MessageComponent key={message.id} itsMe={user._id === message.fromId} message={message} />
      ))}
    </div>
  )
}

export default messages
