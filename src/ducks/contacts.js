import {createAction, handleActions} from 'redux-actions'
import USER_CONSTANTS from './../constants/user'

const defaultState = {
    list: []
}

export const ON_USER_SELECT = createAction('CONTACT_LIST/ON_USER_SELECT')
export const SET_CONTACTS = createAction('CONTACT_LIST/SET_CONTACTS')

const reducer = handleActions({
    [SET_CONTACTS().type]: (state, action) => {
        const {friends} = action.payload

        const newState = {
            list: addStatusToList(friends)
        }
        return newState
    }
}, defaultState)

function addStatusToList(list) {
    return list.map((contact) => {
        if (!contact.status)
            contact.status = USER_CONSTANTS.STATUS.UNKNOWN
        return contact
    })
}

export default reducer
