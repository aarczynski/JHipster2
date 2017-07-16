import React from 'react';
import User from './User.jsx';
import { Jumbotron, Button } from 'react-bootstrap';

class UserList extends React.Component {

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
        fetch('/users', { method: 'GET'})
            .then(response => response.json())
            .then(json => this.setState({ users: json }));
    }

    render() {
        const users = this.state.users.map((u, index) => {
            return <User key={`user-${index}`} user={u} />;
        });
        return (
            <div className="container">
                <Jumbotron>
                    <h1>Users:</h1>
                    <hr/>
                    <table className="table table-striped">
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
                    <hr/>
                    <Button bsStyle="primary" onClick={this.getUsers}>Get Users</Button>
                </Jumbotron>
            </div>
        );
    }
}

export default UserList;