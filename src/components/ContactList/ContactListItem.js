import React from 'react'
import bemClassName from 'bem-classname'
import Status from './../Status'
import USER_AVATAR_FALLBACK_URL from './../../constants/image_fallback'

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
                <img className={this.classname('avatar')} src={avatar || USER_AVATAR_FALLBACK_URL}/>
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