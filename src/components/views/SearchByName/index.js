import React, { Component } from "react";
import {
    Input,
    CardTitle,
    CardText
} from "mdbreact";

import "./style.css";
import {Button} from 'react-bootstrap'

import { Redirect } from 'react-router'
import booksList from "./data.json";
import ww from "./image/ww.gif"

class App extends Component {
    state = {
        search: ""
    };

    renderBook = book => {
        const { search } = this.state;

        return (
            <div
                className="bg_image"
                style={{
                    backgroundImage: 'url(' + ww + ')',
                    backgroundSize: "",
                }}
            >
<br/>
            <div className="abc">

                    <br/>
                    <div ><center>
                    <CardTitle  title={book.Name}>
                        <h1> {book.Name.substring(0, 16)}</h1>
                        <p >
                            <img width={250}
                                 height={350}
                                src={book["image"]}
                            />
                            <br/><br/>
                            <center><Button href="/addCart"  className="button1"> ADD TO CART</Button></center>
                        </p>
                    </CardTitle></center></div>
                     <br/>
            </div>
            </div>
        );
    };

    onchange = e => {
        this.setState({ search: e.target.value });
    };

    render() {
        const { search } = this.state;
        const filteredBooks = booksList.filter(book => {
            return book.Name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });

        return (
            <div className="flyout">
                <main style={{ marginTop: "4rem" }}>
                    <div className="container">
                        <div className="columns">
                            <div className="col">

                                <Input
                                    label="Search by Name"
                                    icon="search"
                                    onChange={this.onchange}
                                    placeholder="Search by book name"
                                />
                            </div>

                        </div>
                        <div >
                            <div>
                            {filteredBooks.map(book => {
                                return this.renderBook(book);
                            })}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );

    }
}

export default App;
