import React from 'react'
import ContactList from './../../components/ContactList'
import ContactListHeader from './../../components/ContactList/ContactListHeader'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import ContactListItem from './../../components/ContactList/ContactListItem'
import EmptyContactListWarning from './../../components/ContactList/EmptyContactListWarning'

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

    static createContactItem(onUserSelect, contact) {
        const {id, name, lastName, email, avatar, description, status} = contact

        return (
            <ContactListItem
                id={id}
                name={name}
                lastName={lastName}
                email={email}
                avatar={avatar}
                key={id}
                description={description}
                status={status}
                onUserSelect={onUserSelect}
            />
        );
    }


    static createContactList(onUserSelect, list) {
        const result = list
            .map(ContactListWrapper.createContactItem.bind(null, onUserSelect))
        return result;
    }


    render() {
        const {contactsList, onUserSelect, onSwitchToUserAdd} = this.props
        const filteredContactList = this.filterContactList(contactsList);
        const contactList = ContactListWrapper.createContactList(onUserSelect, filteredContactList);

        return (
            <div className="ContactListWrapper">
                <ContactListHeader
                    onUserSearchChange={this.onUserSearchChange}
                    onSwitchToUserAdd={onSwitchToUserAdd}
                />
                <ContactList
                    onEmptyList={EmptyContactListWarning}
                    isEmpty={!contactList.length}
                >
                    {contactList}
                </ContactList>
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