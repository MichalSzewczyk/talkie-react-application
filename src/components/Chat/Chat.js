import React from 'react'
import bemClassName from 'bem-classname'
import Sender from './../Sender'
import MessageBoard from './../MessageBoard'

class Chat extends React.PureComponent {

    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'Chat')
    }

    render() {

        return (
            <div className={this.classname()}>
                <MessageBoard/>
                <Sender/>
            </div>
        )
    }
}
export default Chat