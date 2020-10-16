import React, { Component } from 'react'
import  Slideshow  from './Slideshow';
import Home from './Home';
import Catergory from './Catergory';


class Homepage extends Component {
    render() {
        return (
            <div>
                <Slideshow />  
                <br />
                <Catergory />
                <br />
                <br />
                <Home />
                <br />

            </div>
        )
    }
}

export default Homepage;