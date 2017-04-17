import React from 'react'
import bemClassName from 'bem-classname'
import ContactList from './../../containers/ContactListWrapper'
import Cube from './../../components/Cube'
import CUBE_CONSTANT from '../../constants/Cube'
import NewContactWrapper from './../../containers/NewContactWrapper'
import {CLEAR_NEW_CONTACTS} from './../../ducks/contacts'
import {connect} from 'react-redux'

class DashboardPage extends React.PureComponent {

    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'DashboardPage')
        this.onSwitchToUserAdd = this.onSwitchToUserAdd.bind(this)
        this.onSwitchToContactList = this.onSwitchToContactList.bind(this)
        this.state = {
            cubeDirection: CUBE_CONSTANT.FRONT
        }
    }

    onSwitchToUserAdd() {
        this.setState({
            cubeDirection: CUBE_CONSTANT.BACK
        })
    }

    onSwitchToContactList() {
        const {clearSearchResult} = this.props

        clearSearchResult()
        this.setState({
            cubeDirection: CUBE_CONSTANT.FRONT
        })
    }

    render() {
        const {cubeDirection} = this.state;
        return (
            <div className={this.classname()}>
                <div className={this.classname('box')}>
                    {<Cube
                        direction={cubeDirection}
                        front={<ContactList onSwitchToUserAdd={this.onSwitchToUserAdd}/>}
                        back={<NewContactWrapper onSwitchToContactList={this.onSwitchToContactList}/>}
                    />}
                    {this.props.children}
                </div>
            </div>
        )
    }
}

function mapStateToProps() {
    return {}
}
function mapDispatchToProps(dispatch) {
    return {
        clearSearchResult: () => {
            dispatch(CLEAR_NEW_CONTACTS())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)