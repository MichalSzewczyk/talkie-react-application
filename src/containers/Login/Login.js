import React from 'react'
import bemClassName from 'bem-classname'
import Login from './../../components/Login'
import {LOGIN} from './../../ducks/account'

import {connect} from 'react-redux'
class LoginWrapper extends React.PureComponent {
  constructor () {
    super()
    this.classname = bemClassName.bind(null, 'LoginWrapper')
  }

  render () {
    const {login} = this.props
    return (
      <Login login={login} />
    )
  }
}
function mapStateToProps () {
  return {}
}
function mapDispatchToProps (dispatch) {
  return {
    login: (login, password) => {
      dispatch(LOGIN({
        login,
        password
      }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginWrapper)
