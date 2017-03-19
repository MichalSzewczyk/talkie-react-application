import React from 'react'
import bemClassName from 'bem-classname'
import ProviderWrapper from './../../containers/ProviderWrapper'
import Router from './../Router'
import CreateTCPConnection from './../../actions/create_tcp_connection'
import {connect} from 'react-redux'

class Main extends React.PureComponent {

    constructor(props) {
        super(props)
        this.classname = bemClassName.bind(null, 'Main')
        props.createTCPConnection()
    }

    render() {
        return (
            <ProviderWrapper>
                <Router>
                    <div className={this.classname()}>
                        Main Renderer
                    </div>
                </Router>
            </ProviderWrapper>
        )
    }
}

function mapStateToProps() {
    return {}
}
function mapDispatchToProps(dispatch) {
    return {
        createTCPConnection: () => {
            dispatch(CreateTCPConnection())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)
