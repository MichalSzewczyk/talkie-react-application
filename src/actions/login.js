import {LOGIN} from './../ducks/account'
import {SET_CONTACTS} from './../ducks/contacts'
import {requestLogin} from './../logic/login'
import {push} from 'react-router-redux';
import {saveUserCredentialsToLocalStorage} from './../logic/auth'
import FETCH_STATUS from './TCP/fetch_status'
import userStatus from './../tcp/userStatus'
import NotificationManager from './../utils/NotificationManager';

export default function loginAction(login, password, redirectToDashboard = true) {
    return async (dispatch) => {
        try {
            const loginObject = await requestLogin(login, password);
            saveUserCredentialsToLocalStorage(login, password)
            const {friends} = loginObject;
            dispatch(LOGIN(loginObject))
            dispatch(SET_CONTACTS({friends}))
            dispatch(FETCH_STATUS())
            dispatch(userStatus.start())
            if (redirectToDashboard) {
                dispatch(push('/dashboard'))
            }
            NotificationManager.success('Login succeed');
        } catch (error) {
            NotificationManager.error(error)
        }
    }
}