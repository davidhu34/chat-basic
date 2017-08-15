import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

const messageContent = m => {
    switch (m.type) {
        case 'image':
            break
        case 'text':
        default:
            return <span>
                {m.data}
            </span>
    }
}

const Message = ({
    message, isMine, selected
}) => {

    return <div style={{
            display: 'inline-block',
            wordBreak: 'break-all',
            color: selected? 'blue': 'black'
        }}>
        { messageContent(message) }
    </div>

}

export default Message
