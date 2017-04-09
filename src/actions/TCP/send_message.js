import TCPManager from './../../tcp/TcpManager'
import TCP_CONSTANTS from './../../constants/TCP'
import {MESSAGE_SEND} from './../../ducks/chat'

export default (dispatch) => {
    return (receiverId, body, timestamp) => {
        const data = {timestamp, body, receiverId}
        dispatch(MESSAGE_SEND(data))
        TCPManager.send(TCP_CONSTANTS.sendMessageTypes.SEND_MESSAGE, data)
    }
}