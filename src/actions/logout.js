import {push} from 'react-router-redux';
import {TCP_CONNECTION_DISCONNECT} from './../ducks/chat'
import {clearLoggedFromLocalStorage} from './../logic/auth'
import TcpManager from '../tcp/TcpManager'
import TCP_CONSTANTS from './../constants/TCP'

export default function logoutAction() {
    return (dispatch) => {
        TcpManager.send({
            type: TCP_CONSTANTS.sendMessageTypes.LOGOUT
        })
        TcpManager.close()
        dispatch(TCP_CONNECTION_DISCONNECT())
        clearLoggedFromLocalStorage()
        dispatch(push('/'));
        location.reload();
    }
}