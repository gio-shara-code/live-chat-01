import {Format} from "../enums"

export const getNicknameError = (nickname: string) => {
  const trimmedNickname = nickname.trim()

  if (trimmedNickname.length === 0) return "Nickname is empty"
  else if (trimmedNickname.length > 10) return "Nickname is too long. Max. 10 characters"
  return Format.valid
}

export const isMessageValid = (msg: String) => msg.trim().length !== 0
