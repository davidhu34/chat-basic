const initChat = {
    messages: {
        '1': {
            id: '1',
            time: '00:00',
            from: '1',
            type: 'text',
            data: 'hello i\'m message 1'
        },
        '2': {
            id: '2',
            time: '00:12',
            from: '1',
            type: 'text',
            data: 'greetings i\'m message 2'
        },
        '3': {
            id: '3',
            time: '00:34',
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
export const chat = ( state = initChat, action ) => {
    switch ( action.type ) {
        default:
            return state
    }
}
