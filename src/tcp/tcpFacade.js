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