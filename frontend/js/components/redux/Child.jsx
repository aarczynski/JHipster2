import React from 'react';
import { connect } from 'react-redux';
import {emitUpdate, emitClear} from '../../actions/inputActions';

class Child extends React.Component {

    render() {
        return (
            <div className="childComponent">
                <h4>This is child component</h4>
                <input onChange={this.props.handleUpdate}/>
                <button onClick={this.props.handleClear}>CLEAR</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleUpdate: (event) => dispatch(emitUpdate(event.target.value)),
        handleClear: () => dispatch(emitClear())
    }
}

export default connect(null, mapDispatchToProps)(Child);
