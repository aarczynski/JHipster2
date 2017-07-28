import React from 'react';

class User extends React.Component {

    render() {
        return (
            <tr>
                <th>{this.props.firstName}</th>
                <th>{this.props.lastName}</th>
            </tr>
        );
    }
}

export default User;