import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions/userAction';
import UserTable from './UserTable';
import AddUser from './AddUser';

class Body extends React.Component{

    componentWillMount(){
        this.props.fetchUser();
    }

    render(){
        return(
            <div>
                <AddUser />
                <UserTable />
            </div>
        );
    }
}

export default connect(null,{fetchUser})(Body);