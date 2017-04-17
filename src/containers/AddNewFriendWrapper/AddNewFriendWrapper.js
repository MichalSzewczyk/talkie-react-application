import React from 'react'
import bemClassName from 'bem-classname'
import {connect} from 'react-redux'
import NewContactHeader from './../../components/NewContact/NewContactHeader'
import NewContactListItem from '../../components/NewContact/NewContactListItem'
import ContactList from './../../components/ContactList'
import SearchUsersAction from '../../actions/search_new_contacts'
import _ from 'lodash'
import AddNewContactAction from './../../actions/add_new_contact'

class AddNewFriendWrapper extends React.Component {

    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'AddNewFriendWrapper')
        this.onSearchInputChange = _.debounce(this.onSearchInputChange.bind(this), 300);
        this.onAddNewContact = ::this.onAddNewContact;
    }

    createContactsToAdd(list = [], onAddClick) {
        return list && list.map(item => {
                return <NewContactListItem key={item.id} contact={item} onAddClick={onAddClick}/>
            })
    }

    onSearchInputChange(value) {
        const {searchNewUsers} = this.props;
        searchNewUsers(value);
    }

    onAddNewContact(newContactId) {
        const {addNewContact} = this.props
        addNewContact(newContactId)
    }

    render() {
        const {onSwitchToContactList, newContacts} = this.props;
        const fakeContacts = this.createContactsToAdd(newContacts, this.onAddNewContact);
        return (
            <div className={this.classname()}>
                <NewContactHeader
                    onSwitchToContactList={onSwitchToContactList}
                    onSearchInputChange={this.onSearchInputChange}
                />
                <ContactList isEmpty={false}>
                    {fakeContacts}
                </ContactList>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        newContacts: state.contacts.newContacts
    }
}
function mapDispatchToProps(dispatch) {
    return {
        searchNewUsers: (searchInputValue) => {
            dispatch(SearchUsersAction(searchInputValue));
        },
        addNewContact: (newContactId) => {
            dispatch(AddNewContactAction(newContactId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewFriendWrapper)