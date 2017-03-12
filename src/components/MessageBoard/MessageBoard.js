import React from 'react'
import bemClassName from 'bem-classname'
import Message from './Message'

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

    render() {
        const {messages} = this.props
        const messageArray = this.createMessagesFromData(messages);

        return (
            <div className={this.classname()}>
                {messageArray}
            </div>
        )
    }
}
export default MessageBoard