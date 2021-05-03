import React from 'react'
import styles from './ChatInput.module.css'
export default function ChatInput(props) {
    return ( <input 
        id='chat_input'
        placeholder={props.placeholder} 
        onChange={props.onChange} 
        value={props.value} 
        type="text" 
        className={styles.ChatInput}
        onKeyPress={props.onKeyPress}/> )
}
