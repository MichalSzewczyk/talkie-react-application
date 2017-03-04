import React from 'react'
import {Router, Route, browserHistory} from 'react-router'
import Login from './../Login'
import Register from './../Register'
import store from './../../store'
import {syncHistoryWithStore} from 'react-router-redux'
const history = syncHistoryWithStore(browserHistory, store);
class RouterWrapper extends React.PureComponent {
    render() {
        return (
            <Router history={history}>
                <Route path='/' component={Login}/>
                <Route path='/register' component={Register}/>
            </Router>
        )
    }
}
export default RouterWrapper
