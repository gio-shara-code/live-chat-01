import React, {useState} from "react"
import Chat from "../../components/chat/Chat"
import {PageType} from "../../enums"
import NicknameBuilder from "../nickname_builder/NicknameBuilder"
import {User} from "../../models"

export default function App() {
  const [pageType, setPageType] = useState(PageType.NickNamePage)
  const [user, setUser] = useState<User>()

  return (
    <>
      {PageType.NickNamePage === pageType && (
        <NicknameBuilder setUser={setUser} setPageType={setPageType} />
      )}

      {PageType.ChatPage === pageType && <Chat user={user} />}
    </>
  )
}
