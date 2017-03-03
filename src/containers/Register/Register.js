import React from 'react'
import bemClassName from 'bem-classname'
import Register from './../../components/Register'

class RegisterWrapper extends React.PureComponent {
  constructor () {
    super()
    this.classname = bemClassName.bind(null, 'RegisterWrapper')
  }

  render () {
    return (
      <Register />
    )
  }
}
export default RegisterWrapper
