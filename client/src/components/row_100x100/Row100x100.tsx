import React from 'react'
import styles from './Row100x100.module.css'

export default function Row100x100(props) {
    return (
        <div className={styles.Layout}>{props.children}</div>
    )
}
