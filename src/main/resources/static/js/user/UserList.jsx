import React from 'react';
import * as Dialogs from '../util/Dialog.jsx';
import User from './User.jsx';
import HrSeparator from '../util/HrSeparator.jsx';
import Spinner from '../util/Spinner.jsx';
import { Button } from 'react-bootstrap';

class UserList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loading: false
        };
    }

    componentDidMount() {
        this.getUsers();
    };

    getUsers = () => {
        this.setState({ ...this.state, loading: true })
        fetch('/users', { method: 'GET'})
            .then(response => {
                if (response.status === 200) {
                    Dialogs.showSuccessDialog('HTTP 200', 'Users fetched from backend server');
                } else if(response.status === 500) {
                    Dialogs.showErrorDialog('HTTP 500', 'Internal Server Error')
                }
                return response.json();
            })
            .then(json => {
                this.setState({ users: json, loading: false })
            })
            .catch(err => {
                this.setState({ users: [], loading: false})
            });
    };

    render() {
        const users = this.state.users.map((u, index) => {
            return <User key={`user-${index}`} {...u} />;
        });
        const optionsHtml =
            <div>
                <h3>Options:</h3>
                <Button bsStyle="primary" onClick={this.getUsers}>Get Users</Button>
                <HrSeparator/>
            </div>;
        const usersHtml =
            <div>
                <h2>Users:</h2>
                <HrSeparator/>
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
                <HrSeparator/>
            </div>;
            return (
                <div className="container">
                    {optionsHtml}
                    {this.state.users.length > 0
                        ? usersHtml
                        : null}
                    {this.state.loading
                        ? <Spinner img="/img/spinner.gif">LOADING...</Spinner>
                        : null}
                </div>
            );
    }
}

export default UserList;