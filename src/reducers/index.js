import { combineReducers } from 'redux'
import { data } from './data'
import { chat } from './chat'
import { client } from './client'

const App = combineReducers({
    data,
    client,
    chat,
})

export default App
