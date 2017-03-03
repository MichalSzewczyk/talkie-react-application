import React from 'react'
import bemClassName from 'bem-classname'

class Login extends React.PureComponent {
  constructor () {
    super()
    this.classname = bemClassName.bind(null, 'Login')
  }

  render () {
    return (
      <div className={this.classname()}>
        <input type='email' />
        <input type='password' />
        <button>Login</button>
        <button>Register</button>
      </div>
    )
  }
}
export default Login
