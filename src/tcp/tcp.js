import TCP_CONSTANTS from './../constants/TCP'

class TCP {
    constructor() {
        this.websocket = null;
        this.messagesCollection = [];
    }

    onOpen = () => {
        console.log('WEBSOCKET OPENED')
        if (this.messagesCollection.length === 0) {
            return
        }
        this.sendSavedMessages()
    }

    sendSavedMessages() {
        this.messagesCollection.forEach(message => {
            this.send(message)
        })
        this.messagesCollection = []
    }

    onMessage = (packedMessage) => {
        if (this.onMessageReceived) {
            this.onMessageReceived(packedMessage.data)
        }
    }
    onClose = () => {
        console.log('WEBSOCKET CLOSE')
    }


    createTCPConnection(url) {
        return new Promise((resolve, reject) => {
            this.websocket = new WebSocket(url);
            this.websocket.onopen = () => {
                this.onOpen()
                this.websocket.onopen = this.onOpen;
                resolve()
            };
            this.websocket.onclose = () => {
                this.onClose()
                this.websocket.onclose = this.onClose;
                reject();
            };
            this.websocket.onmessage = this.onMessage;


        })
    }

    send(message) {
        console.log('[TCP] SEND MESSAGE: ', message, this.websocket.readyState)
        if (this.websocket.readyState !== TCP_CONSTANTS.websocketStates.OPEN) {
            this.messagesCollection.push(message)
            //TODO: handle situtation where we trying to send message to closed socket
            return
        }
        this.websocket.send(message)
    }


    close() {
        const closeMessage = TCP.createMessage(TCP_CONSTANTS.messageTypes.CLOSE_STREAM);
        this.websocket.send(closeMessage)
        this.websocket.close()
    }

    static createMessage(type, ...args) {
        // TODO: fix it
        return JSON.stringify({
            type,
            payload: {...args}[0]
        })
    }
}

export default TCP;