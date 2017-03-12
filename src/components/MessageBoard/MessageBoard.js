import React from 'react'
import ReactDOM from 'react-dom'
import bemClassName from 'bem-classname'
import Message from './Message'
import MESSAGE_TYPE from './../../constants/message_types'

class MessageBoard extends React.PureComponent {

    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'MessageBoard')
    }

    createMessagesFromData(data = []) {

        const result = data.map(item => {
            return <Message key={item.uniqueID} {...item} />
        });


        return result;
    }

    componentWillReceiveProps(nextProps) {
        const lastMessage = nextProps.messages[nextProps.messages.length - 1];

        if (lastMessage.type === MESSAGE_TYPE.SENT) {
            this.scrollToBottom()
        }
    }

    scrollToBottom() {
        const {messageBoard} = this.refs
        const domNode = ReactDOM.findDOMNode(messageBoard)
        domNode.scrollTop = domNode.scrollHeight

    }

    render() {
        const {messages} = this.props
        const messageArray = this.createMessagesFromData(messages);

        return (
            <div ref="messageBoard" className={this.classname()}>
                {messageArray}
            </div>
        )
    }
}
export default MessageBoard