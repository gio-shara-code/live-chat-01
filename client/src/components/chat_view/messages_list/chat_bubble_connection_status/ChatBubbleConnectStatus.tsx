import React from 'react'
import styles from './ChatBubbleConnectStatus.module.css'

export default function ChatBubbleConnectStatus(props: { from: string, type: 'connect' | 'disconnect' }) {
    let chatBubbleStyle = [styles.ChatBubbleConnectionStatus]
    switch(props.type){
        case 'connect':
            chatBubbleStyle.push(styles.Connect)
            break;
        case 'disconnect':
            chatBubbleStyle.push(styles.Disconnect)
            break;
        default:
            throw new Error()
    }

    return (
        <div className={chatBubbleStyle.join(' ')}>
            <span className={styles.From}>{props.from}</span>{[props.type == 'connect' ? ' has been connected!' : ' has been disconnected!']}
        </div>
    )
}
