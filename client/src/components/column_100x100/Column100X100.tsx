import React from 'react'
import styles from './Column100X100.module.css'
export default function Column100X100(props) {
    return (
        <div className={styles.Column}>
            {props.children}
        </div>
    )
}
