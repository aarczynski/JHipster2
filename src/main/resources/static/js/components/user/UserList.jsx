import React from 'react';
import { Button } from 'react-bootstrap';
import * as Dialogs from '../../functions/dialog';
import axios from 'axios';
import User from './User';
import HrSeparator from '../util/HrSeparator';
import Spinner from '../util/Spinner';

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
        axios.get('/users')
            .then(response => {
                this.setState({ users: response.data, loading: false });
                Dialogs.showSuccessDialog('HTTP 200', 'Users fetched from backend server');
            })
            .catch(error => {
                this.setState({ users: [], loading: false })
                if (/5\d\d/.test(error.response.status)) {
                    Dialogs.showErrorDialog('HTTP 500', 'Internal Server Error');
                }
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