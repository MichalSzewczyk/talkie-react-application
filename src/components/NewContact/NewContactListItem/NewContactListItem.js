import React from 'react'
import bemClassName from 'bem-classname'
import ContactAvatar from './../../ContactAvatar'
import Icon from './../../Icon'
import addNewContactIcon from '../../../resources/icons/addNewContact.svg'
import removeNewContactIcon from '../../../resources/icons/removeExistingContact.svg'

class NewContactListItem extends React.PureComponent {
    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'NewContactListItem')
        this.onAddClick = ::this.onAddClick
        this.onRemoveClick = ::this.onRemoveClick
    }

    onAddClick() {
        const {contact, onAddClick} = this.props
        onAddClick(contact.id);
    }

    onRemoveClick() {
        const {contact, onRemoveExistingContact} = this.props
        onRemoveExistingContact(contact.id);
    }

    render() {
        const {contact, alreadyConnected} = this.props;
        const {name, lastName} = contact;
        return (
            <div className={this.classname()}>
                <div className={this.classname('name__icon_wrapper')}>
                    <ContactAvatar/>
                    <span> {name}&nbsp;{lastName}</span>
                </div>
                {
                    alreadyConnected ?
                        <Icon
                            onClick={this.onRemoveClick}
                            className={this.classname('remove_icon')}
                            icon={removeNewContactIcon}/>
                        : <Icon
                        onClick={this.onAddClick}
                        className={this.classname('add_icon')}
                        icon={addNewContactIcon}/>
                }
            </div>
        )
    }
}
export default NewContactListItem