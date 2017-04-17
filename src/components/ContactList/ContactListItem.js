import React from 'react'
import bemClassName from 'bem-classname'
import Status from './../Status'
import ContactAvatar from './../ContactAvatar'

class ContactListItem extends React.PureComponent {

    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'ContactList__item')
    }

    onItemClick() {
        const {id, onUserSelect} = this.props
        onUserSelect(id);
    }

    render() {
        const {name, lastName, avatar, description, status} = this.props
        const identification = `${name} ${lastName}`

        return (
            <div onClick={::this.onItemClick} className={this.classname()}>
                <ContactAvatar avatarImage={avatar}/>
                <div className={this.classname('textBox')}>
                    <div className={this.classname('mainText')}>
                        <span className={this.classname('identification')}>{identification}</span>
                        <Status status={status}/>
                    </div>
                    <span className={this.classname('description')}>{description}</span>
                </div>
            </div>
        )
    }
}
export default ContactListItem