import React from 'react'
import ContactList from './../../components/ContactList'
import ContactListHeader from './../../components/ContactList/ContactListHeader'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

class ContactListWrapper extends React.PureComponent {

    render() {
        const {contactsList, onUserSelect} = this.props

        return (
            <div className="ContactListWrapper">
                <ContactListHeader/>
                <ContactList
                    onUserSelect={onUserSelect}
                    contacts={contactsList}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        contactsList: state.contacts.list
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onUserSelect: (userId) => {
            dispatch(push(`/dashboard/chat/${userId}`))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactListWrapper)