import React from 'react'
import bemClassName from 'bem-classname'

class Chat extends React.PureComponent {

    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'Chat')
    }

    render() {

        return (
            <div className={this.classname()}>
                Chat Dumb
            </div>
        )
    }
}
export default Chat