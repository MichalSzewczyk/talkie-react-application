import {push} from 'react-router-redux';
import {TCP_CONNECTION_DISCONNECT} from './../ducks/chat'
import {clearLoggedFromLocalStorage} from './../logic/auth'
import TCPFacade from './../tcp/tcpFacade'

export default function logoutAction() {
    return (dispatch) => {
        TCPFacade.closeTCPConnection()
        dispatch(TCP_CONNECTION_DISCONNECT())
        clearLoggedFromLocalStorage()
        dispatch(push('/'));
        location.reload();
    }
}