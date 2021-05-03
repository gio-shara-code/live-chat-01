import React, { useState } from "react";
import ChatBuilder from "../../containers/chat_builder/ChatBuilder";
import ParticipantBuilder from "../../containers/participant_builder/ParticipantBuilder";
import Row100x100 from "../row_100x100/Row100x100";
import io from "socket.io-client";
import { User } from "../../models";

export default function Chat(props: { nickName: string }) {
  const user: User = {
    _id: `${props.nickName || "Demo"}?/?${Math.random()}`,
    nickname: `${props.nickName || "Demo"}`,
  };

  const [socket, _] = useState(
    (): SocketIOClient.Socket => {
      const socket = io("http://localhost:3000", {
        auth: {
          _id: `${user._id}`,
          nickname: `${user.nickname}`,
        },
      });

      window.addEventListener("beforeunload", () => {
        socket.disconnect();
      });
      return socket;
    }
  );

  return (
    <Row100x100>
      <ChatBuilder user={user} socket={socket} />
      <ParticipantBuilder socket={socket} />
    </Row100x100>
  );
}
