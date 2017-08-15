import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import Message from './Message'

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
        const {
            messages, user, selectedMessage,
            selectMessage
        } = this.props

        return <div className="MessageList"
            ref="scroll"
            style={{
                width: '100%',
                height: 'auto',
                overflowY: 'scroll',
            }}>
            <table style={{ width: '100%' }}><tbody>
            {
                this.displayList(messages).map( m => {
                    const isMine = m.from === user
                    const selected = m.id === selectedMessage
                    const LR = isMine? 'right': 'left'

                    const time = <span>
                        { moment(m.time).format('HH:mm') }
                    </span>
                    const msg = <Message message={m}
                        isMine={isMine}
                        selected={ selected } />

                    let first, second
                    if (isMine) {
                        first = time
                        second = msg
                    } else {
                        first = msg
                        second = time
                    }

                    return <tr key={m.id}
                        style={{
                            maxWidth: '80%',
                            color: selected? 'blue': 'black',
                            float: LR,
                            align: LR,
                            clear: 'both'
                        }}
                        onClick={ (e) => selectMessage(m) }>
                        <td>{first}</td>
                        <td>{second}</td>
                    </tr>
                })
            }
            </tbody></table>
        </div>
    }
}
export default MessageList
/*
export default connect(
    ({ chat, client }) => {
        return {
            messages: chat.rooms[client.selectedRoom].messages
                .map( m => chat.messages[m] ),
            user: client.user,
            selectedMessage: client.selectedMessage
        }
    },
    dispatch => ({
        selectMessage: (message) => dispatch(selectMessage(message))
    })
)(MessageList)
*/
