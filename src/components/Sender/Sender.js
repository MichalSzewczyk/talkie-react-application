import React from 'react'
import bemClassName from 'bem-classname'
import Icon from './../Icon'
import sendIcon from './../../resources/icons/send.svg'

class Sender extends React.PureComponent {

    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'Sender')
    }

    render() {

        return (
            <div className={this.classname()}>
                <textarea placeholder="Enter message" className={this.classname('input')} type="text"/>
                <button><Icon className={this.classname('icon')} icon={sendIcon}/></button>
            </div>
        )
    }
}
export default Sender