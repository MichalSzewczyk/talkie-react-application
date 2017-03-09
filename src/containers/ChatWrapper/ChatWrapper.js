import React from 'react'
import Chat from './../../components/Chat'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

class ChatWrapper extends React.PureComponent {

    render() {
        const {onChatExit, contactInfo} = this.props

        return (
            <Chat
                onChatExit={onChatExit}
                contactInfo={contactInfo}
            />
        )
    }
}
function mapStateToProps(state, props) {
    const {userId} = props.params

    return {
        contactInfo: state.contacts.list.find(item => item.id == userId)
    }
}
function mapDistpachToProps(dispatch) {
    return {
        onChatExit: () => {
            dispatch(push(`/dashboard`))
        }
    }
}
export default connect(mapStateToProps, mapDistpachToProps)(ChatWrapper)