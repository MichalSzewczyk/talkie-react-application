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
                <ContactList/>
                <Chat/>
            </div>
        )
    }
}
export default DashboardPage