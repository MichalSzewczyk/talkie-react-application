import React from 'react'
import {Router, Route, browserHistory} from 'react-router'
import Login from './../Login'

class RouterWrapper extends React.PureComponent {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Login} />
      </Router>
    )
  }
}
export default RouterWrapper
