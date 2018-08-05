import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state)=>({
    users:state.users,
})

const UserTable = ({users})=>{    
    const rowUsers = users.users.map(row=>(
        <tr key={row.name}>
            <td><img src={row.photo} alt={row.photo} /></td>
            <td>{row.name}</td>
            <td>{row.address}</td>
            <td>{row.email}</td>
        </tr>
    ))
    return(
        <table>
            <thead>
                <tr>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Email</th>
                </tr>
            </thead>     
            <tbody>
                {rowUsers}
            </tbody>       
        </table>
    )
}

export default connect(mapStateToProps)(UserTable);