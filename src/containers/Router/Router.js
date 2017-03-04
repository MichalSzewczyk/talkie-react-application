import React from 'react'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import InitialPage from './../InitialPage'
import Login from './../../components/Login'
import Register from './../../components/Register'
import store from './../../store'
import {syncHistoryWithStore} from 'react-router-redux'
const history = syncHistoryWithStore(browserHistory, store);
class RouterWrapper extends React.PureComponent {
    render() {
        return (
            <Router history={history}>
                <Route path='/' component={InitialPage}>
                    <IndexRoute component={Login} />
                    <Route path='/register' component={Register}/>
                </Route>
            </Router>
        )
    }
}
export default RouterWrapper
