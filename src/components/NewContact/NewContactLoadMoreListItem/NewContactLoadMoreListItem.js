import React from 'react'
import bemClassName from 'bem-classname'

class NewContactLoadMoreListItem extends React.PureComponent {
    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'NewContactLoadMoreListItem')
    }

    render() {
        return (
            <div className={this.classname()}>
                <div className={this.classname('button')}>
                    <span>Load More</span>
                </div>
            </div>
        )
    }
}
export default NewContactLoadMoreListItem