import React from 'react'
import ReactDOM from 'react-dom'
import bemClassName from 'bem-classname'
import Sender from './../Sender'
import MessageBoard from './../MessageBoard'
import ChatBar from './../../components/ChatBar'

class Chat extends React.PureComponent {

    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'Chat')
    }

    onMessageSend(...args) {
        const {sendMessage} = this.props
        sendMessage(...args)
        this.setFocusToInputTextArea()
    }

    setFocusToInputTextArea() {
        const senderInputDomNode = ReactDOM.findDOMNode(this.refs.sender).querySelector('.Sender__input')
        senderInputDomNode.focus()
    }

    render() {
        const {onChatExit, contactInfo, messages} = this.props;

        return (
            <div className={this.classname()}>
                <ChatBar
                    onChatExit={onChatExit}
                    contactInfo={contactInfo}
                />
                <MessageBoard
                    messages={messages}
                />
                <Sender ref="sender" sendMessage={::this.onMessageSend}/>
            </div>
        )
    }
}
export default Chat