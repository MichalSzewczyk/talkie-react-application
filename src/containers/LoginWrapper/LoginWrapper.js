import React from 'react'
import bemClassName from 'bem-classname'
import Login from './../../components/Login'
import {connect} from 'react-redux'
import LoginAction from './../../actions/login'
class LoginWrapper extends React.PureComponent {

    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'LoginWrapper')
    }

    render() {
        const {loginAction} = this.props
        return (
            <Login login={loginAction}/>
        )
    }
}

function mapStateToProps() {
    return {}
}
function mapDispatchToProps(dispatch) {
    return {
        loginAction: (login, password) => {
            dispatch(LoginAction(login, password))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginWrapper)