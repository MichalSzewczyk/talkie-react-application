import {LOGIN} from './../ducks/account'
import {requestLogin} from './../logic/login'

export default function loginAction(login, password) {
    return (dispatch) => {
        requestLogin(login, password).then(() => {
            dispatch(LOGIN('logged'));
        }).catch((error) => {
            dispatch(LOGIN(error));
        })
    }
}