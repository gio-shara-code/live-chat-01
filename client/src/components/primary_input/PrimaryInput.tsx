import React from "react"
import styles from "./PrimaryInput.module.css"

interface Props {
  placeholder: string
  onKeyPress(e): void
  value: string
  onChange(e): void
}

const primaryInput = React.forwardRef<HTMLInputElement, Props>(
  ({onChange, placeholder, onKeyPress, value}, ref: any) => {
    return (
      <input
        ref={ref}
        className={styles.PrimaryInput}
        placeholder={placeholder}
        type="text"
        onKeyPress={onKeyPress}
        value={value}
        onChange={onChange}
      />
    )
  }
)

export default primaryInput
