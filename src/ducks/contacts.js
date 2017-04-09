import {createAction, handleActions} from 'redux-actions'
import USER_CONSTANTS from './../constants/user'
export const UPDATE_USERS_STATUS = createAction('CHAT/MESSAGE/STATUS/UPDATE')
import _ from 'lodash'

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
    },
    [UPDATE_USERS_STATUS().type]: (state, {payload}) => {
        const arrayOfUserStatus = payload.payload.users
        const contactsList = state.list;
        const updatedContactList = contactsList.map(user => {
            const userFromServer = arrayOfUserStatus.find(item => item.id === user.id)
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
