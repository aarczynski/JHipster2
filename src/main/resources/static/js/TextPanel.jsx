import React from 'react';
import { Panel, Jumbotron } from 'react-bootstrap';

class TextPanel extends React.Component {

    render() {
        return (
            <div className="container">
            <Jumbotron>
                <Panel header="Lorem Ipsum">
                    {this.props.text}
                </Panel>
            </Jumbotron>
            </div>
        );
    }
}

export default TextPanel;