import React, {Component} from 'react';
import formatCurrency  from "./util"
import Fade from "react-reveal/Fade";
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import crud from "../crud/App"
import {
    Link
} from 'react-router-dom';
export default class Cart extends Component {
    constructor(props) {
        super(props);
         this.state= { name:"",
                       email:"",
                       address:"",
                       showCheckout: false,
         };
    }
    handleInput=(e) =>{
        this.setState({[e.target.name]: e.target.value });
    };
    createOrder = (e) => {
        e.preventDefault();
        const order ={
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            cartItems: this.state.cartItems,
        };

        console.log(order);

}
    render() {
        const {cartItems} = this.props;
        return (
            <div>
                {cartItems.length ===0? (
                    <div className="cart cart-header">Cart is empty</div>
                    ):(
                    <div className="cart cart-header">you have {cartItems.length} in the cart{""} </div>
                    )}
                <div>
                    <div className="cart" >
                        <Fade left cascade>
                        <ul className="cart-items">
                            {cartItems.map(item =>(
                                <li key={item._id}>
                                    <div>
                                        <img src={item.image} alt={item.title}></img>
                                    </div>
                                    <div>
                                        <div>{item.title}</div>
                                        <div className={"right"} >
                                            <center> {formatCurrency(item.price)}*{item.count}{""}</center>
                                            <Button variant="primary"  size="lg"     className="button" onClick={()=>this.props.removeFromCart(item)}>
                                                Remove
                                            </Button>
                                            -----------------------------------------------------------
                                        </div>

                                    </div>
                                </li>
                            ))}
                        </ul>
                        </Fade>
                    </div>
                    {cartItems.length!==0 &&(
                        <div>
                        <div className="cart">
                            <div className="total">
                                <div>
                                    Total:{""}
                                    {formatCurrency(
                                        cartItems.reduce((a,c) => a + c.price*c.count,0)
                                    )}
                                </div>
                                <Button href="/app" variant="primary"   className="button primary">
                                    Proceed
                                </Button>
                            </div>

                        </div>
                    {this.state.showCheckout && (
                        <Fade right cascade>
                        <div className="cart">
                        <form onSubmit={this.createOrder}>
                            <ul className="form-container">
                                <li>
                                    <lable for="exampleInputEmail1">Email</lable>
                                    <input type="email"  type="email" required onChange={this.handleInput}></input>
                                </li>
                                <li>
                                    <lable for="exampleFormControlTextarea1">Name</lable>
                                    <input name="name" type="text" required onChange={this.handleInput}></input>
                                </li>
                                <li>
                                    <lable for="exampleFormControlTextarea1" >Address</lable>
                                    <input name="address" type="text" required onChange={this.handleInput}></input>
                                </li>
                                <li>
                                    <Button variant="primary"  size="lg" block type="submit">Checkout</Button>
                                </li>
                            </ul>

                        </form>

                        </div>
                        </Fade>
                        ) }
                        </div>
                    )}

                </div>
            </div>

        );
    }
}

