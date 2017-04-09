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
export const MESSAGE_SEND = createAction('CHAT/SEND/MESSAGE/SEND')
export const MESSAGE_RECEIVE = createAction('CHAT/MESSAGE/RECEIVE')

const defaultState = {
    tcpAlive: false,
    isConnectionInProgress: false
}

const reducer = handleActions({
    [START_CHAT().type]: (state, action) => {
        const newState = Object.assign({}, state, {
            [action.payload.with]: {
                messages: []
            }
        })
        return newState;
    },
    [MESSAGE_SEND().type]: (state, action) => {
        const {receiverId} = action.payload
        const oldMessages = state[receiverId].messages
        const updatedMessagesList = _.concat(oldMessages, {
            type: MESSAGE_TYPES.SENT,
            ...action.payload,
            uniqueID: UniqueKeyGenerator()
        })

        const newState = Object.assign({}, state, {
            [receiverId]: {
                messages: updatedMessagesList
            }
        })

        return newState;
    },
    [MESSAGE_RECEIVE().type]: (state) => {

        // TODO: implement
        return state;
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
