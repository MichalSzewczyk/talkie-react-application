import React from 'react'
import bemClassName from 'bem-classname'

class ContactList extends React.PureComponent {

    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'ContactList')
    }

    render() {

        return (
            <div className={this.classname()}>
                ContactList DUMB
            </div>
        )
    }
}
export default ContactList