import React, {Component} from 'react';
import './couponStyle.css'

class Coupon extends Component {
    render() {
        return (
            <div>
                <div id="dbanner" className="change-color">
                    <div className="dcontent">
                        SPECIAL SPRING DISCOUNT <strong>50% OFF</strong> WITH COUPON CODE: <code>SPRING2020</code> <span
                        className="dtime">COUPON EXPIRES IN:</span><span id="dcountdown"></span>
                    </div>
                    <div id="dclose">close me!</div>
                </div>
            </div>
        );
    }
}

export default Coupon;