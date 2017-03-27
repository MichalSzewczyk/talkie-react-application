import {
    TCP_CONNECTION_CREATED,
    TCP_CONNECTION_FAILED,
    TCP_CONNECTION_INITIALIZATION
} from './../ducks/chat'
import TcpManager from '../tcp/TcpManager'

export default () => {
    return (dispatch) => {
        dispatch(TCP_CONNECTION_INITIALIZATION())

        TcpManager.createNewWebsocket()
            .then(() => {
                dispatch(TCP_CONNECTION_CREATED())
                return
            })
            .catch(() => {
                dispatch(TCP_CONNECTION_FAILED())
            })
    }
}