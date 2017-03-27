import React from 'react'
import bemClassName from 'bem-classname'

class Cube extends React.PureComponent {

    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'Cube')
        this.actualRotate = 0;
    }

    onLeft() {
        this.setCubeRotate(-90)
    }

    onRight() {
        this.setCubeRotate(90)
    }

    setCubeRotate(degrees) {
        this.actualRotate -= degrees;
        this.refs.Cube.style.transform = `rotateY(${this.actualRotate}deg)`;
    }

    render() {
        const {front, back, left, right} = this.props;
        return (
            <div className={this.classname()}>
                <div ref="Cube" className={this.classname('wrapper')}>
                    <div className={this.classname('front')}>
                        {front}
                    </div>
                    <div className={this.classname('back')}>
                        {back}
                    </div>
                    <div className={this.classname('left')}>
                        {left}
                    </div>
                    <div className={this.classname('right')}>
                        {right}
                    </div>
                </div>
            </div>
        )
    }
}
export default Cube