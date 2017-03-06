import React from 'react'
import bemClassName from 'bem-classname'

class DashboardPage extends React.PureComponent {

    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'DashboardPage')
    }

    render() {

        return (
            <div className={this.classname()}>
                Dashboard
                {this.props.children}
            </div>
        )
    }
}
export default DashboardPage