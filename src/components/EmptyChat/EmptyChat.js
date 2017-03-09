import React from 'react'
import bemClassName from 'bem-classname'

class EmptyChat extends React.PureComponent {

    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'EmptyChat')
    }

    render() {

        return (
            <div className={this.classname()}>
                <span className={this.classname('message')}>PLEASE SELECT SOMEONE TO CHAT</span>
            </div>
        )
    }
}
export default EmptyChat