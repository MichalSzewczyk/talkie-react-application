import React from 'react'
import bemClassName from 'bem-classname'
import {connect} from 'react-redux'
import NewContactHeader from './../../components/NewContact/NewContactHeader'
import NewContactListItem from '../../components/NewContact/NewContactListItem'
import ContactList from './../../components/ContactList'
import SearchUsersAction from '../../actions/search_new_contacts'
import _ from 'lodash'
import AddNewContactAction from './../../actions/add_new_contact'
import RemoveExistingContactAction from './../../actions/remove_existing_contact'
import Loader from './../../components/loader'

class NewContactWrapper extends React.Component {

    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'NewContactWrapper')
        this.onSearchInputChange = _.debounce(this.onSearchInputChange.bind(this), 300);
        this.onAddNewContact = ::this.onAddNewContact;
        this.onRemoveExistingContact = ::this.onRemoveExistingContact;
    }

    componentDidMount() {
        this.onSearchInputChange('')
    }

    createContactsToAdd(list = [], existingContacts = [], onAddClick, onRemoveExistingContact) {
        return list && list.map(item => {
                const isThisItemAlreadyAFriend = !!existingContacts.find(contact => contact.id === item.id);
                return <NewContactListItem
                    key={item.id}
                    alreadyConnected={isThisItemAlreadyAFriend}
                    contact={item}
                    onAddClick={onAddClick}
                    onRemoveExistingContact={onRemoveExistingContact}
                />
            }).sort(item => item.props.alreadyConnected)
    }

    onSearchInputChange(value) {
        const {searchNewUsers} = this.props;
        searchNewUsers(value);
    }

    onAddNewContact(newContactId) {
        const {addNewContact} = this.props
        addNewContact(newContactId)
    }

    onRemoveExistingContact(existingContactId) {
        const {onRemoveExistingContact} = this.props
        onRemoveExistingContact(existingContactId)
    }

    filterContacts(loggedUserId, newContacts = []) {
        return newContacts && newContacts.filter(contact => contact.id != loggedUserId)
    }

    render() {
        const {onSwitchToContactList, newContacts, existingContacts, isRequestingNewContacts, loggedUserId} = this.props;
        const filtredList = this.filterContacts(loggedUserId, newContacts);
        const contactList = this.createContactsToAdd(filtredList, existingContacts, this.onAddNewContact, this.onRemoveExistingContact);
        const isContactListEmpty = !_.get(contactList, 'length', 0) && !isRequestingNewContacts
        return (
            <div className={this.classname()}>
                <NewContactHeader
                    onSwitchToContactList={onSwitchToContactList}
                    onSearchInputChange={this.onSearchInputChange}
                />

                <ContactList
                    isEmpty={isContactListEmpty}
                >
                    {isRequestingNewContacts
                        ? <Loader/>
                        : contactList}
                </ContactList>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        newContacts: state.contacts.newContacts,
        existingContacts: state.contacts.list,
        isRequestingNewContacts: state.contacts.isRequestingNewContacts,
        loggedUserId: state.account.id
    }
}
function mapDispatchToProps(dispatch) {
    return {
        searchNewUsers: (searchInputValue) => {
            dispatch(SearchUsersAction(searchInputValue));
        },
        addNewContact: (newContactId) => {
            dispatch(AddNewContactAction(newContactId))
        },
        onRemoveExistingContact: (existingContactId) => {
            dispatch(RemoveExistingContactAction(existingContactId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewContactWrapper)