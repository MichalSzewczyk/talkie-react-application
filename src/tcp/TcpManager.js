import TCP_CONSTANTS from './../constants/TCP'
let regeneratorRuntime = require("regenerator-runtime");
import store from './../store'
import receivedMessageHandler from './received_message_handler'
import userStatus from './userStatus'

class TcpManager {
    constructor() {
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
            this.websocket.onerror = () => {
                reject();
                onError();
            }
            this.websocket.onclose = () => {
                reject();
                onClose();
            }
        })
    }

    close() {
        this.websocket.close();
        this.websocket = null;
    }

    send(type, payload) {
        const state = store && store.getState();
        const userID = state.account.id;
        const message = createMessage(userID, type, payload)

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
    try {
        store.dispatch(receivedMessageHandler(decodedMessage));
    } catch (e) {
        console.error('Error during hanlding message', e, decodedMessage)
    }

}

function onClose() {

    console.log('[TCP]Connection closed')
    userStatus.stop();
    reconnect()
}
function onError() {
    console.log('[TCP]Connection Error')
    reconnect()
}
const reconnect = (() => {
    let isReconnecting = false;
    return function () {
        if (isReconnecting) {
            return;
        }
        isReconnecting = true
        setTimeout(() => {
            instance.createNewWebsocket().then(() => {
                isReconnecting = false;
            }).catch(() => {
                isReconnecting = false;
            })
        }, 3000)
    }
})()

export default  instance;