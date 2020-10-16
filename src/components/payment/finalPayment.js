import React, {Component} from 'react';
import "./finPay.css";
import $ from 'jquery';
import swal from "sweetalert";

class FinalPayment extends Component {
    componentDidMount() {

        $(document).ready(function(){

//For Card Number formatted input
            var cardNum = document.getElementById('cr_no');
            cardNum.onkeyup = function (e) {
                if (this.value == this.lastValue) return;
                var caretPosition = this.selectionStart;
                var sanitizedValue = this.value.replace(/[^0-9]/gi, '');
                var parts = [];

                for (var i = 0, len = sanitizedValue.length; i < len; i +=4) { parts.push(sanitizedValue.substring(i, i + 4)); } for (var i=caretPosition - 1; i>= 0; i--) {
                    var c = this.value[i];
                    if (c < '0' || c> '9') {
                        caretPosition--;
                    }
                }
                caretPosition += Math.floor(caretPosition / 4);

                this.value = this.lastValue = parts.join(' ');
                this.selectionStart = this.selectionEnd = caretPosition;
            }

            //For Date formatted input
            var expDate = document.getElementById('exp');
            expDate.onkeyup = function (e) {
                if (this.value == this.lastValue) return;
                var caretPosition = this.selectionStart;
                var sanitizedValue = this.value.replace(/[^0-9]/gi, '');
                var parts = [];

                for (var i = 0, len = sanitizedValue.length; i < len; i +=2) { parts.push(sanitizedValue.substring(i, i + 2)); } for (var i=caretPosition - 1; i>= 0; i--) {
                    var c = this.value[i];
                    if (c < '0' || c> '9') {
                        caretPosition--;
                    }
                }
                caretPosition += Math.floor(caretPosition / 2);

                this.value = this.lastValue = parts.join('/');
                this.selectionStart = this.selectionEnd = caretPosition;
            }

            /*$(".submit").click(function(){

            });*/


            $(".btn-red").click(function() {
                swal("Good job!", "Payment Successfull", "success");
            });

        });
    }


    render() {
        return (
            <div className="container-fluid px-1 px-md-2 px-lg-4 py-5 mx-auto">
                <div className="row d-flex justify-content-center">
                    <div className="col-xl-7 col-lg-8 col-md-9 col-sm-11">
                        <div className="card cardc border-0">
                            <div className="row justify-content-center">
                                <h3 className="mb-4">Credit Card Checkout</h3>
                            </div>
                            <div className="row">
                                <div className="col-sm-7 border-line pb-3">
                                    <div className="form-group">
                                        <p className="text-muted text-sm mb-0">Name on the card</p> <input type="text"
                                                                                                           name="name"
                                                                                                           placeholder="Name"
                                                                                                           size="15"/>
                                    </div>
                                    <div className="form-group">
                                        <p className="text-muted text-sm mb-0">Card Number</p>
                                        <div className="row px-3"><input type="text" name="card-num"
                                                                         placeholder="0000 0000 0000 0000" size="18"
                                                                         id="cr_no" minLength="19" maxLength="19"/>
                                            <p className="mb-0 ml-3">/</p> <img className="image ml-1"
                                                                                src="https://i.imgur.com/WIAP9Ku.jpg"/>/
                                            <img className="image ml-1"
                                                 src="https://i.imgur.com/WIAP9Ku.jpg"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <p className="text-muted text-sm mb-0">Expiry date</p> <input type="text"
                                                                                                      name="exp"
                                                                                                      placeholder="MM/YY"
                                                                                                      size="6" id="exp"
                                                                                                      minLength="5"
                                                                                                      maxLength="5"/>
                                    </div>
                                    <div className="form-group">
                                        <p className="text-muted text-sm mb-0">CVV/CVC</p> <input type="password"
                                                                                                  name="cvv"
                                                                                                  placeholder="000"
                                                                                                  size="1" minLength="3"
                                                                                                  maxLength="3"/>
                                    </div>
                                    <div className="form-group mb-0">
                                        <div className="custom-control custom-checkbox custom-control-inline"><input
                                            id="chk1" type="checkbox" name="chk" className="custom-control-input"
                                            checked/> <label htmlFor="chk1"
                                                             className="custom-control-label text-muted text-sm">Scroll down for save my
                                            card for future payment</label></div>
                                    </div>
                                </div>
                                <div className="col-sm-5 text-sm-center justify-content-center pt-4 pb-4"><small
                                    className="text-sm text-muted">Order number</small>
                                    <h5 className="mb-5">12345678</h5> <small className="text-sm text-muted">Payment
                                        amount</small>
                                    <div className="row px-3 justify-content-sm-center">
                                        <h2 className=""><span className="text-md font-weight-bold mr-2">$</span><span
                                            className="text-danger">59.49</span></h2>
                                    </div>
                                    <button  type="submit" name="payee" className="btn btn-red text-center mt-4">PAY</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </div>

        );
    }
}

export default FinalPayment;