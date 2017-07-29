import React from 'react';
import { Panel } from 'react-bootstrap';

class Spinner extends React.Component {

    render() {
        return (
            <div className="spinner">
                <div>{this.props.children}</div>
                <img src={this.props.img} />
            </div>
        );
    }
}

export default Spinner;