import React from 'react'
import bemClassName from 'bem-classname'
import ContactList from './../../containers/ContactListWrapper'
import Chat from './../../components/Chat'

class DashboardPage extends React.PureComponent {

    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'DashboardPage')
    }

    render() {

        return (
            <div className={this.classname()}>
                <div className={this.classname('box')}>
                    <ContactList/>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export default DashboardPage