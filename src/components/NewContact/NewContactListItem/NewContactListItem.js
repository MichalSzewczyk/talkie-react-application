import React from 'react'
import bemClassName from 'bem-classname'
import ContactAvatar from './../../ContactAvatar'
import Icon from './../../Icon'
import addNewContactIcon from '../../../resources/icons/addNewContact.svg'

class NewContactListItem extends React.PureComponent {
    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'NewContactListItem')
        this.onAddClick = ::this.onAddClick
    }

    onAddClick() {
        const {contact, onAddClick} = this.props
        onAddClick(contact.id);
    }

    render() {
        const {contact} = this.props;
        const {name, lastName} = contact;
        return (
            <div className={this.classname()}>
                <div className={this.classname('name__icon_wrapper')}>
                    <ContactAvatar/>
                    <span> {name}&nbsp;{lastName}</span>
                </div>
                <Icon onClick={this.onAddClick} className={this.classname('add_icon')} icon={addNewContactIcon}/>
            </div>
        )
    }
}
export default NewContactListItem