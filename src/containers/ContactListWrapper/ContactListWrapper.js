import React from 'react'
import ContactList from './../../components/ContactList'
import {connect} from 'react-redux'
class ContactListWrapper extends React.PureComponent {

    render() {
        const {contactsList} = this.props

        return (
            <ContactList contacts={contactsList} />
        )
    }
}

function mapStateToProps(state) {
    return {
        contactsList: state.contacts.list
    }
}
export default connect(mapStateToProps)(ContactListWrapper)