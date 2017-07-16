import React from 'react';
import User from './User.jsx';
import { Jumbotron, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

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
            .then(response => {
                this.showSuccessDialog('HTTP 200', 'Users fetched from backend server.');
                return response.json();
            })
            .then(json => this.setState({ users: json }));
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

    render() {
        const users = this.state.users.map((u, index) => {
            return <User key={`user-${index}`} user={u} />;
        });
        return (
            <div className="container">
                <Jumbotron>
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
                    <Button bsStyle="primary" onClick={this.getUsers}>Get Users</Button>
                </Jumbotron>
            </div>
        );
    }
}

export default UserList;