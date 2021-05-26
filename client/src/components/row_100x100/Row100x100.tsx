import React from "react"
import styles from "./Row100x100.module.css"

const row100x100 = ({children}) => {
  return <div className={styles.Layout}>{children}</div>
}

export default row100x100
