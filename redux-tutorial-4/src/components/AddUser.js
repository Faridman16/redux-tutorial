import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {createUser} from '../actions/userAction';

class AddUser extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            first_name:'',
            last_name:'',
            address:'',
            email:'',
            gender:'',
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const submitObj = {
            photo:'https://randomuser.me/api/portraits/thumb/men/65.jpg',
            name:this.state.gender+'. '+ this.state.first_name+ ' '+ this.state.last_name,
            address:this.state.address + ', Indonesia',
            email:this.state.email,
        }

        this.props.createUser(submitObj);
    }

    handleChange = (event) =>{
        this.setState({[event.target.name]:event.target.value});
    }

    handleReset = () => {
        this.setState({
            first_name:'',
            last_name:'',
            address:'',
            email:'',
        });
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Gander : </label>
                <select name='gender' onChange={this.handleChange}>
                    <option value='Mr'>Male</option> 
                    <option value='Mrs'>Female</option> 
                </select><br />
                <label>First Name</label><input type='text' name='first_name' value={this.state.first_name} onChange={this.handleChange}/><br />
                <label>Last Name</label><input type='text' name='last_name' value={this.state.last_name} onChange={this.handleChange}/><br />
                <label>Address</label><input type='text' name='address' value={this.state.address} onChange={this.handleChange}/><br />
                <label>Email</label><input type='text' name='email' value={this.state.email} onChange={this.handleChange}/><br />
                <button>Save</button>
                <button type='reset' onClick={this.handleReset} name='cancel'>Cancel</button>
            </form>
        )
    }
}

AddUser.PropTypes = {
    createUser:PropTypes.func.isRequired,
}

export default connect(null, {createUser})(AddUser);