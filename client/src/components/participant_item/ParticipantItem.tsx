import React from 'react'
import styles from './ParticipantItem.module.css'
export default function ParticipantItem(props) {
    return (<p className={styles.ParticipantItem}>{props.children}</p>)
}