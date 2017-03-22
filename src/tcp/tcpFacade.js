import Websocket from './tcp'
import TCP_CONSTANTS from './../constants/TCP'

export default  {
    initializeTCPConnection,
    closeTCPConnection,
    send
}

let websocketInstance;

function initializeTCPConnection() {
    return new Promise((resolve, reject) => {
        websocketInstance = new Websocket();
        websocketInstance.onMessageReceived = onMessageReceived;
        websocketInstance.createTCPConnection(TCP_CONSTANTS.connectionURL)
            .then(resolve)
            .catch(reject);
    })
}

function closeTCPConnection() {
    websocketInstance.close();
    websocketInstance = null;
}

function send(type, ...args) {
    if (!websocketInstance) {
        throw new Error('Websocket is not ready')
        return
    }
    const message = Websocket.createMessage(type, ...args)
    websocketInstance.send(message)
}

function onMessageReceived(rawData) {
    const message = JSON.parse(rawData)
    switch (message.type) {
        case TCP_CONSTANTS.messageTypes.RECEIVE_MESSAGE:
            break;
        case TCP_CONSTANTS.messageTypes.RECEIVE_MESSAGE:
            break;
    }
}