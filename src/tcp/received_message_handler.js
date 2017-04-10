import TCP from './../constants/TCP'
import {UPDATE_USERS_STATUS} from './../ducks/contacts'
import {MESSAGE_RECEIVE} from './../ducks/chat'

export default function (decodedMessage) {
    return (disptch) => {
        const type = decodedMessage.type
        const {USERS_STATUS,RECEIVE_MESSAGE} = TCP.receiveMessageTypes;
        switch (type) {
            case USERS_STATUS:
                disptch(UPDATE_USERS_STATUS(decodedMessage))
                break;
            case RECEIVE_MESSAGE:
                disptch(MESSAGE_RECEIVE(decodedMessage))
                break;
        }
    }
}