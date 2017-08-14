const initClient = {
    user: '1',
    selectedRoom: '1',
    selectedMessage: null
}
export const client = ( state = initClient, action ) => {
    switch ( action.type ) {
        case 'SELECT_MESSAGE':
            return {
                ...state,
                selectedMessage:
                    state.selectedMessage !== action.message.id?
                        action.message.id: null
            }
        default:
            return state
    }
}
