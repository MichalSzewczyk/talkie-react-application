import React from "react";
import bemClassName from "bem-classname";
import Register from "./../../components/Register";
import {connect} from "react-redux";
import RegisterAction from "./../../actions/register";
class RegisterWrapper extends React.PureComponent {

    constructor() {
        super();
        this.classname = bemClassName.bind(null, 'RegisterWrapper')
    }

	render() {
		const {registerAction} = this.props;
		return (
			<Register register={registerAction}/>
		)
	}

}

function mapStateToProps() {
	return {}
}
function mapDispatchToProps(dispatch) {
	return {
		registerAction: (mail, password) => {
			dispatch(RegisterAction(mail, password))
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterWrapper)