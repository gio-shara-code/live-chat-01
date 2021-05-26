import React, {useState, useEffect} from "react"
import ChatBuilder from "../../containers/chat_builder/ChatBuilder"
import ParticipantBuilder from "../../containers/participant_builder/ParticipantBuilder"
import {User} from "../../models"
import {socketConnection} from "./services"
import styles from "./Chat.module.scss"

interface Props {
  user: User
}

const chat: React.FC<Props> = ({user}) => {
  useEffect(() => {
    setSocket(socketConnection(user))
  }, [])

  const [socket, setSocket] = useState<SocketIOClient.Socket>()

  if (!socket) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.chat}>
      <ChatBuilder user={user} socket={socket} />
      <ParticipantBuilder socket={socket} />
    </div>
  )
}

export default chat
