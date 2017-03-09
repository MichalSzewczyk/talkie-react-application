import React from 'react'
import bemClassName from 'bem-classname'

class MessageBoard extends React.PureComponent {

    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'MessageBoard')
    }

    render() {
        return (
            <div className={this.classname()}>

            </div>
        )
    }
}
export default MessageBoard