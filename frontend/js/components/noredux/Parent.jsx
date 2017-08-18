import React from 'react';
import Child from './Child';

class Parent extends React.Component {

    constructor() {
        super();
        this.state = {
            value: ''
        }
    }

    update = (val) => {
        this.setState({value: val});
    }

    render() {
        return (
            <div className="parentComponent">
                <h4>This is parent component</h4>
                <Child update={this.update}/>
                <span>input is: {this.state.value}</span>
            </div>
        );
    }
}

export default Parent;