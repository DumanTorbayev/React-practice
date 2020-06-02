import React from 'react';
import * as axios from 'axios';
import Users from "./Users";

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    };

    render() {
        return <Users
            pageSize={this.props.pageSize}
            onPageChanged={this.onPageChanged}
            currentPage={this.props.currentPage}
            totalUsersCount={this.props.totalUsersCount}
            users={this.props.users}
            usersUnFollow={this.props.usersUnFollow}
            usersFollow={this.props.usersFollow}
        />
    }
}

export default UsersAPIComponent;