import React from 'react'
import bemClassName from 'bem-classname'
import {Link} from 'react-router'

class Login extends React.PureComponent {
    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'Login')
    }

    onLogin() {
        const {login} = this.props
        const loginValue = this.refs.login.value;
        const passwordValue = this.refs.password.value;
        login(loginValue, passwordValue)
    }

    render() {

        return (
            <div className={this.classname()}>
                <input ref="login" type='email'/>
                <input ref="password" type='password'/>
                <button onClick={::this.onLogin}>Login</button>
                <Link to='/register'>
                    <button>Register</button>
                </Link>
            </div>
        )
    }
}
export default Login
