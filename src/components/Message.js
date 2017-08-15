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

const Message = ({ message }) => {

    return <div style={{
            display: 'inline-block',
            wordBreak: 'break-all',
        }}>
        { messageContent(message) }
    </div>

}

export default Message
