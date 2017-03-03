import React from 'react'
import bemClassName from 'bem-classname'
import ProviderWrapper from './../../containers/ProviderWrapper'
import Router from './../Router'

class Main extends React.PureComponent {
  constructor () {
    super()
    this.classname = bemClassName.bind(null, 'Main')
  }

  render () {
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
export default Main
