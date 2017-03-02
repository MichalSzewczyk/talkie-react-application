import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.PureComponent {
    render(){
        return(
            <div>JABLKO</div>
        );
    }
}
ReactDOM.render(<Test/>,document.querySelector("#app"));

if (module.hot) {
    module.hot.accept();
}