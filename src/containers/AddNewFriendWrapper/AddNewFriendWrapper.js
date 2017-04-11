import React from 'react'
import bemClassName from 'bem-classname'
import {connect} from 'react-redux'

class AddNewFriendWrapper extends React.PureComponent {
    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'AddNewFriendWrapper')
        this.onBtnClick = this.onBtnClick.bind(this)
    }

    onBtnClick() {
        const {onSwitchToContactList} = this.props;
        onSwitchToContactList();
    }

    render() {
        return (
            <div className={this.classname()}>
                <button onClick={this.onBtnClick}>BACK</button>
                AddNewFriendWrapper
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