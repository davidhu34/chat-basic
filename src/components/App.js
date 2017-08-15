import React, { Component } from 'react'
import { connect } from 'react-redux'

import ChatBox from '../containers/ChatBox'

const App = ({ data, Add }) => (
    <div style={{width: '400px', height:'800px'}}>
        <ChatBox />
    </div>
)

export default App
