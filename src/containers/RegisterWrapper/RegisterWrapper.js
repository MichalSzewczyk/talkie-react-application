import React from "react";
import bemClassName from "bem-classname";
import Register from "./../../components/Register";
import {connect} from "react-redux";
import {push} from 'react-router-redux';
import RegisterAction from "./../../actions/register";
class RegisterWrapper extends React.PureComponent {

    constructor() {
        super();
        this.classname = bemClassName.bind(null, 'RegisterWrapper')
    }

    render() {
        const {registerAction, onAbort} = this.props;
        return (
            <Register
                onRegisterAction={registerAction}
                onAbortAction={onAbort}
            />
        )
    }

}

function mapStateToProps() {
    return {}
}
function mapDispatchToProps(dispatch) {
    return {
        registerAction: (login, name, lastName, password, avatar) => {
            dispatch(RegisterAction(login, name, lastName, password, avatar))
        },
        onAbort: () => {
            dispatch(push("/"))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterWrapper)