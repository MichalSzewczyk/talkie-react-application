import React from 'react'
import bemClassName from 'bem-classname'
import {connect} from 'react-redux'
import NewFriendHeader from './../../components/NewFriendHeader'
import NewFriendContactListItem from './NewFriendContactListItem'
import ContactList from './../../components/ContactList'
import SearchUsersAction from '../../actions/search_new_contacts'
import _ from 'lodash'

class AddNewFriendWrapper extends React.Component {

    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'AddNewFriendWrapper')
        this.onSearchInputChange = _.debounce(this.onSearchInputChange.bind(this), 300);
    }

    createContactsToAdd(list = []) {
        return list && list.map(item => {
                return <NewFriendContactListItem key={item.id} contact={item}/>
            })
    }

    onSearchInputChange(value) {
        const {searchNewUsers} = this.props;
        searchNewUsers(value);
    }

    render() {
        const {onSwitchToContactList, newContacts} = this.props;
        const fakeContacts = this.createContactsToAdd(newContacts);
        return (
            <div className={this.classname()}>
                <NewFriendHeader
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewFriendWrapper)