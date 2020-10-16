import React, { Component } from 'react';
import SearchFilter from './SearchFilter';
import "./search.css";
import background1 from "./image/background1.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

    render() {
        return (
            <div
                className="bg_image"
                style={{
                    backgroundImage: 'url(' + background1 + ')',
                    backgroundSize: "",
                }}
            >


                <div >
                <SearchFilter />
            </div>

            </div>
        );
    }
}

export default App;

