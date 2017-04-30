import {
    TCP_CONNECTION_CREATED,
    TCP_CONNECTION_FAILED,
    TCP_CONNECTION_INITIALIZATION
} from './../ducks/chat'
import TcpManager from '../tcp/TcpManager'

export default () => {
    return async (dispatch) => {
        dispatch(TCP_CONNECTION_INITIALIZATION())
        try {
            await  TcpManager.createNewWebsocket();
            dispatch(TCP_CONNECTION_CREATED())
        } catch (error) {
            dispatch(TCP_CONNECTION_FAILED())
        }
    }
}