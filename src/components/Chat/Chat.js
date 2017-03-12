import React from 'react'
import bemClassName from 'bem-classname'
import Sender from './../Sender'
import MessageBoard from './../MessageBoard'
import ChatBar from './../../components/ChatBar'

class Chat extends React.PureComponent {

    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'Chat')
    }

    render() {
        const {onChatExit, contactInfo, sendMessage} = this.props;

        return (
            <div className={this.classname()}>
                <ChatBar
                    onChatExit={onChatExit}
                    contactInfo={contactInfo}
                />
                <MessageBoard/>
                <Sender sendMessage={sendMessage} />
            </div>
        )
    }
}
export default Chat