import TCP from './../constants/TCP'
import {UPDATE_USERS_STATUS} from './../ducks/contacts'

export default function (decodedMessage) {
    return (disptch) => {
        const type = decodedMessage.type
        const {USERS_STATUS} = TCP.receiveMessageTypes;
        switch (type) {
            case USERS_STATUS:
                disptch(UPDATE_USERS_STATUS(decodedMessage))
                return;
        }
    }
}