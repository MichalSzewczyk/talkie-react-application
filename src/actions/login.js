import {LOGIN} from './../ducks/account'
import {SET_CONTACTS} from './../ducks/contacts'
import {requestLogin} from './../logic/login'
import {push} from 'react-router-redux';
import {saveUserCredentialsToLocalStorage} from './../logic/auth'

export default function loginAction(login, password, redirectToDashboard = true) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            requestLogin(login, password)
                .then((loginObject) => {
                    saveUserCredentialsToLocalStorage(login, password)
                    const {friends} = loginObject
                    dispatch(LOGIN(loginObject))
                    dispatch(SET_CONTACTS({friends}))
                    if (redirectToDashboard) {
                        dispatch(push('/dashboard'))
                    }
                    resolve()
                }).catch((error) => {
                dispatch(LOGIN(error))
                reject()
            })
        })

    }
}