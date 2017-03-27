import React from 'react'
import bemClassName from 'bem-classname'
import Icon from './../Icon';
import SadIcon from './../../resources/icons/sad.svg';

class EmptyContactListWarning extends React.PureComponent {

    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'EmptyContactList')
    }

    convertTextToHTML(text) {
        let i = 0;
        return text && text.split('').map(char => {
                if (char === ' ') {
                    return <br key={i++}/>
                }
                return <span key={i++}>{char}</span>
            });

    }

    render() {
        const textArray = this.convertTextToHTML("Empty List");
        return (
            <div className={this.classname()}>
                {textArray}
                <Icon className={this.classname('sadIcon')} icon={SadIcon}/>
            </div>
        )
    }
}
export default EmptyContactListWarning