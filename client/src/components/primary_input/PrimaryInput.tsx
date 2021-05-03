import React from 'react'
import styles from './PrimaryInput.module.css'
export default function PrimaryInput(props: {
    placeholder: string, 
    onKeyPress(e): void,
    value: string,
    onChange(e): void}) {
    return ( <input className={styles.PrimaryInput} 
        placeholder={props.placeholder} 
        type="text"
        onKeyPress={props.onKeyPress}
        value={props.value}
        onChange={props.onChange}/> )
}
