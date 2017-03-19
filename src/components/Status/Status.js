import React from 'react'
import bemClassName from 'bem-classname'
import USER_CONSTANTS from './../../constants/user'

class Status extends React.PureComponent {

    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'Status')
    }

    render() {
        const {status} = this.props
        return (
            <div className={this.classname({
                'online': status === USER_CONSTANTS.STATUS.ONLINE,
                'offline': status === USER_CONSTANTS.STATUS.OFFLINE,
                'unknown': status === USER_CONSTANTS.STATUS.UNKNOWN,
            })}/>
        )
    }
}
export default Status