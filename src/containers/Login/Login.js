import React from 'react'
import bemClassName from 'bem-classname'
import Login from './../../components/Login'

class LoginWrapper extends React.PureComponent {
  constructor () {
    super()
    this.classname = bemClassName.bind(null, 'LoginWrapper')
  }

  render () {
    return (
      <Login />
    )
  }
}
export default LoginWrapper
