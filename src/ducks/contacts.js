import {createAction, handleActions} from 'redux-actions'
// import mockedContactsList from './../mocks/contacts_list'
const defaultState = {
    list: []
}

export const ON_USER_SELECT = createAction('CONTACT_LIST/ON_USER_SELECT')
export const SET_CONTACTS = createAction('CONTACT_LIST/SET_CONTACTS')

const reducer = handleActions({
    [SET_CONTACTS().type]: (state, action) => {
        const {friends} = action.payload
        const newState = {
            list: friends
        }
        return newState
    }
}, defaultState)

export default reducer
