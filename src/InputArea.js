import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateInputMessage, sendInputMessage } from './actions'

const TextInput = ({
	user, selectedRoom, selectedMessage, inputText,
	updateInputMessage, sendInputMessage
}) => {
	const send = e => {
		e.preventDefault()
		sendInputMessage({
			time: 'wow',
			room: selectedRoom,
			from: user,
			type: 'text',
			data: inputText
		})
		input.value = ''
	}
	let input

	return <div style={{
		position: 'absolute',
		bottom: 0
	}}>
		<table style={{
			width:'100%',
			border: 'none',
			borderBottom: '2px solid RoyalBlue',
			WebKitScrollbar: {
				width:20
			}
		}}><tbody><tr style={{
			width: '100%'
		}}>
		<td>
			<textarea ref={ ref => { input = ref } }
				style={{
					width: '100%',
					height: 'auto',
					overflow: 'hidden',
					resize: 'none',
					border: 'none',
					outline: 'none',
					verticalAlign: 'bottom'
				}}
				placeholder="write something..."
				onChange={ (e) => {
					updateInputMessage(input.value)
				}}
				onKeyPress={ (e) => {
					if (e.key === 'Enter' && !e.shiftKey)
						send(e)
				}}>
			</textarea>
		</td><td style={{
				textAlign: 'center',
				width: 60,
				height: '100%'
			}}
			onClick={ (e) => send(e) }>
			<div>SEND</div>
		</td>
		</tr></tbody></table>
	</div>
}


export default connect(
	state => state.client,
	dispatch => ({
		sendInputMessage:
			(message) => dispatch(sendInputMessage(message)),
		updateInputMessage:
			(message) => dispatch(updateInputMessage(message))
	})
)(TextInput)
