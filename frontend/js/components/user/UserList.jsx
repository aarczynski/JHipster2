import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import User from './User';
import HrSeparator from '../util/HrSeparator';
import Spinner from '../util/Spinner';
import { fetchUsers } from '../../actions/http';

class UserList extends React.Component {

    componentDidMount() {
        this.props.loadUsers();
    };

    render() {
        const users = this.props.users.map((u, index) => {
            return <User key={`user-${index}`} {...u} />;
        });
        const optionsHtml =
            <div>
                <h3>Options:</h3>
                <Button bsStyle="primary" onClick={this.props.loadUsers}>Get Users</Button>
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
                    {this.props.users.length > 0
                        ? usersHtml
                        : null}
                    {this.props.loading
                        ? <Spinner img="/img/spinner.gif">LOADING...</Spinner>
                        : null}
                </div>
            );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.spinnerReducer.show,
        users: state.usersReducer.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
