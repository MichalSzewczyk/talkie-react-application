import React from 'react'
import loaderIcon from './../../resources/loader.gif'
import bemClassName from 'bem-classname'

class Loader extends React.PureComponent {

    constructor() {
        super();
        this.classname = bemClassName.bind(null, 'Loader')
    }

    render() {
        return (
            <div className={this.classname('wrapper')}>
                <img className={this.classname('icon')} src={loaderIcon}/>
            </div>
        )
    }
}

export default Loader