import React from 'react'
import bemClassName from 'bem-classname'
import EmptyChat from './../../components/EmptyChat';
import {connect} from 'react-redux';
import logoutAction from './../../actions/logout';

class EmptyChatWrapper extends React.PureComponent {

    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'EmptyChatWrapper')
    }

    render() {
        const {logoutAction} = this.props;

        return (
            <EmptyChat logoutAction={logoutAction}/>
        )
    }
}

function mapStateToProps() {
    return {};
}
function mapDispatchToProps(dispatch) {
    return {
        logoutAction: () => {
            dispatch(logoutAction());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EmptyChatWrapper);