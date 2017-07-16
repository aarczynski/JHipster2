import React from 'react';
import User from './User.jsx';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

class UserList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            error: false
        };
    }

    componentDidMount() {
        this.getUsers();
    };

    getUsers = () => {
        fetch('/users', { method: 'GET'})
            .then(response => {
                console.log('res '+response);
                if (response.status === 200) {
                    this.showSuccessDialog('HTTP 200', 'Users fetched from backend server.');
                } else if(response.status === 500) {
                    this.showErrorDialog('HTTP 500', 'Inrenal Server Error')
                }
                return response.json();
            })
            .then(json => this.setState({ users: json, error: false }))
            .catch(err => this.setState({ users: [], error: true }));
    }

    showSuccessDialog = (header, msg) => {
        const Notification = ({ header, msg }) =>
            <div>
                <img width={48} height={48} src={'/img/ok.png'} style={{"float": "left"}} />
                <div style={{"paddingLeft": "4.5em", "color": "green"}}>
                    <h4>{header}</h4>
                    <p>{msg}</p>
                </div>
            </div>;

        toast(<Notification header={header} msg={msg}/>, {
            autoClose: 4000,
            type: toast.TYPE.SUCCESS,
            hideProgressBar: false,
            position: toast.POSITION.TOP_RIGHT,
            closeButton: 'default'
        });
    }

    showErrorDialog = (header, msg) => {
        const Notification = ({ header, msg }) =>
            <div>
                <img width={48} height={48} src={'/img/err.png'} style={{"float": "left"}} />
                <div style={{"paddingLeft": "4.5em", "color": "red"}}>
                    <h4>{header}</h4>
                    <p>{msg}</p>
                </div>
            </div>;

        toast(<Notification header={header} msg={msg}/>, {
            autoClose: 4000,
            type: toast.TYPE.ERROR,
            hideProgressBar: false,
            position: toast.POSITION.TOP_RIGHT,
            closeButton: 'default'
        });
    }

    render() {
        const users = this.state.users.map((u, index) => {
            return <User key={`user-${index}`} user={u} />;
        });
        const optionsHtml =
            <div>
                <h3>Options:</h3>
                <Button bsStyle="primary" onClick={this.getUsers}>Get Users</Button>
            </div>;
        const usersHtml =
            <div>
                <h2>Users:</h2>
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
            </div>;
        if (this.state.error) {
            return (
                <div className="container">
                    {optionsHtml}
                </div>
            );
        } else {
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