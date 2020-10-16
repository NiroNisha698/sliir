import React, {Component} from 'react';
import Book from "./reqBook"
import {Carousel} from "react-bootstrap";

import {Wave} from "react-animated-text";
import pic2 from "../../Images/pic2.jpg";
import REqBook1 from "../../Images/ReqBook1.jpg"
import REqBook2 from "../../Images/ReqBook2.jpg"
import REqBook3 from "../../Images/ReqBook3.jpg"
import "./bookStyle.css"

import swiper from 'swiper/swiper-bundle.css';
import Swiper from "swiper";


class MainReqBook extends Component {

    componentDidMount() {
        this.swiper = new Swiper('.swiper-container', {
            effect: 'flip',
            grabCursor: true,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }


    render() {


        return (
            <div className="mySlide">
                <h2>Contect Us</h2>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={REqBook1}
                            alt="First Slide"/>
                        <Carousel.Caption>
                            <h1><Wave text='SCHEDULE A CALL WITH Uss ' effect="stretch" effectChange={2.2}
                            /></h1>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={REqBook2}
                            alt="Second Slide"/>
                        <Carousel.Caption>
                            <h1><Wave text='GET IN TOUCH! ' effect="stretch" effectChange={2.2}
                            /></h1>
                        </Carousel.Caption>

                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={REqBook3}
                            alt="Second Slide"/>
                        <Carousel.Caption>
                            <h1><Wave text='MAKE BOOK ORDERS' effect="stretch" effectChange={2.2}
                            /></h1>
                        </Carousel.Caption>

                    </Carousel.Item>


                </Carousel>


                <Book/>
                <iframe src="https://giphy.com/embed/zmlCPKMlXwq6k" width="480" height="270" frameBorder="0"

                        className="giphy-embed" allowFullScreen></iframe>

                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div class="swiper-slide">
                            <div className="card card1">
                                <div className="sliderText">
                                    <h3>Mobile Number</h3>
                                </div>
                                <div className="content">
                                    <p>0763802258/0112456012</p>
                                    {/* <a href="#">Read More</a>*/}
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="card card1">
                                <div className="sliderText">
                                    <h3>Address</h3>
                                </div>
                                <div className="content">
                                    <p>No, 9/2, Julian Place, Dehiwala, Sri Lanka</p>
                                    {/*<a href="#">Read More</a>*/}
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="card card1">
                                <div className="sliderText">
                                    <h3>Email</h3>
                                </div>
                                <div className="content">
                                    <p>bookus234@gmail.com</p>
                                    {/* <a href="#">Read More</a>*/}
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="card card1">
                                <div className="sliderText">
                                    <h3>Linkedin</h3>
                                </div>
                                <div className="content">
                                    <p>www.linked.in/internationalBook/</p>
                                    {/*<a href="#">Read More</a>*/}
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="card card1">
                                <div className="sliderText">
                                    <h3>Skype</h3>
                                </div>
                                <div className="content">
                                    <p>C258-156-1478</p>
                                    {/*  <a href="#">Read More</a>*/}
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <br/>


            </div>

        );
    }
}

export default MainReqBook;