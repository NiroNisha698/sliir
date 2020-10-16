import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import "./table.css"

class Users extends Component{

    // call updateUser (App.js)
    handleUpdate = () => {
        this.props.updateUser(this.indexNum, this.name.value, this.email.value,this.phone.value, this.address.value,this.amount.value);
    }

    render(){

        const {allUsers, pressEditBtn, pressDelete} = this.props;

        const usersList = allUsers.map((user, index) => {

            return user.isEditing === true ? (


                <tr key={index}>
                    <td><input type="text" ref={(val) => {this.name = val}} required defaultValue={user.name}/></td>
                    <td><input type="email" ref={(val) => {this.email = val}} required defaultValue={user.email}/></td>
                    <td><input type="" ref={(val) => {this.phone = val}} required defaultValue={user.phone}/></td>
                    <td><input type="text" ref={(val) => {this.address = val}} required defaultValue={user.address}/></td>
                    <td>$78.02</td>
                    <td>
                        <Button type="button" value="Update" onClick={this.handleUpdate} ref={() => {this.indexNum = index}} className="btn green">Save</Button>
                    </td>
                </tr>

            ) : (

                <tr  key={index}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.address}</td>
                    <td>$78.02</td>
                    <td><Button variant="primary"  size="lg"   className="button" onClick={() => pressEditBtn(index)}>Edit</Button>
                        <Button variant="primary"  size="lg"   className="button" onClick={()=>pressDelete(index)}>Delete</Button>
                    </td>
                </tr>
            );
        });


        return(

    <center>
            <table className="customers">
                <thead>
                <tr >
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Amount</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {usersList}
                </tbody>
            </table>
    </center>
        );
    }
}

export default Users;