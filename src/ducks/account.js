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
            const {name, lastName, avatar, id} = action.payload;
            newState = Object.assign({}, state, {
                logged: true,
                name,
                lastName,
                avatar,
                id
            })
        }

        return newState
    }
}, defaultState)

export default reducer
