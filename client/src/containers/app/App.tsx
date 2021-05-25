import React, {useState} from "react"
import Chat from "../../components/chat/Chat"
import PageType from "../../enums"
import NicknameBuilder from "../nickname_builder/NicknameBuilder"

export default function App() {
  const [pageType, setPageType] = useState(PageType.NickNamePage)
  const [nickname, setNickname] = useState("")

  return (
    <>
      {PageType.NickNamePage === pageType && (
        <NicknameBuilder setNickname={setNickname} setPageType={setPageType} nickname={nickname} />
      )}

      {PageType.ChatPage === pageType && <Chat nickName={nickname} />}
    </>
  )
}
