import React from 'react';
import Post from './Post';
import PostForm from './PostForm';

const bodyStyle = {
    width:'90%',
    margin:'auto',
}

class Footer extends React.Component{
    render(){
        return(
            <div style={bodyStyle}>
                <PostForm />
                <hr />
                <Post />
            </div>
        );
    }
}

export default Footer;