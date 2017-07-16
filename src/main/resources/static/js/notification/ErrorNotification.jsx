import React from 'react';

class SuccessNotification extends React.Component {

    render() {
        return (
            <div>
                <img width={48} height={48} src={'/img/err.png'} style={{"float": "left"}} />
                <div style={{"paddingLeft": "4.5em", "color": "red"}}>
                    <h4>{this.props.header}</h4>
                    <p>{this.props.text}</p>
                </div>
            </div>
        );
    }
}

export default SuccessNotification;