import {createAction, handleActions} from 'redux-actions'
import USER_CONSTANTS from './../constants/user'
export const UPDATE_USERS_STATUS = createAction('CHAT/MESSAGE/STATUS/UPDATE')
import _ from 'lodash'

const defaultState = {
    list: [],
    isRequestingNewContacts: false,
    isRequestingNewContact: false,
    isRequestingUserList: false,
    isRequestingRemoveExistingContact: false
}

export const ON_USER_SELECT = createAction('CONTACT_LIST/ON_USER_SELECT')
export const SET_CONTACTS = createAction('CONTACT_LIST/SET_CONTACTS')

export const REQUEST_NEW_CONTACTS_STARTED = createAction('CONTACT_LIST/REQUEST_NEW_CONTACTS_STARTED')
export const REQUEST_NEW_CONTACTS_FINISHED = createAction('CONTACT_LIST/REQUEST_NEW_CONTACTS_FINISHED')
export const REQUEST_NEW_CONTACTS_FAILED = createAction('CONTACT_LIST/REQUEST_NEW_CONTACTS_FAILED')

export const CLEAR_NEW_CONTACTS = createAction('CONTACT_LIST/CLEAR_NEW_CONTACTS')

export const ADD_NEW_FRIEND_REQUEST_STARTED = createAction('CONTACT_LIST/ADD_NEW_FRIEND_REQUEST_STARTED')
export const ADD_NEW_FRIEND_REQUEST_SUCCESS = createAction('CONTACT_LIST/ADD_NEW_FRIEND_REQUEST_SUCCESS')
export const ADD_NEW_FRIEND_REQUEST_FAILURE = createAction('CONTACT_LIST/ADD_NEW_FRIEND_REQUEST_FAILURE')

export const REMOVE_EXISTING_FRIEND__STARTED = createAction('CONTACT_LIST/REMOVE_EXISTING_FRIEND__STARTED')
export const REMOVE_EXISTING_REQUEST_SUCCESS = createAction('CONTACT_LIST/REMOVE_EXISTING_REQUEST_SUCCESS')
export const REMOVE_EXISTING_REQUEST_FAILURE = createAction('CONTACT_LIST/REMOVE_EXISTING_REQUEST_FAILURE')

export const REQUEST_USER_CONTACT_LIST_STARTED = createAction('CONTACT_LIST/REQUEST_USER_CONTACT_LIST_STARTED');
export const REQUEST_USER_CONTACT_LIST_SUCCESS = createAction('CONTACT_LIST/REQUEST_USER_CONTACT_LIST_SUCCESS');
export const REQUEST_USER_CONTACT_LIST_FAIL = createAction('CONTACT_LIST/REQUEST_USER_CONTACT_LIST_FAIL');

const reducer = handleActions({
    [SET_CONTACTS().type]: (state, action) => {
        const {friends} = action.payload

        const newState = _.assign(state, {
            list: addStatusToList(friends)
        });
        return newState
    },
    [UPDATE_USERS_STATUS().type]: (state, {payload}) => {
        const arrayOfUserStatus = payload.payload.users;
        const contactsList = state.list;
        const updatedContactList = contactsList.map(user => {
            const userFromServer = arrayOfUserStatus.find(item => item.id == user.id);
            if (!userFromServer) {
                return user;
            }
            const status = userFromServer.status === "1" ? USER_CONSTANTS.STATUS.ONLINE : USER_CONSTANTS.STATUS.OFFLINE

            return _.extend({}, user, {
                status
            });
        })

        const newState = _.assign(_.cloneDeep(state), {
            list: updatedContactList
        });
        return newState;
    },
    [REQUEST_NEW_CONTACTS_STARTED().type]: (state) => {
        const newState = _.assign({}, state, {
            isRequestingNewContacts: true,
            newContacts: null
        })
        return newState;
    },
    [REQUEST_NEW_CONTACTS_FINISHED().type]: (state, {payload}) => {
        const searchResult = payload.search.friends;
        const newState = _.assign({}, state, {
            isRequestingNewContacts: false,
            newContacts: searchResult
        })
        return newState;
    },
    [REQUEST_NEW_CONTACTS_FAILED().type]: (state) => {
        const newState = _.assign({}, state, {
            isRequestingNewContacts: false,
            newContacts: null
        })
        return newState;
    },
    [CLEAR_NEW_CONTACTS().type]: (state) => {
        const newState = _.assign({}, state, {
            newContacts: null
        })
        return newState;
    },
    [ADD_NEW_FRIEND_REQUEST_STARTED().type]: (state, {payload}) => {
        const {contactId} = payload;
        return _.assign({}, state, {
            isRequestingNewContact: true,
            newContacts: updateNewUserList(state, contactId, 'pending')
        });
    },
    [ADD_NEW_FRIEND_REQUEST_SUCCESS().type]: (state) => {
        return _.assign({}, state, {
            isRequestingNewContact: false,
        });
    },
    [ADD_NEW_FRIEND_REQUEST_FAILURE().type]: (state) => {
        const newState = _.assign({}, state, {
            isRequestingNewContact: false,
        })
        return newState;
    },
    [REMOVE_EXISTING_FRIEND__STARTED().type]: (state, {payload}) => {
        const {contactId} = payload;
        const newState = _.assign({}, state, {
            isRequestingRemoveExistingContact: true,
            newContacts: updateNewUserList(state, contactId, 'pending')
        })
        return newState;
    },
    [REMOVE_EXISTING_REQUEST_SUCCESS().type]: (state) => {
        const newState = _.assign({}, state, {
            isRequestingRemoveExistingContact: false,
        })
        return newState;
    },
    [ REMOVE_EXISTING_REQUEST_FAILURE().type]: (state) => {
        const newState = _.assign({}, state, {
            isRequestingRemoveExistingContact: false
        })
        return newState;
    },
    [ REQUEST_USER_CONTACT_LIST_STARTED().type]: (state) => {
        const newState = _.assign({}, state, {
            isRequestingUserList: true
        })
        return newState;
    },
    [ REQUEST_USER_CONTACT_LIST_SUCCESS().type]: (state, {payload}) => {
        const newState = _.assign({}, state, {
            isRequestingUserList: false,
            list: payload,
            newContacts: clearNewUserListStatuses(state)
        })
        return newState;
    },
    [ REQUEST_USER_CONTACT_LIST_FAIL().type]: (state) => {
        const newState = _.assign({}, state, {
            isRequestingUserList: false,
            newContacts: clearNewUserListStatuses(state)
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
function updateNewUserList(state, contactId, status) {
    return state.newContacts
        .map(item => {
            if (item.id === contactId) {
                return _.assign({}, item, {
                    status
                })
            }
            return item;
        });
}
function clearNewUserListStatuses(state) {
    return state.newContacts
        .map(item => {
            return _.assign({}, item, {
                status: 'finished'
            })
        })
}

export default reducer
