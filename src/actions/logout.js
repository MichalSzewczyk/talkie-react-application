import {push} from 'react-router-redux';
import {TCP_CONNECTION_DISCONNECT} from './../ducks/chat'
import TCPFacade from './../tcp/tcpFacade'
export default function logoutAction() {
    return (dispatch) => {
        TCPFacade.closeTCPConnection()
        dispatch(TCP_CONNECTION_DISCONNECT())
        dispatch(push('/'));
        location.reload();
    }
}