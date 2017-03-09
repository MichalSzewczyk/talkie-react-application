import {LOGIN} from "./../ducks/account";
import {requestRegister} from "./../logic/register";
import {push} from "react-router-redux";

export default function registerAction(mail, passwordFirst) {
	return (dispatch) => {
		requestRegister(mail, passwordFirst).then(() => {
			dispatch(LOGIN('logged'));
			dispatch(push('/dashboard'))
		}).catch((error) => {
			dispatch(LOGIN(error));
		})
	}
}