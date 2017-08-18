import React from 'react';
import { connect } from 'react-redux';
import Child from './Child';

class Parent extends React.Component {

    render() {
        return (
            <div className="parentComponent">
                <h4>This is parent component</h4>
                <Child/>
                <span>input is: {this.props.value}</span>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.inputReducer.value,
    }
}


export default connect(mapStateToProps, {})(Parent);
