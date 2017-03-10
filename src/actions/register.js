import {LOGIN} from "./../ducks/account";
import {requestRegister} from "./../logic/register";
import {push} from "react-router-redux";
import swal from "sweetalert";

export default function registerAction(mail, passwordFirst) {
	return (dispatch) => {
		requestRegister(mail, passwordFirst).then(() => {
			dispatch(LOGIN('logged'));
			dispatch(push('/dashboard'));
			swal({title: "Created an account.", type: "success", timer: 2000});
		}).catch((error) => {
			swal({title: "Internal error occurred.", type: "error", timer: 2000});
			dispatch(LOGIN(error));
		})
	}
}