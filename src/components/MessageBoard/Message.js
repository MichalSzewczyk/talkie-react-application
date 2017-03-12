import React from 'react'
import bemClassName from 'bem-classname'
import MESSAGE_TYPE from './../../constants/message_types'

class Message extends React.PureComponent {

    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'Message')
    }

    render() {
        const {
            timestamp,
            body,
            type
        } = this.props
        return (
            <div className={this.classname({
                'SENT': type === MESSAGE_TYPE.SENT,
                'RECEIVED': type === MESSAGE_TYPE.RECEIVED,
            })}>
                <div className={this.classname('cloudBox')}>
                    <span className={this.classname('value')}>{body}</span>
                </div>
            </div>
        )
    }
}
export default Message