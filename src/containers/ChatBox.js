import React, { Component } from 'react'
import { connect } from 'react-redux'

import RoomBar from '../components/RoomBar'
import MessageList from '../components/MessageList'
import InputArea from '../components/InputArea'
import { selectMessage, updateInputMessage, sendInputMessage } from '../actions'

const ChatBox = ({
    client, room, users, messages,
    selectMessage, updateInputMessage, sendInputMessage
}) => {
    const MLProps = {...client, messages, selectMessage}
    const IAProps = {...client, updateInputMessage, sendInputMessage}
    return <div className="ChatBox"
        style={{
            position:'relative',
            width:'100%',
            height:'100%'
        }}>
        <RoomBar room={room} users={users}/>
        <MessageList {...MLProps} />
        <InputArea {...IAProps} />
    </div>

}

export default connect(
    ({ chat, client }) => {
        const room = chat.rooms[client.selectedRoom]
        return {
            client: client,
            room: room,
            users: room.users.map( u => chat.users[u] ),
            messages: room.messages.map( m => chat.messages[m] )
        }
    },
    dispatch => ({
        selectMessage: (message) => dispatch(selectMessage(message)),
        sendInputMessage: (message) => dispatch(sendInputMessage(message)),
        updateInputMessage: (message) => dispatch(updateInputMessage(message))
    })
)(ChatBox)
