import {createAction, handleActions} from 'redux-actions'

export const LOGIN = createAction('LOGIN')

const defaultState = {
    logged: false
}

const reducer = handleActions({
    [LOGIN().type]: (state) => {
        return state
    }
}, defaultState)

export default reducer
