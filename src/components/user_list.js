import React, { Component } from 'react';
import { fetchUsers } from '../actions/index';
import { connect } from 'react-redux';

class UserList extends Component{

    renderUser(user){
        return(
            <div classname="card card-block">
            <h4 className="card-title">{user.name}</h4>
            <p className="card card-text">{user.company.name}</p>
            <a className="btn btn-primary" href={user.website}>Website</a>
            </div>
        );
    }

    componentWillMount(){
        this.props.fetchUsers();
    }

    render(){
        return(
            <div className="user-list">
                {this.props.users.map(this.renderUser)}
            </div>
        )
    }
}

function mapStateToProps(state){
    return { users : state.users };
}


export default connect(mapStateToProps , { fetchUsers })(UserList);