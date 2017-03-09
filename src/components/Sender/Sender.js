import React from 'react'
import bemClassName from 'bem-classname'

class Sender extends React.PureComponent {

    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'Sender')
    }

    render() {

        return (
            <div className={this.classname()}>
                <input type="text"/>
                <button>Nakurwiaj</button>
            </div>
        )
    }
}
export default Sender