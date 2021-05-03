import React, { useEffect, useState } from "react";
import styles from "./ChatBuilder.module.css";
import ChatView from "../../components/chat_view/ChatView";
import { User, Message } from "../../models";
import ChatInput from "../../components/chat/chat_input/ChatInput";

export default function ChatBuilder(props: {
  socket: SocketIOClient.Socket;
  user: User;
}) {
  useEffect(() => {
    const chatInput = document.getElementById("chat_input");
    chatInput.focus();
  }, []);

  const [message, setMessage] = useState("");

  function onKeyPressed(e: React.KeyboardEvent<any>) {
    if (e.code === "Enter") {
      if (message.trim().length !== 0) {
        const msg: Message = {
          from: props.user.nickname,
          content: message,
          timestamp: Date.now(),
          id: `${Math.random()}?_?${Math.random()}`,
          type: "message",
        };
        props.socket.emit("server_on_message", msg);
      }
      setMessage("");
    }
  }

  return (
    <div className={styles.ChatBuilder}>
      <ChatView socket={props.socket} user={props.user} />
      <ChatInput
        onKeyPress={(e: React.KeyboardEvent<any>) => onKeyPressed(e)}
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        placeholder="Type..."
      />
    </div>
  );
}
