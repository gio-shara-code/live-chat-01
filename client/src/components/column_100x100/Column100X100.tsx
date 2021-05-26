import React from "react"
import styles from "./Column100X100.module.css"

const column100X100 = (props) => {
  return <div className={styles.Column}>{props.children}</div>
}

export default column100X100
