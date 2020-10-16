import React, { Component } from 'react';
import Users from './Users';
import AddUser from './AddUser';
import {Button} from 'react-bootstrap'
class App extends Component{

    // Default dummy data
    state = {

        users:[
            {name:"Travis Jackson", email:"akshi@hmail.com",phone:"0772888111",address:"No 3",amount:"$75", isEditing:false}


        ]
    }
    // (newUser) is received from AddUser.js
    addUser = (newUser) => {
        let users = [...this.state.users, newUser];
        this.setState({
            users
        });
    }

    // when press edit button
    // (i) is received from Users.js
    pressEditBtn = (i) => {
        let users = this.state.users;
        users[i].isEditing = true;
        this.setState({
            users
        });
    }

    // (i, name, age) is received from Users.js
    updateUser = (i, name, email,phone,address,amount) => {
        let users = this.state.users;
        users[i].name = name;
        users[i].email = email;
        users[i].phone = phone;
        users[i].address = address;
        users[i].amount = amount;
        users[i].isEditing = false;

        this.setState({
            users
        });

    }
    // (i) is received from Users.js
    pressDelete = (i) => {
        let users = this.state.users.filter((u,index)=>{
            return index !== i;
        });
        this.setState({
            users
        });
    }

    render(){
        return(
            <div className="container">
                <h1>Checkout Details</h1>

                <AddUser addUser={this.addUser}/>
     <br/><br/><br/>
                <Users allUsers={this.state.users} pressEditBtn={this.pressEditBtn} updateUser={this.updateUser} pressDelete={this.pressDelete} />
<br/><br/>
                <center> <Button variant="primary"  size="lg"   className="button1">Pay</Button></center>
            </div>
        );
    }
}

export default App;