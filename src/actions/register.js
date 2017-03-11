import {LOGIN} from "./../ducks/account";
import {requestRegister} from "./../logic/register";
import {push} from "react-router-redux";
import swal from "sweetalert";

export default function registerAction(mail, passwordFirst) {
	return (dispatch) => {
		requestRegister(mail, passwordFirst).then(() => {
			dispatch(LOGIN('logged'));
			swal({title: "Created an account\nand logged in.", type: "info", timer: 2000});
			dispatch(push('/dashboard'));
		}).catch((error) => {
			swal({title: "Internal error occurred.", type: "error", timer: 2000});
			dispatch(LOGIN(error));
		})
	}
}