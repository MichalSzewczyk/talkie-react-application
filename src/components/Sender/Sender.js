import React from 'react'
import ReactDOM from 'react-dom'
import bemClassName from 'bem-classname'
import Icon from './../Icon'
import sendIcon from './../../resources/icons/send.svg'
import moment from 'moment'

class Sender extends React.PureComponent {

    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'Sender')
    }

    onSendMessage() {
        const {sendMessage} = this.props
        const inputValue = this.refs.messageInput.value
        this.setFocusOnInput()
        if (!inputValue.length) {
            return;
        }
        sendMessage(inputValue, moment().format())
        this.clearInputValue()

    }

    clearInputValue() {
        this.refs.messageInput.value = '';
    }

    setFocusOnInput() {
        const inputElement = this.refs.messageInput
        const inputDom = ReactDOM.findDOMNode(inputElement)
        inputDom.focus()
    }

    render() {

        return (
            <div className={this.classname()}>
                <textarea
                    placeholder="Enter message"
                    className={this.classname('input')}
                    type="text"
                    ref="messageInput"
                />
                <button onClick={::this.onSendMessage}><Icon className={this.classname('icon')} icon={sendIcon}/>
                </button>
            </div>
        )
    }
}
export default Sender