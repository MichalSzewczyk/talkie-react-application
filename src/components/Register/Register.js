import React from 'react'
import bemClassName from 'bem-classname'
import {Link} from 'react-router'

class Register extends React.PureComponent {

    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'Register')
    }

    render() {

        return (
            <div className={this.classname()}>
                Register
                <Link to="/"><button>Back to login</button></Link>
            </div>
        )
    }
}
export default Register