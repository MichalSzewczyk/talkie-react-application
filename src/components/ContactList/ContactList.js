import React from 'react'
import bemClassName from 'bem-classname'
import ContactListItem from './ContactListItem'

class ContactList extends React.PureComponent {

    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'ContactList')
    }

    createContactItem(contact) {
        const {id, name, lastName, email, avatar, description} = contact
        return (
            <ContactListItem
                id={id}
                name={name}
                lastName={lastName}
                email={email}
                avatar={avatar}
                key={id}
                description={description}
            />
        );
    }

    createContactList(list) {
        const result = list.map(this.createContactItem);
        return result;
    }

    render() {
        const {contacts} = this.props
        const parsedContacts = this.createContactList(contacts)

        return (
            <div className={this.classname()}>
                {parsedContacts}
            </div>
        )
    }
}
export default ContactList