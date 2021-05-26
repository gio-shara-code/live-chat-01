import React from "react"
import styles from "./ChatInput.module.css"

interface Props {
  placeholder: string
  onChange(e): void
  value: string
  onKeyPress(e): void
}

const chatInput = React.forwardRef<HTMLInputElement, Props>(
  ({onChange, onKeyPress, placeholder, value}, ref: any) => {
    return (
      <input
        ref={ref}
        id="chat_input"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        type="text"
        className={styles.stylesChatInput}
        onKeyPress={onKeyPress}
      />
    )
  }
)

export default chatInput
