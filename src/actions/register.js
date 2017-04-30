import {LOGIN} from "./../ducks/account";
import {requestRegister} from "./../logic/register";
import {push} from "react-router-redux";
import swal from "sweetalert";

export default function registerAction(login, name, lastName, password, avatar) {
    return async (dispatch) => {

        try {
            await  requestRegister(login, name, lastName, password, avatar);
            dispatch(LOGIN('logged'));
            swal({title: "Created an account\nand logged in.", type: "info", timer: 2000});
            dispatch(push('/dashboard'));
        } catch (error) {
            swal({title: "Internal error occurred.", type: "error", timer: 2000});
        }
    }
}