import React from 'react'
import bemClassName from 'bem-classname'
import Icon from './../Icon'
import plusIcon from './../../resources/icons/plus.svg'

class ContactListHeader extends React.PureComponent {
    constructor() {
        super()
        this.onInputChange = this.onInputChange.bind(this)
        this.classname = bemClassName.bind(null, 'ContactListHeader')
        this.onSwitchToUserAdd = this.onSwitchToUserAdd.bind(this)
    }

    onInputChange(event) {
        const inputValue = event.target.value;
        const {onUserSearchChange} = this.props;
        onUserSearchChange(inputValue);
    }

    onSwitchToUserAdd() {
        const {onSwitchToUserAdd} = this.props;
        onSwitchToUserAdd();
    }

    render() {
        return (
            <div className={this.classname()}>
                <input onChange={this.onInputChange} className={this.classname('searchInput')} type="text"/>
                <Icon onClick={this.onSwitchToUserAdd} className={this.classname('addNewFriend')} icon={plusIcon}/>
            </div>
        )
    }
}
export default ContactListHeader