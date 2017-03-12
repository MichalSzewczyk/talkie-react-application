import {LOGIN} from './../ducks/account'
import {requestLogin} from './../logic/login'
import {push} from 'react-router-redux';
export default function loginAction(login, password) {
    return (dispatch) => {
        requestLogin(login, password).then((loginObject) => {
            dispatch(LOGIN(loginObject))
            dispatch(push('/dashboard'))
        }).catch((error) => {
            dispatch(LOGIN(error))
        })
    }
}