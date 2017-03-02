import React from 'react'
import store from './../../store';
import { Provider } from 'react-redux';

class ProviderWrapper extends React.PureComponent {

    render() {

        return (
            <Provider  store={store}>
                {this.props.children}
            </Provider>
        )
    }
}
export default ProviderWrapper