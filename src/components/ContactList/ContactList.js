import React from 'react'
import bemClassName from 'bem-classname'
import EmptyContactListWarning from './EmptyContactListWarning'
class ContactList extends React.PureComponent {

    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'ContactList')
    }


    render() {
        const {children, isEmpty, onEmptyList} = this.props

        return (
            <div className={this.classname()}>
                {isEmpty ? onEmptyList : children}
            </div>
        )
    }
}
ContactList.defaultProps = {
    onEmptyList: EmptyContactListWarning,
    isEmpty: false
}
ContactList.propTypes = {
    onEmptyList: React.PropTypes.func,
    isEmpty: React.PropTypes.bool
}
export default ContactList