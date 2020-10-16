import React, {Component} from 'react';
import {Carousel} from "react-bootstrap";
import {Map, InfoWindow,Marker, GoogleApiWrapper} from "google-maps-react";

import './form.css';
import swal from "sweetalert";
import pic1 from '../../Images/pic1.jpg';
import pic2 from '../../Images/pic2.jpg';
import {Wave} from "react-animated-text";

class Contact extends React.Component {
    render()
    {
        return(
            <h1>Contact US page</h1>



        );

    }

    constructor(props){
        super(props)

        //the Application component's state is below, which records the user's input.

        this.state = {

            //the display property on state allows me to toggle the view of the form vs. the view of the user's data
            display: false,
            firstName : "",
            lastName : "",
            phone : 0,
            email : "",
        };
    }
    inputCheck = (e) => {
        let filter = e.target.getAttribute('filter')
        e.target.value = e.target.value.replace(new RegExp(filter, 'g'), '')
        this.setState({[e.target.name]: e.target.value})

    }

    submitCheck = () => {
        //swal("Welcome to Chennai!");
        if(!this.state.firstName || !this.state.lastName){
            alert("A name field is empty.")
        } else if(this.state.phone.length < 10 || !this.state.phone){
            alert("Phone number is not long enough.")
        } else if (!this.state.email.match(/@./g)) {
            alert("Email is in the wrong format.")
        } else {
            this.setState({display: true})
            swal("Good job!", "Thank you for Contact US", "success");
        }
    }

    resetForm = () => {
        this.setState({
            display: !this.state.display,
            firstName: '',
            lastName: '',
            phone: 0,
            email: ''
        })
    }


    displayForm() {
   return (


        <div className="form">

            <div className="header">
                <h1>Welcome!</h1>

                <p>Please provide your information below.</p>
            </div>
            <div className="inputcontainer">

                <input filter="[^a-zA-Z ]" name="firstName" placeholder="First Name" onChange={this.inputCheck} />
                <input filter="[^a-zA-Z ]" name="lastName" placeholder="Last Name" onChange={this.inputCheck} />
                <input filter="[^0-9]" maxLength="10" name="phone" placeholder="Phone Number" onChange={this.inputCheck} />
                <input placeholder="Email Address" onChange={(e) => {this.setState({email:e.target.value})}} />
                <button onClick={this.submitCheck} >Submit </button>

            </div>

            <h1>Thank</h1>

            <div className="nSlide">
                <br/>


                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={pic1}
                        alt="First Slide"/>
                        <Carousel.Caption>
                            <h2><Wave text='SCHEDULE A CALL WITH US! ' effect="stretch" effectChange={2.2}
                            /></h2>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={pic2}
                            alt="Second Slide"/>
                        <Carousel.Caption>
                            <h2><Wave text='GET IN TOUCH! ' effect="stretch" effectChange={2.2}
                            /></h2>
                        </Carousel.Caption>

                    </Carousel.Item>

                </Carousel>
            </div>
            <br/>
            <div>
                <h2>hey</h2>
                <br/>

                <Map google={this.props.google} zoom={14}>

                    <Marker onClick={this.onMarkerClick}
                            name={'Sri Lanka'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>

                    </InfoWindow>
                </Map>

                {/*<Map google={this.props.google}>
                    <Marker onMouseover={this.onMouseoverMarker}
                            name={'Current location'} />
                </Map>*/}

            </div>



        </div>





        );




    }



    displayData() {
        return (
            <div className="form">
                <p>{this.state.lastName}, {this.state.firstName}</p>
                <p>{this.state.phone} | {this.state.email}</p>
                <button onClick={this.resetForm}>Reset</button>
            </div>
        )

}
nextSlie(){
        return(
            <div>
                <p>ghjfhjashf jhjhajfhja hjsahfkhask jahkahs khkjahksh </p>


            </div>

        )
}

      // <h1>hey</h1>


   render() {

       return this.state.display ? this.displayData() : this.displayForm();
       //this.nextSlie();

   }





    }



//export default Contact;

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBBxeifKahfCz7iiUkhxV41AjivYe89fEY")
})(Contact)

