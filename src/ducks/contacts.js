import {createAction, handleActions} from 'redux-actions'
import USER_CONSTANTS from './../constants/user'
export const UPDATE_USERS_STATUS = createAction('CHAT/MESSAGE/STATUS/UPDATE')
import _ from 'lodash'

const defaultState = {
    list: [],
    isRequestingNewContacts: false
}

export const ON_USER_SELECT = createAction('CONTACT_LIST/ON_USER_SELECT')
export const SET_CONTACTS = createAction('CONTACT_LIST/SET_CONTACTS')
export const REQUEST_NEW_CONTACTS_STARTED = createAction('CONTACT_LIST/REQUEST_NEW_CONTACTS_STARTED')
export const REQUEST_NEW_CONTACTS_FINISHED = createAction('CONTACT_LIST/REQUEST_NEW_CONTACTS_FINISHED')
export const REQUEST_NEW_CONTACTS_FAILED = createAction('CONTACT_LIST/REQUEST_NEW_CONTACTS_FAILED')

const reducer = handleActions({
    [SET_CONTACTS().type]: (state, action) => {
        const {friends} = action.payload

        const newState = {
            list: addStatusToList(friends)
        }
        return newState
    },
    [UPDATE_USERS_STATUS().type]: (state, {payload}) => {
        const arrayOfUserStatus = payload.payload.users
        const contactsList = state.list;
        const updatedContactList = contactsList.map(user => {
            const userFromServer = arrayOfUserStatus.find(item => item.id == user.id)
            if (!userFromServer) {
                return user;
            }
            const status = userFromServer.status === "1" ? USER_CONSTANTS.STATUS.ONLINE : USER_CONSTANTS.STATUS.OFFLINE

            return _.extend(_.cloneDeep(user), {
                status
            });
        })

        const newState = _.assign(_.cloneDeep(state), {
            list: updatedContactList
        });
        return newState;
    },
    [REQUEST_NEW_CONTACTS_STARTED().type]: (state) => {
        const newState = _.assign(state, {
            isRequestingNewContacts: true
        })
        return newState;
    },
    [REQUEST_NEW_CONTACTS_FINISHED().type]: (state) => {
        const newState = _.assign(state, {
            isRequestingNewContacts: false
        })
        return newState;
    },
    [REQUEST_NEW_CONTACTS_FAILED().type]: (state) => {
        const newState = _.assign(state, {
            isRequestingNewContacts: false
        })
        return newState;
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
