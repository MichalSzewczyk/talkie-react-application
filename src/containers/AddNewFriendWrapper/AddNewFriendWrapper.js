import React from 'react'
import bemClassName from 'bem-classname'
import {connect} from 'react-redux'
import NewFriendHeader from './../../components/NewFriendHeader'
import ContactList from './../../components/ContactList'

class AddNewFriendWrapper extends React.PureComponent {
    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'AddNewFriendWrapper')
    }

    render() {
        const {onSwitchToContactList} = this.props;
        return (
            <div className={this.classname()}>
                <NewFriendHeader onSwitchToContactList={onSwitchToContactList}/>
                <ContactList/>
            </div>
        )
    }
}

function mapStateToProps() {
    return {}
}
function mapDispatchToProps() {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewFriendWrapper)