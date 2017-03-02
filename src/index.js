import React from 'react'
import ReactDOM from 'react-dom'
import Main from './containers/Main'

ReactDOM.render(<Main />, document.querySelector('#app'))

if (module.hot) {
  module.hot.accept()
}
