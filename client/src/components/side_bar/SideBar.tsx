import React, { useState, useEffect } from "react";
import { User } from "../../models";
import ParticipantItem from "../participant_item/ParticipantItem";
import styles from "./SideBar.module.css";

export default function SideBar(props: {
  socket: SocketIOClient.Socket;
  visible: boolean;
}) {
  const sideBarStyle = [styles.SideBar];
  const [users, setUsers] = useState((): User[] => []);

  useEffect(() => {
    props.socket.on("client_on_participant_list", (user: User[]) => {
      setUsers([...user]);
    });
  }, []);

  if (props.visible) {
    sideBarStyle.push(styles.Visible);
  }
  return (
    <div
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
      }}
      className={sideBarStyle.join(" ")}
    >
      <h2>Participant list</h2>
      {users.map((user) => (
        <ParticipantItem key={user._id}>{user.nickname}</ParticipantItem>
      ))}
    </div>
  );
}
