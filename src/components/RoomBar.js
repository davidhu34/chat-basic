import React, { Component } from 'react'
import { connect } from 'react-redux'

const RoomBar = ({ room, users }) => {
    const uids = Object.keys(users)
    let roomName = ''
    let userNames = (uids.length < 4)?
        uids.map( id => users[id].name).join(', ')
    : (
        users[uids[0]].name
         + ', ' + users[uids[1]].name
         + ', and other ' + uids.length
    )
    if (room.name) {
        roomName = room.name
    } else {
        roomName = userNames
        userNames = ''
    }

    return <div className="RoomBar"
        style={{
            width: '100%',
            textAlign: 'center'
        }}>
        <div>{roomName}</div>
        <div>{userNames}</div>
    </div>

}

export default RoomBar
