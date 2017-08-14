import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

const messageContent = m => {
    switch (m.type) {
        case 'image':
            break
        case 'text':
        default:
            return <div>
                {m.data}
            </div>
    }
}

const Message = ({
    message, isMine, selected,
    clickMessage
}) => {

    const time = <div>
        { message.time }
    </div>
    const msg = messageContent(message)

    return <div style={{
            display: 'inline',
            color: selected? 'blue': 'black'
        }}
        onClick={ (e) => clickMessage(message) }>
        { isMine? <span>{time}{msg}</span>: <span>{msg}{time}</span> }
    </div>

}

export default Message
