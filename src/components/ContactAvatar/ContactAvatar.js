import React from 'react'
import bemClassName from 'bem-classname'
import USER_AVATAR_FALLBACK_URL from './../../constants/image_fallback'

class ContactAvatar extends React.PureComponent {
    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'ContactAvatar')
    }

    render() {
        const {avatarImage} = this.props;
        return (
            <img className={this.classname()} src={avatarImage || USER_AVATAR_FALLBACK_URL}/>
        )
    }
}
export default ContactAvatar