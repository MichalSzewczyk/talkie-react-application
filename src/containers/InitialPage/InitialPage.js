import React from 'react'
import bemClassName from 'bem-classname'
import Login from './../../components/Login'
import {LOGIN} from './../../ducks/account'

import {connect} from 'react-redux'
class InitialPage extends React.PureComponent {
    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'InitialPage')
    }

    render() {
        return (
            <div className={this.classname()}>
                <div className={this.classname('childrenWrapper')}>
                    {this.props.children}
                </div>
            </div>
        )
        const {login} = this.props
    }
}
function mapStateToProps() {
    return {}
}
function mapDispatchToProps(dispatch) {
    return {
        login: (login, password) => {
            dispatch(LOGIN({
                login,
                password
            }))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InitialPage)
