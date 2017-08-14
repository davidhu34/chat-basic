import React, { Component } from 'react'
import { connect } from 'react-redux'
import Message from './Message'
import { selectMessage } from './actions'

class MessageList extends Component {
    scrollToBottom () {
        const node = this.refs.scroll
  	    node.scrollTop = node.scrollHeight
  	}
    displayList (messages) {
        return messages
    }
  	componentDidMount () {
  	    this.scrollToBottom();
  	}
  	componentDidUpdate () {
  	    this.scrollToBottom();
  	}
    render () {
        const { messages, user, selected, selectMessage } = this.props

        return <div ref="scroll"
            style={{
                width: '100%',
                overflowY: 'scroll',
            }}>
            {
                this.displayList(messages).map( m =>
                    <Message key={m.id}
                        message={m}
                        isMine={ m.from === user }
                        selected={ m.id === selected }
                        clickMessage={selectMessage}
                    />
                )
            }
        </div>
    }
}

export default connect(
    ({ chat, client }) => {
        return {
            messages: chat.rooms[client.selectedRoom].messages
                .map( m => chat.messages[m] ),
            user: client.user,
            selected: client.selectedMessage
        }
    },
    dispatch => ({
        selectMessage: (message) => dispatch(selectMessage(message))
    })
)(MessageList)
