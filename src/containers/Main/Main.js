import React from 'react'
import bemClassName from 'bem-classname'

class Main extends React.PureComponent {
  constructor () {
    super()
    this.classname = bemClassName.bind(null, 'Main')
  }

  render () {
    return (
      <div className={this.classname()}>
                Main Renderer
            </div>
    )
  }
}
export default Main
