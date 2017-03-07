import {handleActions} from 'redux-actions'
import mockedContactsList from './../mocks/contacts_list'
const defaultState = {
    list: mockedContactsList
}

const reducer = (state = defaultState, actions) => {
    return state
}

export default reducer
