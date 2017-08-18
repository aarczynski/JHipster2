import React from 'react';

class Child extends React.Component {

    handleUpdate = (e) => {
        const val = e.target.value;
        this.props.update(val);
    }

    handleClear = (e) => {
        this.props.update('');
    }

    render() {
        return (
            <div className="childComponent">
                <h4>This is child component</h4>
                <input onChange={this.handleUpdate} />
                <button onClick={this.handleClear}>CLEAR</button>
            </div>
        );
    }
}

export default Child;