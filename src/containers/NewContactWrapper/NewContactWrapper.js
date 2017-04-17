import React from 'react'
import bemClassName from 'bem-classname'
import {connect} from 'react-redux'
import NewContactHeader from './../../components/NewContact/NewContactHeader'
import NewContactListItem from '../../components/NewContact/NewContactListItem'
import ContactList from './../../components/ContactList'
import SearchUsersAction from '../../actions/search_new_contacts'
import _ from 'lodash'
import AddNewContactAction from './../../actions/add_new_contact'
import NewContactLoadMoreListItem from './../../components/NewContact/NewContactLoadMoreListItem'
import Icon from './../../components/Icon'
// import loaderIcon from './../../resources/icons/loader.svg'
import loaderIcon from './../../resources/loader.gif'
class NewContactWrapper extends React.Component {

    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'NewContactWrapper')
        this.onSearchInputChange = _.debounce(this.onSearchInputChange.bind(this), 300);
        this.onAddNewContact = ::this.onAddNewContact;
    }

    componentDidMount() {
        this.onSearchInputChange('')
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
        const {onSwitchToContactList, newContacts, isRequestingNewContacts} = this.props;
        const contactList = this.createContactsToAdd(newContacts, this.onAddNewContact);
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
                        ? <div className={this.classname('loader__wrapper')}>
                            <img className={this.classname('loader__icon')} src={loaderIcon}/>
                        </div>
                        : contactList}
                </ContactList>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        newContacts: state.contacts.newContacts,
        isRequestingNewContacts: state.contacts.isRequestingNewContacts
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

export default connect(mapStateToProps, mapDispatchToProps)(NewContactWrapper)