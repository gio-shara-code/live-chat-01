import React, { useState } from 'react'
import Column100X100 from '../../components/column_100x100/Column100X100'
import PageType from '../../enums'
import PrimaryInput from '../../components/primary_input/PrimaryInput'
import PrimaryButton from '../../components/primary_button/PrimaryButton'
export default function NicknameBuilder(props) {

    function onKeyPress(e) {
        if(e.code === 'Enter'){
            props.setPageType(PageType.ChatPage)
        }
    }

    return (
        <Column100X100>
            <h1>Enter your Nickname</h1>
            <PrimaryInput
            placeholder='Nickname...'
            onKeyPress={onKeyPress}
            value={props.nickname}
            onChange={(e) => props.setNickname(e.target.value)}
            />
          <PrimaryButton onClick={()=> props.setPageType(PageType.ChatPage)}>Enter</PrimaryButton>
        </Column100X100>
    )
}
