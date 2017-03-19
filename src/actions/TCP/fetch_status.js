import TCPFacade from './../../tcp/tcpFacade'
import TCP_CONSTANTS from './../../constants/TCP'
export default () => {
    return (dispatch, getState) => {
        const state = getState()
        const listOfUsers = createListOfUsers(state.contacts.list)
        TCPFacade.send(TCP_CONSTANTS.messageTypes.FETCH_USER_STATUS, {
            listOfUsers
        })

    }
}
function createListOfUsers(friends = []) {
    return friends.map(item => item.id)
}