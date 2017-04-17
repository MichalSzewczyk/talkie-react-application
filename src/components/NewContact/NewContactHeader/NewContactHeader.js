import React from 'react'
import bemClassName from 'bem-classname'
import Icon from './../../Icon'
import backIcon from './../../../resources/icons/back.svg'

class NewContactHeader extends React.PureComponent {
    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'NewContactHeader')
        this.onBackButtonClick = this.onBackButtonClick.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
    }

    onBackButtonClick() {
        const {onSwitchToContactList} = this.props;
        onSwitchToContactList();
    }

    onInputChange(event) {
        const {onSearchInputChange} = this.props;
        const value = event.target.value;
        onSearchInputChange(value)
    }

    render() {
        return (
            <div className={this.classname()}>
                <Icon className={this.classname('backButton')} onClick={this.onBackButtonClick}
                      icon={backIcon}/>
                <input placeholder="Search" className={this.classname('searchInput')} onChange={this.onInputChange}
                       type="text"/>
            </div>
        )
    }
}
export default NewContactHeader