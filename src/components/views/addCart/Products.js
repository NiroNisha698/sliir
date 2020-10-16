import React, {Component} from 'react';
import formatCurrency from "./util";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Modal } from 'react-responsive-modal';

export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product:null,
        };
    }
    openModal = (product) =>{
        this.setState({product});
    };
    closeModal =() =>{
        this.setState({product:null});
    };
    render() {
        const {product} = this.state;
        return (
            <div >
                <Fade bottom cascade>
                    <center><div className="font">Books </div></center>
                    <ul className="products">
                        {this.props.products.map((product) => (
                            <li key={product._id}>
                                <div className="product" class="card">
                                    <a href={"#" + product._id} onClick={()=>this.openModal(product)} >
                                        <center><img width={186}
                                                     height={280} src={product.image} alt={product.title} className="check" ></img></center>
                                        <center><p class="card-title">{product.title}</p></center>
                                    </a>
                                    <center> <div className="check1">{formatCurrency(product.price)}</div></center>
                                    <center><Button variant="primary"  size="lg"   className="button1" onClick={()=>this.props.addToCart(product)} >Add to cart</Button></center>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Fade>
                {product && (
                    <Modal isOpen={true} onRequestClose={this.closeModal}>
                        <zoom classNamw="modal">
                            <button  className="close-modal" onClick={this.closeModal}>x</button>
                            <div className="product-details">
                                <img width={186}
                                     height={280} src={product.image} alt={product.title}></img>
                                <div className="product-details-description">
                                    <p>
                                        <strong> {product.title}</strong>
                                    </p>
                                    <p>
                                        {product.description}
                                    </p>
<br/><br/>
                                    <div className="product-price">
                                        <div>
                                            {formatCurrency(product.price)}
                                        </div>
                                        <br/>
                                        <br/>
                                        <Button variant="primary" size="lg" block onClick={()=>{
                                            this.props.addToCart(product);
                                            this.closeModal();
                                        }}> Add to Cart</Button>
                                    </div>
                                </div>
                            </div>
                        </zoom>
                    </Modal>
                )
                }
            </div>
        );

    }

}