import React from 'react'
import bemClassName from 'bem-classname'
import ParticleSky from './../ParticleSky'

import {connect} from 'react-redux'
class InitialPage extends React.PureComponent {
    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'InitialPage')
    }

    render() {
        return (
            <div className={this.classname()}>
                <ParticleSky/>
                <div className={this.classname('childrenWrapper')}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default InitialPage
