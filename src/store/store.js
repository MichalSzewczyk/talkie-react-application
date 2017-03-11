import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import AccountReducer from './../ducks/account'
import ContactsReducer from './../ducks/contacts'
import thunk from 'redux-thunk'
import {hashHistory} from 'react-router'
import {routerReducer, routerMiddleware} from 'react-router-redux'

const combinedReducers = combineReducers({
    account: AccountReducer,
    contacts: ContactsReducer,
    routing: routerReducer
})

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(
    applyMiddleware(thunk, routerMiddleware(hashHistory))
)
const store = createStore(combinedReducers, enhancer)

export default store
