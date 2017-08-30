import React from 'react';
import { Panel } from 'react-bootstrap';

class TextPanel extends React.Component {

    render() {
        return (
            <div className="textPanelContainer">
                <Panel header={this.props.header}>
                    {this.props.children}
                </Panel>
            </div>
        );
    }
}

export default TextPanel;