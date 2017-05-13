export default {
    connectionURL: 'ws:///52.42.71.54:90/echo',
    websocketStates: {
        'CONNECTING': 0,
        'OPEN': 1,
        'CLOSING': 2,
        'CLOSED': 3
    },
    sendMessageTypes: {
        'SEND_MESSAGE': 'SEND_MESSAGE',
        'PING': 'PING',
        'CLOSE_STREAM': 'CLOSE_STREAM',
        'FETCH_USER_STATUS': 'FETCH_USER_STATUS',
        'FIND_USER': 'FIND_USER',
        'LOGOUT': 'LOGOUT'
    },
    receiveMessageTypes: {
        'RECEIVE_MESSAGE': 'RECEIVE_MESSAGE',
        'USERS_STATUS': 'USERS_STATUS'
    }
}