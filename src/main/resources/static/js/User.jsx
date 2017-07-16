import React from 'react';

class User extends React.Component {

    render() {
        return (
            <tr>
                <th>{this.props.user.firstName}</th>
                <th>{this.props.user.lastName}</th>
            </tr>
        );
    }
}

export default User;