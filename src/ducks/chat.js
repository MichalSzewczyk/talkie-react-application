import {createAction, handleActions} from 'redux-actions'
import MESSAGE_TYPES from './../constants/message_types'
import TCP_CONSTANTS from './../constants/TCP'
import UniqueKeyGenerator from './../utils/uniqueKeyGeneartor'
import TCPFacade from '../tcp/TcpManager'
export const TCP_CONNECTION_INITIALIZATION = createAction('CHAT/TCP/TCP_CONNECTION_INITIALIZATION')
export const TCP_CONNECTION_CREATED = createAction('CHAT/TCP/TCP_CONNECTION_CREATED')
export const TCP_CONNECTION_FAILED = createAction('CHAT/TCP/TCP_CONNECTION_FAILED')
export const TCP_CONNECTION_DISCONNECTED = createAction('CHAT/TCP/TCP_CONNECTION_DISCONNECTED')
export const TCP_CONNECTION_DISCONNECT = createAction('CHAT/TCP/TCP_CONNECTION_DISCONNECT')
export const START_CHAT = createAction('CHAT/CONVERSATION/START')
export const CLOSE_CHAT = createAction('CHAT/CONVERSATION/CLOSE')
export const MESSAGE_SEND = createAction('CHAT/SEND/MESSAGE/SEND')
export const MESSAGE_RECEIVE = createAction('CHAT/MESSAGE/RECEIVE')

const defaultState = {
    tcpAlive: false,
    isConnectionInProgress: false
}

const reducer = handleActions({
    [START_CHAT().type]: (state, action) => {
        const userIdToTalkWith = action.payload.with;
        let newState = _.assign({}, state);

        if (!state[userIdToTalkWith]) {
            newState = _.assign({}, state, {
                [userIdToTalkWith]: {
                    messages: [],
                    isConversationOpened: true
                }
            })
        } else {
            newState = _.assign({}, state, {
                [userIdToTalkWith]: _.assign({}, state[userIdToTalkWith], {
                    isConversationOpened: true
                })
            })
        }

        return newState;
    },
    [CLOSE_CHAT().type]: (state, {payload}) => {
        const chattedWith = payload;
        const newState = _.assign({}, state, {
            [chattedWith]: _.assign({}, state[chattedWith], {
                isConversationOpened: false
            })
        })

        return newState;
    },
    [MESSAGE_SEND().type]: (state, action) => {
        const {receiverId} = action.payload
        const oldMessages = state[receiverId] && state[receiverId].messages || []
        const updatedMessagesList = _.concat(oldMessages, {
            type: MESSAGE_TYPES.SENT,
            ...action.payload,
            uniqueID: UniqueKeyGenerator()
        })

        const newState = Object.assign({}, state, {
            [receiverId]: {
                messages: updatedMessagesList,
                isConversationOpened: true
            }
        })

        return newState;
    }, [MESSAGE_RECEIVE().type]: (state, {payload}) => {
        // TODO: FIX
        const senderId = payload.id;
        const {body, timestamp} = payload.payload
        const oldMessages = state[senderId] && state[senderId].messages || []
        const updatedMessagesList = _.concat(oldMessages, {
            type: MESSAGE_TYPES.RECEIVED,
            body,
            timestamp,
            uniqueID: UniqueKeyGenerator()
        })

        const newState = Object.assign({}, state, {
            [senderId]: {
                messages: updatedMessagesList
            }
        })

        return newState;
    },

    [TCP_CONNECTION_INITIALIZATION().type]: (state) => {
        const newState = Object.assign({}, state, {
            isConnectionInProgress: true,
            tcpAlive: false
        })
        return newState
    },
    [TCP_CONNECTION_CREATED().type]: (state) => {
        const newState = Object.assign({}, state, {
            isConnectionInProgress: false,
            tcpAlive: true
        })
        return newState
    },
    [TCP_CONNECTION_FAILED().type]: (state) => {
        const newState = Object.assign({}, state, {
            isConnectionInProgress: false,
            tcpAlive: false
        })
        return newState
    },
    [TCP_CONNECTION_DISCONNECTED().type]: (state) => {
        const newState = Object.assign({}, state, {
            isConnectionInProgress: false,
            tcpAlive: false
        })
        return newState
    }
}, defaultState)

export default reducer
