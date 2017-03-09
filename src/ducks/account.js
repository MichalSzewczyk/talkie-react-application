import {createAction, handleActions} from 'redux-actions'

export const LOGIN = createAction('LOGIN')

const defaultState = {
    logged: false
}

const reducer = handleActions({
    [LOGIN().type]: (state, action) => {
        console.log('ACTION', action)
        let newState;

        if (action.error) {
            newState = Object.assign({}, state, {
                error: true,
                message: action.payload.message
            })
        } else {
            newState = Object.assign({}, state, action.payload)
        }

        return newState
    }
}, defaultState)

export default reducer
