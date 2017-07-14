import React from 'react';
import User from './User.jsx';

class HelloWorld extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(json => {
                this.setState({ users: json })
            });
    };

    render() {
        var users = this.state.users.map((u, index) => {
            var componentId = u + index;
            return <User key={componentId} user={u}/>;
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {users}
                </tbody>
            </table>
        );
    }
}

export default HelloWorld;