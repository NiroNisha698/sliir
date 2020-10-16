import "./Footer.css";

import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
        <div>
          <div className="main-footer">
            <div className="container">
              <div className="row">
                <div class="col-sm-3">
                    <ul>
                    <li className="list-unstyled">
                      <a href="#">FAQ</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="#">Feedback</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="/ReqBook">Request Book</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="#">Track Order</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="">Terms & Condtions</a>
                    </li>
                  </ul>
                </div>
                <div class="col-sm-3">
                  <ul>
                  <li className="list-unstyled">
                      <a href="/Loginew">Admin Login</a>
                    </li>
                  </ul>
                </div>
              </div>
              <hr />
              <div className="">
                <p className="col-sm">
                  &copy;{new Date().getFullYear()} Created with ♥ by jarvis
                </p>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Footer;

