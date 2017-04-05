import TCP_CONSTANTS from './../constants/TCP'
let regeneratorRuntime = require("regenerator-runtime");


class TcpManager {
    constructor() {
    }

    isConnectionEstabilished() {
        return !!this.websocket
    }

    createNewWebsocket() {
        return new Promise((resolve, reject) => {
            console.log('[TCP] Connecting ...')
            this.websocket = new WebSocket(TCP_CONSTANTS.connectionURL);
            this.websocket.onopen = () => {
                console.log('[TCP] Connection Established')
                resolve()
            }

            this.websocket.onmessage = onMessage
            this.websocket.onerror = onClose
            this.websocket.onclose = onClose
        })
    }

    close() {
        this.websocket.close();
        this.websocket = null;
    }

    send(type, payload) {

        const message = createMessage(0, type, payload)

        if (isSocketAvailable()) {
            console.log('[TCP] SEND', type, payload)
            instance.websocket.send(message)
        } else {
            console.warn('[TCP] Cannot send. Connection Unavailable')
        }
    }

}
const instance = new TcpManager();

function isSocketAvailable() {
    return !!instance.websocket && instance.websocket.readyState === TCP_CONSTANTS.websocketStates.OPEN;
}

function createMessage(id, type, payload) {
    return JSON.stringify({
        type,
        id,
        "payload": {
            ...payload
        }
    })
}

function onMessage(message) {
    const decodedMessage = JSON.parse(message.data)
    console.log('[TCP] RECEIVED MESSAGE', decodedMessage)
}

function onClose() {
    console.log('[TCP]Connection closed')
    if (!instance.interval) {
        reconnect()
    }

}

function reconnect() {

    setTimeout(() => {
        instance.createNewWebsocket()
    }, 10000)
}

export default  instance;