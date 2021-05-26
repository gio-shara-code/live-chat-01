import React, {useState} from "react"
import styles from "./ChatView.module.css"
import {User} from "../../models"
import {faBars} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import SideBar from "../side_bar/SideBar"
import MessageList from "./messages_list/Messages"
interface Props {
  socket: SocketIOClient.Socket
  user: User
}

const chatView: React.FC<Props> = ({socket, user}) => {
  const [isSideBarVisible, setSideBarVisibility] = useState<boolean>(false)

  const onfBarsClick = (event: any) => {
    event.preventDefault()
    event.stopPropagation()
    setSideBarVisibility((prevState) => !prevState)
  }

  return (
    <>
      <SideBar visible={isSideBarVisible} socket={socket} />
      <FontAwesomeIcon icon={faBars} className={styles.MenuIcon} size="lg" onClick={onfBarsClick} />
      <h1>Welcome to the chat Live Chat 01</h1>
      <MessageList setSideBarVisibility={setSideBarVisibility} socket={socket} user={user} />
    </>
  )
}

export default chatView
