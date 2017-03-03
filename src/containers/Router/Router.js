import React from 'react'
import {Router, Route, browserHistory} from 'react-router'
import Login from './../Login'
import Register from './../Register'

class RouterWrapper extends React.PureComponent {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Login} />
        <Route path='/register' component={Register} />
      </Router>
    )
  }
}
export default RouterWrapper
