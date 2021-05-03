import React from 'react'
import styles from './ChatBubbleMessage.module.css'
import { getChatTimestamp } from '../../../utils/date_format'
export default function ChatBubble(props: {
    from: string,
    content: string,
    itsMe: boolean,
    timestamp: number}) {
    const chatBubbleStyle = [styles.ChatBubble]
    const contentStyle = [styles.Content]

    if(props.itsMe) {
        chatBubbleStyle.push(styles.ItsMeChatBubble)
        contentStyle.push(styles.ItsMeContent)
    }

        return (<div className={chatBubbleStyle.join(' ')}>
        <span className={styles.From}>{props.from}</span>
        <div className={contentStyle.join(' ')}>{props.content}</div>
        <div>{getChatTimestamp(props.timestamp)}</div>
    </div>)
}
