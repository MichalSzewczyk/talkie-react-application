import {createAction, handleActions} from 'redux-actions'
import mockedContactsList from './../mocks/contacts_list'
const defaultState = {
    list: mockedContactsList
}

export const ON_USER_SELECT = createAction('CONTACT_LIST/ON_USER_SELECT')

const reducer = (state = defaultState, actions) => {
    return state
}

export default reducer
