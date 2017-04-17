import TCP from './../constants/TCP'
import {UPDATE_USERS_STATUS} from './../ducks/contacts'
import {MESSAGE_RECEIVE} from './../ducks/chat'
import _ from 'lodash'
import NotificationManager from './../utils/NotificationManager'

export default function (decodedMessage) {
    return (dispatch) => {
        const type = decodedMessage.type
        const {USERS_STATUS, RECEIVE_MESSAGE} = TCP.receiveMessageTypes;
        switch (type) {
            case USERS_STATUS:
                dispatch(UPDATE_USERS_STATUS(decodedMessage))
                break;
            case RECEIVE_MESSAGE:
                dispatch(handleReceiveMessage(decodedMessage))
                break;
        }
    }
}


function handleReceiveMessage(decodedMessage) {
    return (dispatch, getState) => {
        dispatch(MESSAGE_RECEIVE(decodedMessage))
        const state = getState();
        const messageText = _.get(decodedMessage, 'payload.body')
        const fromId = decodedMessage.id;
        const isChatWithUserOpened = _.get(state, `chat.${fromId}.isConversationOpened`, false);

        if (!isChatWithUserOpened) {
            const {name, lastName} = _.get(state, 'contacts.list').find(contact => contact.id == fromId)
            NotificationManager.showInfo(`${name} ${lastName} sent message: ${messageText}`);
        }

    }
}