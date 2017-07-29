import React from 'react';
import User from './User.jsx';
import HrSeparator from '../util/HrSeparator.jsx';
import Spinner from '../util/Spinner.jsx';
import SuccessNotification from "../notification/SuccessNotification.jsx";
import ErrorNotification from "../notification/ErrorNotification.jsx";
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

class UserList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            status: 'LOADING'
        };
    }

    componentDidMount() {
        this.getUsers();
    };

    getUsers = () => {
        this.setState({ users: [], status: 'LOADING' })
        fetch('/users', { method: 'GET'})
            .then(response => {
                if (response.status === 200) {
                    this.showSuccessDialog('HTTP 200', 'Users fetched from backend server');
                } else if(response.status === 500) {
                    this.showErrorDialog('HTTP 500', 'Internal Server Error')
                }
                return response.json();
            })
            .then(json => {
                this.setState({ users: json, status: 'READY' })
            })
            .catch(err => this.setState({ users: [], status: 'ERROR'}));
    }

    showSuccessDialog = (header, msg) => {
        toast(<SuccessNotification header={header} text={msg}/>, {
            autoClose: 4000,
            type: toast.TYPE.SUCCESS,
            hideProgressBar: false,
            position: toast.POSITION.TOP_RIGHT,
            closeButton: 'default'
        });
    }

    showErrorDialog = (header, msg) => {
        toast(<ErrorNotification header={header} text={msg}/>, {
            autoClose: 4000,
            type: toast.TYPE.ERROR,
            hideProgressBar: false,
            position: toast.POSITION.TOP_RIGHT,
            closeButton: 'default'
        });
    }

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
        switch (this.state.status) {
            case 'LOADING':
                return (
                    <Spinner img="/img/spinner.gif">LOADING...</Spinner>
                );
            case 'ERROR':
                return (
                    <div className="container">
                        {optionsHtml}
                    </div>
                );
            case 'READY':
                return (
                    <div className="container">
                        {optionsHtml}
                        {usersHtml}
                    </div>
                );
        }
    }
}

export default UserList;