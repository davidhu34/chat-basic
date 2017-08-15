import moment from 'moment'

const initChat = {
    messages: {
        '1': {
            id: '1',
            time: 1318874398806,
            room: '1',
            from: '1',
            type: 'text',
            data: 'hello i\'m message 1'
        },
        '2': {
            id: '2',
            time: 1318871398801,
            room: '1',
            from: '1',
            type: 'text',
            data: 'greetings i\'m message 2'
        },
        '3': {
            id: '3',
            time: 1308874398701,
            room: '1',
            from: '2',
            type: 'text',
            data: 'reply with i\'m message 3'
        }
    },
    rooms: {
        '1': {
            id: '1',
            users: ['1','2'],
            messages: ['1','2','3']
        }
    },
    users: {
        '1': {
            id: '1',
            name: 'rey'
        },
        '2': {
            id: '2',
            name: 'finn'
        },
        '3': {
            id: '3',
            name: 'luke'
        }
    }
}
let tempCount = 3

const messages = (state, action) => {
    switch (action.type) {
        case 'INPUT_MESSAGE_SEND':
            return {
                ...state,
                [action.message.id]: action.message
            }
        default:
            return state
    }
}
const rooms = (state, action) => {
    switch (action.type) {
        case 'INPUT_MESSAGE_SEND':
            const room = state[action.message.room]
            const id = action.message.id
            return {
                ...state,
                [room.id]: {
                    ...room,
                    messages: [...room.messages, id]
                }
            }
        default:
            return state
    }
}
export const chat = (state = initChat, action) => {
    switch (action.type) {
        case 'INPUT_MESSAGE_SEND':
            tempCount += 1
            const actionPass = {
                ...action,
                message: {
                    ...action.message,
                    id: String(tempCount),
                    time: moment().valueOf(),
                }
            }
            return {
                ...state,
                rooms: rooms(state.rooms, actionPass),
                messages: messages(state.messages, actionPass)
            }
        default:
            return state
    }
}
