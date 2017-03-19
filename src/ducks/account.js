import {createAction, handleActions} from 'redux-actions'

export const LOGIN = createAction('LOGIN')

const defaultState = {
    logged: false
}

const reducer = handleActions({
    [LOGIN().type]: (state, action) => {
        let newState;

        if (action.error) {
            newState = Object.assign({}, state, {
                error: true,
                message: action.payload.message
            })
        } else {
            const {name, lastName, avatar} = action.payload;
            newState = Object.assign({}, state, {
                logged: true,
                name,
                lastName,
                avatar
            })
        }

        return newState
    }
}, defaultState)

export default reducer
