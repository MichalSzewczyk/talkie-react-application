import React from 'react'
import bemClassName from 'bem-classname'

class Status extends React.PureComponent {

    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'Status')
    }

    render() {
        const {status} = this.props
        return (
            <div className={this.classname({
                'online': status === 'online',
                'offline': status === 'offline'
            })}/>
        )
    }
}
export default Status