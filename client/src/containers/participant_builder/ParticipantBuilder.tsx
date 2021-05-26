import React, {useEffect, useState} from "react"
import styles from "./ParticipantBuilder.module.css"
import {User} from "../../models"
import ParticipantItem from "../../components/participant_item/ParticipantItem"

export default function ParticipantBuilder(props: {socket: SocketIOClient.Socket}) {
  const [participants, setParticipants] = useState((): User[] => [])

  useEffect(() => {
    props.socket.on("client_on_participant_list", (users: User[]) => {
      setParticipants([...users])
    })
  }, [])

  return (
    <div className={styles.ParticipantBuilder}>
      <h1>Participant list</h1>
      {participants.map((participant) => (
        <ParticipantItem key={participant._id}>{participant.nickname}</ParticipantItem>
      ))}
    </div>
  )
}
