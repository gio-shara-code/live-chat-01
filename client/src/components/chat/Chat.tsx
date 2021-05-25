import React, {useState, useEffect} from "react"
import ChatBuilder from "../../containers/chat_builder/ChatBuilder"
import ParticipantBuilder from "../../containers/participant_builder/ParticipantBuilder"
import Row100x100 from "../row_100x100/Row100x100"
import {User} from "../../models"
import {v4} from "uuid"
import {socketConnection} from "./utils"

export default function Chat(props: {nickName: string}) {
  const user: User = {
    _id: `${v4()}`,
    nickname: `${props.nickName || "Demo"}`
  }

  useEffect(() => {
    setSocket(socketConnection(user))
  }, [])

  const [socket, setSocket] = useState<SocketIOClient.Socket>()

  if (!socket) {
    return <div>Loading...</div>
  }

  return (
    <Row100x100>
      <ChatBuilder user={user} socket={socket} />
      <ParticipantBuilder socket={socket} />
    </Row100x100>
  )
}
