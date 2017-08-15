import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

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
            <table style={{ width: '100%' }}><tbody>
            {
                this.displayList(messages).map( m => {
                    const isMine = m.from === user
                    const LR = isMine? 'right': 'left'
                    const time = <span>
                        { moment(m.time).format('HH:mm') }
                    </span>
                    const msg = <Message key={m.id}
                        message={m}
                        isMine={isMine}
                        selected={ m.id === selected } />

                    let first, second
                    if (isMine) {
                        first = time
                        second = msg
                    } else {
                        first = msg
                        second = time
                    }

                    return <tr style={{
                            maxWidth: '80%',
                            float: LR,
                            align: LR,
                            clear: 'both'
                        }}
                        onClick={ (e) => selectMessage(e) }>
                        <td>{first}</td>
                        <td>{second}</td>
                    </tr>
                })
            }
            </tbody></table>
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
