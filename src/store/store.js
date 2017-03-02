import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'remote-redux-devtools'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({})
const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools({realtime: true})(applyMiddleware(thunk))
)

export default  store;