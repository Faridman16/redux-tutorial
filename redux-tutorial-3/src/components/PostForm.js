import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions'

class PostForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title:'',
            body:'',
        }
    }

    handleChange = (event)=>{
        this.setState({[event.target.name]:event.target.value});
    }

    onSubmit = (event)=>{
        event.preventDefault();

        this.setState({
            title:'',
            body:'',
        })

        const post = {
            title:this.state.title,
            body:this.state.body,
        }

        this.props.createPost(post);
    }

    render(){
        return(
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <label>Title : </label><br /><input type="text" name="title" value={this.state.title} onChange={this.handleChange} /><br />
                    <label>Body : </label><br /><input type="text" name="body" value={this.state.body} onChange={this.handleChange} /><br />
                    <input type="submit" value="Save" />
                </form>
            </div>
        )
    }

}

PostForm.PropTypes = {
    createPost:PropTypes.func.isRequired
}

export default connect(null,{createPost})(PostForm);