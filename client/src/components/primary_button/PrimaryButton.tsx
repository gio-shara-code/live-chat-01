import React from 'react'
import styles from './PrimaryButton.module.css'
export default function PrimaryButton(props) {
    return (<button onClick={props.onClick} className={styles.PrimaryButton}>{props.children}</button>)
}
