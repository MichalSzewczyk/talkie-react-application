import React from 'react'
import bemClassName from 'bem-classname'
import ContactList from './../../containers/ContactListWrapper'
import Chat from './../../components/Chat'
import Cube from './../../components/Cube'
import CUBE_CONSTANT from './../../constants/Cube'
class DashboardPage extends React.PureComponent {

    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'DashboardPage')
        this.onSwitchToUserAdd = this.onSwitchToUserAdd.bind(this)
        this.state = {
            cubeDirection: CUBE_CONSTANT.FRONT
        }
    }

    onSwitchToUserAdd() {
        this.setState({
            cubeDirection: CUBE_CONSTANT.BACK
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
                        back={<span>TEST</span>}
                    />}
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export default DashboardPage