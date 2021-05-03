import React, { useState } from "react";
import Chat from "../../components/chat/Chat";
import PageType from "../../enums";
import NicknameBuilder from "../nickname_builder/NicknameBuilder";
export default function App() {
  const [pageType, setPageType] = useState(PageType.NickNamePage);
  const [nickname, setNickname] = useState("");
  let page;

  switch (pageType) {
    case PageType.ChatPage:
      page = <Chat nickName={nickname} />;
      break;
    case PageType.NickNamePage:
      page = (
        <NicknameBuilder
          setNickname={setNickname}
          setPageType={setPageType}
          nickname={nickname}
        />
      );
      break;
    default:
      throw new Error();
  }
  return <>{page}</>;
}
