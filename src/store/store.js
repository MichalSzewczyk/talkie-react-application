import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import AccountReducer from './../ducks/account'
import thunk from 'redux-thunk'

const combinedReducers = combineReducers({
  account: AccountReducer
})

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
)
const store = createStore(combinedReducers, enhancer)

export default store