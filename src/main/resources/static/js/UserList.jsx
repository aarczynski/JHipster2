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
        this.getUsers();
    };

    getUsers = () => {
        fetch('/users')
            .then(response => response.json())
            .then(json => this.setState({ users: json }));
    }

    render() {
        const users = this.state.users.map((u, index) => {
            return <User key={`user-${index}`} user={u} />;
        });
        return (
            <div>
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
                <button onClick={this.getUsers}>Get Users</button>
            </div>
        );
    }
}

export default HelloWorld;