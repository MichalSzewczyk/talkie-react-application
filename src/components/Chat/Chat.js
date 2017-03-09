import React from 'react'
import bemClassName from 'bem-classname'
import Sender from './../Sender'
import MessageBoard from './../MessageBoard'
import Icon from './../Icon'
import closeIcon from './../../resources/icons/close.svg'

class Chat extends React.PureComponent {

    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'Chat')
    }

    render() {
        const {onChatExit} = this.props;

        return (
            <div className={this.classname()}>
                <div
                    className={this.classname('closeIcon')}
                    onClick={onChatExit}>
                    <Icon icon={closeIcon}/>
                </div>
                <MessageBoard/>
                <Sender/>
            </div>
        )
    }
}
export default Chat