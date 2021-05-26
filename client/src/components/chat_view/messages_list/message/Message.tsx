import React from "react"
import {Message} from "../../../../models"
import ChatBubbleConnectStatus from "../chat_bubble_connection_status/ChatBubbleConnectStatus"
import ChatBubble from "../chat_bubble_message/ChatBubbleMessage"

interface Props {
  message: Message
  itsMe: boolean
}
const message: React.FC<Props> = ({message, itsMe}) => {
  switch (message.type) {
    case "message":
      return (
        <ChatBubble
          key={message.id}
          from={message.from}
          content={message.content}
          itsMe={itsMe}
          timestamp={message.timestamp}
        />
      )
    case "connect":
      return <ChatBubbleConnectStatus key={message.id} type="connect" from={message.from} />
    case "disconnect":
      return <ChatBubbleConnectStatus key={message.id} type="disconnect" from={message.from} />
    default:
      throw new Error("Message Type unknown")
  }
}

export default message
