import React from 'react';

class SuccessNotification extends React.Component {

    render() {
        return (
            <div>
                <img width={48} height={48} src={'/img/err.png'} className="floatLeft" />
                <div className="notificationContainer error">
                    <div>{this.props.header}</div>
                    <p>{this.props.text}</p>
                </div>
            </div>
        );
    }
}

export default SuccessNotification;