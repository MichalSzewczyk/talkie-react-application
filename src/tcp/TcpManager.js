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
            this.websocket = new WebSocket(TCP_CONSTANTS.connectionURL);

            this.websocket.onopen = () => {
                console.log('[TCP] WEBSOCKET OPENED')
                resolve()
            }
            this.websocket.onclose = onClose;
            this.websocket.onmessage = onMessage
        })
    }

    close() {
        this.websocket.close();
        this.websocket = null;
    }

    send(type, payload) {
        console.log('[TCP] SEND', type, payload)
        const message = createMessage(0, type, payload)
        this.websocket.send(message)
    }

}
const instance = new TcpManager();

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
    console.log('[TCP] WEBSOCKET CLOSED')
    reconnect()
}

function reconnect() {
    console.log('RECONNECT')
    // let interval = setInterval(() => {
    //     console.log('[TCP] Reconnecting ...')
    //     instance.createNewWebsocket()
    //         .then(() => {
    //             clearInterval(interval)
    //         })
    //         .catch(() => {
    //             console.log('[TCP] Reconnection failed')
    //         })
    // }, 10000)
}

export default  instance;