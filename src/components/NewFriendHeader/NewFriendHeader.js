import React from 'react'
import bemClassName from 'bem-classname'
import Icon from './../Icon'
import backIcon from './../../resources/icons/back.svg'

class NewFriendHeader extends React.PureComponent {
    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'NewFriendHeader')
        this.onBackButtonClick = this.onBackButtonClick.bind(this)
    }

    onBackButtonClick() {
        const {onSwitchToContactList} = this.props;
        onSwitchToContactList();
    }

    render() {
        return (
            <div className={this.classname()}>
                <Icon className={this.classname('backButton')} onClick={this.onBackButtonClick}
                      icon={backIcon}/>
            </div>
        )
    }
}
export default NewFriendHeader