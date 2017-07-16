import React from 'react';
import { Panel } from 'react-bootstrap';

class TextPanel extends React.Component {

    render() {
        return (
            <Panel header={this.props.header} style={{"margin": "1em 0"}}>
                {this.props.children}
            </Panel>
        );
    }
}

export default TextPanel;