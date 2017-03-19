import {LOGIN} from './../ducks/account'
import {SET_CONTACTS} from './../ducks/contacts'
import {requestLogin} from './../logic/login'
import {push} from 'react-router-redux';


export default function loginAction(login, password) {
    return (dispatch) => {
        requestLogin(login, password).then((loginObject) => {
            const {friends} = loginObject
            dispatch(LOGIN(loginObject))
            dispatch(SET_CONTACTS({friends}))
            dispatch(push('/dashboard'))
        }).catch((error) => {
            dispatch(LOGIN(error))
        })
    }
}