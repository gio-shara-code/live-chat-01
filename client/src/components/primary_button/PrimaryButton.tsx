import React from "react"
import styles from "./PrimaryButton.module.css"

interface Props {
  onClick(e?): void
}

const primaryButton: React.FC<Props> = ({onClick, children}) => {
  return (
    <button onClick={onClick} className={styles.PrimaryButton}>
      {children}
    </button>
  )
}

export default primaryButton
