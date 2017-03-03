import {createAction, handleActions} from 'redux-actions'

export const LOGIN = createAction('LOGIN')

const defaultState = {
  logged: false
}

const reducer = handleActions({
  [LOGIN().type]: (state, action) => {
    console.log('LOGIN', state, action)
    const newState = Object.assign({}, state, {
      logged: !state.account.logged
    })
    return newState
  }
}, defaultState)

export default reducer

