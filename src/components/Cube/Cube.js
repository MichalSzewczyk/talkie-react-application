import React from 'react'
import bemClassName from 'bem-classname'
import CUBE_CONSTANT from './../../constants/Cube'

class Cube extends React.PureComponent {

    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'Cube')
        this.actualRotate = 0;
    }

    componentWillUpdate(nextProps) {
        switch (nextProps.direction) {
            case CUBE_CONSTANT.FRONT:
                this.setCubeRotate(-180);
                break;
            case CUBE_CONSTANT.BACK:
                this.setCubeRotate(180);
                break;
        }
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