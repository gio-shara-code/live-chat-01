import React, { useEffect, useState } from "react";
import styles from "./ParticipantBuilder.module.css";
import { User } from "../../models";
import ParticipantItem from "../../components/participant_item/ParticipantItem";

export default function ParticipantBuilder(props: {
  socket: SocketIOClient.Socket;
}) {
  const [users, setUsers] = useState((): User[] => []);

  useEffect(() => {
    props.socket.on("client_on_participant_list", (user: User[]) => {
      setUsers([...user]);
    });
  }, []);
  console.log(users);
  return (
    <div className={styles.ParticipantBuilder}>
      <h1>Participant list</h1>
      {users.map((user) => (
        <ParticipantItem key={user._id}>{user.nickname}</ParticipantItem>
      ))}
    </div>
  );
}
