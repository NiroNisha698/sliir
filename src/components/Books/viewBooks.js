import React, { Component } from 'react'
import Catergory from '../Catergory.js';
import Home from '../Home.js';
import Page from './Page';

class viewBooks extends Component {
    render() {
        return (
            <div>
                <Catergory />
                <br />
                <Home />
                <br />
                <Page />
                <br />
            </div>
        )
    }
}

export default viewBooks;
