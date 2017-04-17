import React from 'react'
import bemClassName from 'bem-classname'
import Icon from './../Icon'
import closeIcon from './../../resources/icons/close.svg'
import USER_AVATAR_FALLBACK_URL from './../../constants/image_fallback'

class ChatBar extends React.PureComponent {

    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'ChatBar')
        this.onExitClick = ::this.onExitClick;
    }

    onExitClick() {
        const {onChatExit, contactInfo} = this.props
        onChatExit(contactInfo.id)
        // userId
    }

    render() {
        const {contactInfo} = this.props
        const userName = `${contactInfo.name} ${contactInfo.lastName}`;

        return (
            <div className={this.classname()}>
                <div
                    className={this.classname('closeIcon')}
                    onClick={this.onExitClick}>
                    <Icon icon={closeIcon}/>
                </div>
                <img className={this.classname('userAvatar')}
                     src={contactInfo.avatar || USER_AVATAR_FALLBACK_URL}/>
                <span className={this.classname('userName')}>{userName}</span>
            </div>
        )
    }
}
export default ChatBar