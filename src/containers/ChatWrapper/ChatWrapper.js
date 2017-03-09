import React from 'react'
import Chat from './../../components/Chat'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

class ChatWrapper extends React.PureComponent {

    render() {
        const {onChatExit} = this.props

        return (
            <Chat onChatExit={onChatExit}/>
        )
    }
}
function mapStateToProps() {
    return {}
}
function mapDistpachToProps(dispatch) {
    return {
        onChatExit: () => {
            dispatch(push(`/dashboard`))
        }
    }
}
export default connect(mapStateToProps, mapDistpachToProps)(ChatWrapper)