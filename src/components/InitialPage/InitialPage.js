import React from 'react'
import bemClassName from 'bem-classname'

import {connect} from 'react-redux'
class InitialPage extends React.PureComponent {
    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'InitialPage')
    }

    render() {
        return (
            <div className={this.classname()}>
                <div className={this.classname('childrenWrapper')}>
                    {this.props.children}
                </div>
            </div>
        )
        const {login} = this.props
    }
}

export default InitialPage
