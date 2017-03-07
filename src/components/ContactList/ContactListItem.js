import React from 'react'
import bemClassName from 'bem-classname'
import Status from './../Status'

class ContactListItem extends React.PureComponent {

    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'ContactList__item')
    }

    render() {
        const {id, name, lastName, email, avatar, description, status} = this.props
        const identification = `${name} ${lastName}`
        const fallbackImage = 'https://image.flaticon.com/icons/png/512/149/149072.png'
        return (
            <div className={this.classname()}>
                <img className={this.classname('avatar')} src={avatar || fallbackImage}/>
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