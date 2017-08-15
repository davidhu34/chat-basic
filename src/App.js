import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Add } from './actions'
import MessageList from './MessageList'
import TextInput from './InputArea'

const App = ({ data, Add }) => (
    <div>
        <MessageList />
        <TextInput />
    </div>
)


export default connect(
    state => ({ ...state }),
    dispatch => ({
        Add: (e) => dispatch( Add() )
    })
)(App)
