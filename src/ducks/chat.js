import {createAction, handleActions} from 'redux-actions'
import MESSAGE_TYPES from './../constants/message_types'

export const START_CHAT = createAction('CHAT/CONVERSATION/START')
export const MESSAGE_SEND = createAction('CHAT/SEND/MESSAGE/SEND')
export const MESSAGE_RECEIVE = createAction('CHAT/MESSAGE/RECEIVE')

const defaultState = {}

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
        const oldMessages = state[action.payload.to].messages
        const updatedMessagesList = _.concat(oldMessages, {
            type: MESSAGE_TYPES.SENT,
            timestamp: action.payload.timestamp,
            body: action.payload.body
        })

        const newState = Object.assign({}, state, {
            [action.payload.to]: {
                messages: updatedMessagesList
            }
        })

        return newState;
    },
    [MESSAGE_RECEIVE().type]: (state, action) => {

        // TODO: implement
        return state;
    },
}, defaultState)

export default reducer
