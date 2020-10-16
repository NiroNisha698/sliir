import React, {Component} from 'react';
import Payment from './finalPayment';
import DEmo from './demo';
import './demoStyle.css'
import Coupon from './coupon'
import Credit from './creditAnimationForm';

class WrapPaymentMain extends Component {
    render() {
        return (
            <div >
                <div className="bg">
                    <Payment/>
                    <br/>
                    <br/>

                </div>
                <Coupon/>

                <DEmo/>
                <br/>
                <br/>
                <div className="pay_summary">
                <Credit />

                </div>

            </div>

        );
    }
}

export default WrapPaymentMain;