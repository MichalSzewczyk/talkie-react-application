import {
    TCP_CONNECTION_CREATED,
    TCP_CONNECTION_FAILED,
    TCP_CONNECTION_INITIALIZATION
} from './../ducks/chat'
import TcpFacade from './../tcp/tcpFacade'

export default () => {
    return (dispatch) => {
        dispatch(TCP_CONNECTION_INITIALIZATION())
        TcpFacade.initializeTCPConnection()
            .then(() => {
                dispatch(TCP_CONNECTION_CREATED())
                return
            })
            .catch(() => {
                dispatch(TCP_CONNECTION_FAILED())
            })
    }
}