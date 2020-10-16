import React, { Component } from "react";
import data from "./data.json";
import "./search.css"
import {Spinner} from 'react-bootstrap';
import {Button} from 'react-bootstrap'

class SearchFilter extends Component {
    state = {
        itemsToDisplay: [],
        itemsToUse: [],
        bookCategory: []
    };
    render() {
        return (
            <div>
                <div className="restfilter">
                    <div>
                        &nbsp;
                        <select className="form-control" id="restfilter" onChange={this.optionSelected}>
                            <option  className="option" value="any">Choose Author</option>
                            {this.state.bookCategory.map(bcategory => {
                                return <option className="option" value={bcategory}>{bcategory}</option>;
                            })}
                        </select>
                    </div>

                    <div>
                        &nbsp;
                        <select className="form-control"  id="sortfilter" onChange={this.sortBy}>
                            <option className="option" value="ranking">Ranking</option>
                            <option className="option" value="asc">Rating: Low to High</option>
                            <option className="option" value="des">Rating: High to Low</option>
                        </select>
                    </div>
                </div>
                <div className="restcontainer" >

                    {this.state.itemsToDisplay.map(rest => {
                        let bookCategory = rest["Book Category"]
                            .substring(1, rest["Book Category"].length - 2)
                            .split(",");
                        return (

                            <div className="rest">
                                <div className="restinfo">
                                    <i className="fas fa-map-marker"
                                       style={{ color: "orangered", fontSize: "12px" }}
                                    ></i>
                                    &nbsp;
                                    <center><span  className="restcity">{rest["City"]}</span></center>


                                    <center><span className="restname">{rest["Name"]}</span></center>
                                </div>
                                <div className="sepline"></div>
                                <br />
                                <div>
                                    <a href={"#"} >
                                        <center> <img className="photo"
                                                      width={250}
                                                      height={350}
                                                      src={rest["image"]} className="check" ></img></center>
                                    </a>
                                </div>
                                <br />
                                <div>
                                    <center><span className="price">${rest["Price"]}</span></center>
                                </div>
                                <div className="reststats">

                                    <div>
                                        <i style={{ fontSize: "15px" }}
                                           className="far fa-comment-alt"
                                        ></i>
                                        &nbsp;
                                        Reviews: {rest["Number of Reviews"]}
                                    </div>


                                    <div>
                                        <i style={{ fontSize: "15px" }} className="far fa-star"></i>
                                        &nbsp;
                                        Rating: {rest["Rating"]}
                                    </div>

                                </div>
                                <br/>
                                <div>
                                    <Button href="/addCart" type="button" className="button">
                                        Add to cart
                                    </Button>
                                    <br/>
                                    <br/>
                                    <Button type="button" className="button">
                                        Buy Now
                                    </Button>
                                    <br/>
                                    <br/>
                                </div>
                            </div>

                        );
                    })}

                </div>

            </div>
        );
    }

    filterOnSearch = event => {
        if (
            !event.target.value ||
            event.target.value === " " ||
            event.target.value === ""
        )
            this.setState({ itemsToDisplay: [...this.state.itemsToUse] });
        else {
            let itemsToDisplay = [];
            itemsToDisplay = this.state.itemsToUse.filter(
                item =>
                    item["Name"]
                        .toLowerCase()
                        .includes(event.target.value.toLowerCase()) ||
                    item["Book Category"]
                        .toLowerCase()
                        .includes(event.target.value.toLowerCase()) ||
                    item["City"].toLowerCase().includes(event.target.value.toLowerCase())
            );
            this.setState({ itemsToDisplay });
        }
    };

    optionSelected = () => {
        var e = document.getElementById("restfilter");
        var selected = e.options[e.selectedIndex].text;

        if (selected === "Choose Any")
            this.setState({ itemsToDisplay: [...this.state.itemsToUse] });
        else {
            let itemsToDisplay = [];
            itemsToDisplay = this.state.itemsToUse.filter(item =>
                item["Book Category"].toLowerCase().includes(selected.toLowerCase())
            );
            this.setState({ itemsToDisplay });
        }
    };

    sortBy = () => {
        var e = document.getElementById("sortfilter");
        var selected = e.options[e.selectedIndex].value;

        if (selected === "ranking")
            this.setState({ itemsToDisplay: [...this.state.itemsToUse] });
        else if (selected === "asc") {
            let itemsToDisplay = [...this.state.itemsToDisplay];
            itemsToDisplay.sort(function(a, b) {
                return a["Rating"] - b["Rating"];
            });
            this.setState({ itemsToDisplay });
        } else {
            let itemsToDisplay = [...this.state.itemsToDisplay];
            itemsToDisplay.sort(function(a, b) {
                return b["Rating"] - a["Rating"];
            });
            this.setState({ itemsToDisplay });
        }
    };

    componentDidMount() {
        this.reRenderList();
    }

    reRenderList() {
        var bookCategory = [];
        var itemsToDisplay = [];
        for (var i = 0; i < data.length; i++) {
            itemsToDisplay.push(data[i]);
            data[i]["Book Category"]
                .substring(1, data[i]["Book Category"].length - 2)
                .split(",")
                .forEach(bcategory => {
                    let c = bcategory.substring(1, bcategory.length - 1);
                    c = c.includes("'") ? c.substring(1, c.length) : c;
                    if (bookCategory.indexOf(c) < 0) {
                        bookCategory.push(c);
                    }
                });
        }

        this.setState({ bookCategory });

        this.setState({ itemsToDisplay }, () => {
            this.setState({ itemsToUse: [...this.state.itemsToDisplay] });
        });
    }
}

export default SearchFilter;

