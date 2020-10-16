import React, {Component} from 'react';

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-result">
                    {this.props.count} Products
                </div>
                <div className="filter-sort">
                    Order{""}

                </div>
                <div className="filter-size">
                    Filter{""}
               </div>
            </div>
        );
    }
}

