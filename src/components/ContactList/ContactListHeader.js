import React from 'react'
import bemClassName from 'bem-classname'
import Icon from './../Icon'
import plusIcon from './../../resources/icons/plus.svg'

class ContactListHeader extends React.PureComponent {
    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'ContactListHeader')
    }

    render() {
        return (
            <div className={this.classname()}>
                <input className={this.classname('searchInput')} type="text"/>
                <Icon className={this.classname('addNewFriend')} icon={plusIcon}/>
            </div>
        )
    }
}
export default ContactListHeader