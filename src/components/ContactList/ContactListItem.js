import React from 'react'
import bemClassName from 'bem-classname'

class ContactListItem extends React.PureComponent {

    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'ContactList__item')
    }

    render() {
        const {id, name, lastName, email, avatar, description} = this.props
        const identification = `${name} ${lastName}`
        return (
            <div className={this.classname()}>
                <img className={this.classname('avatar')} src={avatar}/>
                <div className={this.classname('textBox')}>
                    <span className={this.classname('identification')}>{identification}</span>
                    <span className={this.classname('description')}>{description}</span>
                </div>
            </div>
        )
    }
}
export default ContactListItem