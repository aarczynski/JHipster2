import React from 'react';
import { Panel, Jumbotron } from 'react-bootstrap';

class TextPanel extends React.Component {

    render() {
        return (
            <Panel header={this.props.header} style={{"marginTop": "1em"}}>
                {this.props.text}
            </Panel>

        );
    }
}

export default TextPanel;