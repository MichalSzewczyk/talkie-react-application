import TCPManager from '../../tcp/TcpManager'
import TCP_CONSTANTS from './../../constants/TCP'

export default () => {
    return (dispatch, getState) => {
        const state = getState()
        const listOfUsers = createListOfUsers(state.contacts.list)
        TCPManager.send(TCP_CONSTANTS.messageTypes.FETCH_USER_STATUS, {
            listOfUsers
        })

    }
}
function createListOfUsers(friends = []) {
    return friends.map(item => item.id)
}