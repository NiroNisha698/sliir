import React, { Component } from 'react'
import logo from './Images/logo.png';
import shopping from './Images/shopping.png';
import Button from '@material-ui/core/Button';
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
import * as ReactBootstrap from "react-bootstrap";

export default class Mela extends Component {
    render() {
        return (
            <div class="row">
                <div class="col-sm-3">
                    <div className="row">
                    <a href="/Homepage">
                        <img 
                        src={logo}
                        alt="logo"
                        width="120" 
                        height="70"
                        />
                        </a>
                    </div>
                    
                </div>


                <div  class="col-sm-8">
                    <ReactBootstrap.Nav.Link href="/searchName">
                    <div >
                        <MDBCol md="6">
                            <MDBFormInline className="md-form">
                                <MDBIcon icon="search" />
                                <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
                            </MDBFormInline>
                        </MDBCol>
                    </div>
                    </ReactBootstrap.Nav.Link>

                </div>






                <div class="col-sm-0.5">
                    <br />
                    <br />
                    <br />

                        <a href="/slide">
                        <img src={shopping} alt="cart"  height="30" />
                        </a>
                        
                </div>
                <div class="col-sm-0.5">
                    <br />
                    <br />
                    <br />
                    <Button color="dark" size="lg" href="/login" active>
                            Login
                    </Button>
                </div>
                
                
            </div>
        )
    }
}