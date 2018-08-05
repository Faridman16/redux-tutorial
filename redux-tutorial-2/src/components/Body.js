import React from 'react';
import {connect} from 'react-redux';

class Footer extends React.Component{
    render(){
        return(
            <div>
                <ul>
                   {this.toDo.map((key)=>(
                        <li key={key.id}>
                            {key.toDo} = {key.priority}
                        </li>
                   ))} 
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        id:state.id,
        toDo:state.text,
        priority:state.priority
    }
}

export default connect(mapStateToProps)(Footer);