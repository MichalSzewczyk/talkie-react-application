export default {
    connectionURL: 'wss://echo.websocket.org',
    websocketStates: {
        'CONNECTING': 0,
        'OPEN': 1,
        'CLOSING': 2,
        'CLOSED': 3
    },
    messageTypes: {
        'SEND_MESSAGE': 'SEND_MESSAGE',
        'RECEIVE_MESSAGE': 'RECEIVE_MESSAGE',
        'PING': 'PING',
        'CLOSE_STREAM': 'CLOSE_STREAM',
        'FETCH_USER_STATUS': 'FETCH_USER_STATUS'
    }
}