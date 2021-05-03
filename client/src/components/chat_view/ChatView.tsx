import React, { useEffect, useState } from 'react'
import styles from './ChatView.module.css'
import { Message, User } from '../../models'
import ChatBubble from './chat_bubble_message/ChatBubbleMessage'
import ChatBubbleConnectStatus from './chat_bubble_connection_status/ChatBubbleConnectStatus'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SideBar from '../side_bar/SideBar'

export default function ChatView(props: { socket: SocketIOClient.Socket, user: User}) {

    const [messages, setMessages] = useState((): Message[]=> [])
    const [isSideBarVisible, setSideBarVisibility] = useState(false)

    useEffect(()=> {
        props.socket.on('client_on_message', (message: Message) => {
            setMessages(messages => [...messages, message])
            const chatView = document.getElementById('chat_view')
            chatView.scrollTop = chatView.scrollHeight
        })
    }, [])



    return (
        <div id='chat_view' className={styles.ChatView}
        onClick={()=> {
            setSideBarVisibility(false) 
        }} >
            <SideBar visible={isSideBarVisible} socket={props.socket}/>
            <FontAwesomeIcon icon={faBars}
            className={styles.MenuIcon}
            size="lg"
            onClick={(event)=> {
                event.preventDefault();
                event.stopPropagation();
                setSideBarVisibility(prevState =>{ 
                    console.log('div')
                    return !prevState})
            }
            }/>
            <h1>Welcome to the chat Live Chat 01</h1>
            {messages.map((message: Message) => {
                const itsMe = message.from === props.user.nickname 
                switch(message.type){
                    case 'message':
                        return <ChatBubble key={message.id}
                        from={message.from}
                        content={message.content}
                        itsMe={itsMe}
                        timestamp={message.timestamp}/>
                    case 'connect':
                        return <ChatBubbleConnectStatus key={message.id}
                        type='connect'
                        from={message.from}/> 
                    case 'disconnect':
                        return <ChatBubbleConnectStatus key={message.id}
                        type='disconnect'
                        from={message.from}/>
                    default:
                        throw new Error()
                }
            }) }
        </div>
    )
}
