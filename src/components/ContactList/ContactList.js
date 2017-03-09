import React from 'react'
import bemClassName from 'bem-classname'
import ContactListItem from './ContactListItem'

class ContactList extends React.PureComponent {

    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'ContactList')
    }

    createContactItem(onUserSelect, contact) {
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

    createContactList(list, onUserSelect) {
        const result = list
            .map(this.createContactItem.bind(null, onUserSelect))
        return result;
    }

    render() {
        const {contacts, onUserSelect} = this.props
        const parsedContacts = this.createContactList(contacts, onUserSelect)

        return (
            <div className={this.classname()}>
                {parsedContacts}
            </div>
        )
    }
}
export default ContactList