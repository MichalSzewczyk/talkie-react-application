import React from 'react'
import ContactList from './../../components/ContactList'
import ContactListHeader from './../../components/ContactList/ContactListHeader'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

class ContactListWrapper extends React.PureComponent {

    constructor() {
        super();
        this.onUserSearchChange = this.onUserSearchChange.bind(this);
        this.state = {
            inputedSearchValue: ''
        }
    }

    onUserSearchChange(inputValue = '') {
        this.setState({
            inputedSearchValue: inputValue
        })
    }

    filterContactList(contactList) {
        const regex = new RegExp(this.state.inputedSearchValue, 'i');
        return contactList.filter(contact => {
            return regex.test(`${contact.name} ${contact.lastName}`);
        })
    }

    render() {
        const {contactsList, onUserSelect} = this.props
        const filteredContactList = this.filterContactList(contactsList);
        return (
            <div className="ContactListWrapper">
                <ContactListHeader
                    onUserSearchChange={this.onUserSearchChange}
                />
                <ContactList
                    onUserSelect={onUserSelect}
                    contacts={filteredContactList}
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