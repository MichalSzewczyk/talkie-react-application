import React from 'react'
import ReactDOM from 'react-dom'
import Main from './containers/Main'
import ProviderWrapper from './containers/ProviderWrapper'
import './styles/index.scss'

ReactDOM.render(
    <ProviderWrapper>
        <Main />
    </ProviderWrapper>
    , document.querySelector('#app')
)

if (module.hot) {
    module.hot.accept()
}
