import React from 'react'
import bemClassName from 'bem-classname'

class EmptyChat extends React.PureComponent {

    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'EmptyChat')
    }

    onLogoutClick() {
        const {logoutAction} = this.props;
        logoutAction();
    }

    render() {

        return (
            <div className={this.classname()}>
                <span className={this.classname('message')}>PLEASE SELECT SOMEONE TO CHAT</span>
                <span className={this.classname('or')}>OR</span>
                <div onClick={::this.onLogoutClick} className={this.classname('logoutWrapper')}>
                    <span className={this.classname('logout')}>LOGOUT</span>
                </div>
            </div>
        )
    }
}
export default EmptyChat