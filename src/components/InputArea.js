import React, { Component } from 'react'
import { connect } from 'react-redux'

const TextInput = ({
	user, selectedRoom, selectedMessage, inputText,
	updateInputMessage, sendInputMessage
}) => {
	const send = e => {
		e.preventDefault()
		sendInputMessage({
			room: selectedRoom,
			from: user,
			type: 'text',
			data: inputText
		})
		input.value = ''
	}
	let input

	return <div className="InputArea"
		style={{
			width:'100%',
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

export default TextInput
/*
export default connect(
	state => state.client,
	dispatch => ({
		sendInputMessage:
			(message) => dispatch(sendInputMessage(message)),
		updateInputMessage:
			(message) => dispatch(updateInputMessage(message))
	})
)(TextInput)
*/
