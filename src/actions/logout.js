import {push} from 'react-router-redux';
import {TCP_CONNECTION_DISCONNECT} from './../ducks/chat'
import {clearLoggedFromLocalStorage} from './../logic/auth'
import TcpManager from '../tcp/TcpManager'

export default function logoutAction() {
    return (dispatch) => {
        TcpManager.close()
        dispatch(TCP_CONNECTION_DISCONNECT())
        clearLoggedFromLocalStorage()
        dispatch(push('/'));
        location.reload();
    }
}