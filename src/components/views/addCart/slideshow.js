import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'
import "./index.css";
import { Container} from 'reactstrap';

class BootstrapCarouselComponent extends React.Component {

    render() {
        return (
            <div>
                <div className='container-fluid' >
                    <div className="row">
                        <div className="col-sm-12">

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Carousel>

                                <Carousel.Item>
                                    <img
                                        width={1800}
                                        height={900}
                                        className=""
                                        src="https://images6.alphacoders.com/346/346199.jpg"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>

                                        <h1 className="aaaa">Novels + History books</h1>
                                        <h1 className="aaaaa">Available Now</h1>
                                        <Button href="/cart" className="aaa">Shop now</Button>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        width={1800}
                                        height={900}
                                        className=""
                                        src="https://images7.alphacoders.com/310/310049.jpg"
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                        <h1 className="aaaa">Romantic + Biography books</h1>
                                        <h1 className="aaaaa">Available Now</h1>
                                        <Button href="/cart" className="aaa">Shop now</Button>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        width={2000}
                                        height={900}
                                        className=""
                                        src="https://images5.alphacoders.com/443/443740.jpg"
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h1 className="aaaa">Business + Scientific books</h1>
                                        <h1 className="aaaaa">Available Now</h1>
                                        <Button href="/cart" className="aaa"> Shop now</Button>
                                    </Carousel.Caption>
                                </Carousel.Item>

                            </Carousel>
                            <div className="welcome">
                                <br/>
                                <Container >


                                    <img className="slide-image"
                                         width={800}
                                         height={300}
                                         src="https://images.hdqwalls.com/download/welcome-back-1920x1080.jpg"/>

                                    <br/>
                                    <div >
                                        <center>International Book Store is proud to serve the book readers.Please browse our website and shop at any time!!!!!</center>
                                    </div>
                                </Container>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default BootstrapCarouselComponent;