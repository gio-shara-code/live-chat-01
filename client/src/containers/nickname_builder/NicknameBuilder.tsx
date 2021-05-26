import React, {useRef, useState, useEffect} from "react"
import Column100X100 from "../../components/column_100x100/Column100X100"
import {PageType} from "../../enums"
import PrimaryInput from "../../components/primary_input/PrimaryInput"
import PrimaryButton from "../../components/primary_button/PrimaryButton"
import {User} from "../../models"
import {getNicknameError} from "../../utils/validation"
import {Format} from "../../enums"
import {v4} from "uuid"

interface Props {
  setUser(u: User): void
  setPageType(a: PageType): void
}

const nicknameBuilder: React.FC<Props> = ({setPageType, setUser}) => {
  const inputEl = useRef<HTMLInputElement>(null)

  const [nickname, setNickname] = useState<string>("")
  const [nicknameError, setNicknameError] = useState<string | Format>(Format.valid)

  const onKeyPress = (e) => {
    if (e.code === "Enter") {
      onEnterClick()
    }
  }

  const onEnterClick = () => {
    const nicknameResult = getNicknameError(nickname)
    if (nicknameResult === Format.valid) {
      setUser({
        nickname: nickname,
        _id: v4()
      })
      setPageType(PageType.ChatPage)
    } else {
      setNicknameError(nicknameResult)
    }
  }

  useEffect(() => {
    inputEl.current.focus()
  }, [])

  return ( 
    <Column100X100>
      <h1>Enter your Nickname</h1>
      <p style={{color: "red"}}>{nicknameError !== Format.valid && nicknameError}</p>
      <PrimaryInput
        ref={inputEl}
        placeholder="Nickname..."
        onKeyPress={onKeyPress}
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <PrimaryButton onClick={onEnterClick}>Enter</PrimaryButton>
    </Column100X100>
  )
}

export default nicknameBuilder
