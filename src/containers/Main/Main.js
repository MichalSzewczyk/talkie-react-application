import React from 'react'
import bemClassName from 'bem-classname'
import ProviderWrapper from './../../containers/ProviderWrapper';

class Main extends React.PureComponent {
    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'Main')
    }

    render() {
        return (
            <ProviderWrapper>
                <div className={this.classname()}>
                    Main Renderer
                </div>
            </ProviderWrapper>
        )
    }
}
export default Main
