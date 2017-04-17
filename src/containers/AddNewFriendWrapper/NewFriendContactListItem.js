import React from 'react'
import bemClassName from 'bem-classname'
import ContactAvatar from './../../components/ContactAvatar'

class NewFriendContactListItem extends React.PureComponent {
    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'NewFriendContactListItem')
    }

    render() {
        const {contact} = this.props;
        const {name, lastName} = contact;
        return (
            <div className={this.classname()}>
                <ContactAvatar/>
                <span> {name}&nbsp;{lastName}</span>
            </div>
        )
    }
}
export default NewFriendContactListItem