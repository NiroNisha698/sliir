import React, {Component} from 'react';
import "./demoStyle.css";
import $ from 'jquery';

class Demo extends Component {
    componentDidMount() {

        $(window).on("load resize ", function() {
            var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
            $('.tbl-header').css({'padding-right':scrollWidth});
        }).resize();

    }

    render() {
        return (
            <div className="niroTab">

                <section>

                    <h1>Payment HISTORY</h1>
                    <div className="tbl-header">
                        <table cellPadding="0" cellSpacing="0" border="1">
                            <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Book Name</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th>ISBN</th>
                            </tr>
                            </thead>
                        </table>
                    </div>
                    <div className="tbl-content">
                        <table cellPadding="0" cellSpacing="0" border="1">
                            <tbody>
                            <tr>
                                <td>CIN000001</td>
                                <td>Harry Potter</td>
                                <td>LKR.3000.00</td>
                                <td>2020/01/02</td>
                                <td>978512362</td>
                            </tr>
                            <tr>
                                <td>CIN000002</td>
                                <td>Absalom</td>
                                <td>LKR.2500.00</td>
                                <td>2020/01/30</td>
                                <td>852130123</td>
                            </tr>
                            <tr>
                                <td>CIN000003</td>
                                <td>ADELAIDE</td>
                                <td>LKR.2200.00</td>
                                <td>2020/02/20</td>
                                <td>852136980</td>
                            </tr>
                            <tr>
                                <td>CIN000004</td>
                                <td>Time to kill piri</td>
                                <td>LKR.589.00</td>
                                <td>2020/02/29</td>
                                <td>458912358</td>
                            </tr>
                            <tr>
                                <td>CIN000005</td>
                                <td>AUSTRALIAN COMPANY</td>
                                <td>LKR.999.00</td>
                                <td>2020/02/12</td>
                                <td>854692132</td>
                            </tr>
                            <tr>
                                <td>CIN000006</td>
                                <td>AUSENCO</td>
                                <td>LKR.2999.00</td>
                                <td>2020/03/25</td>
                                <td>951230258</td>
                            </tr>
                            <tr>
                                <td>CIN000007</td>
                                <td>ADELAIDE</td>
                                <td>LKR.850.00</td>
                                <td>2020/03/28</td>
                                <td>752036823</td>
                            </tr>
                            <tr>
                                <td>CIN000008</td>
                                <td>ADITYA BIRLA</td>
                                <td>LKR.845.00</td>
                                <td>2020/03/29</td>
                                <td>652103679</td>
                            </tr>
                            <tr>
                                <td>CIN000009</td>
                                <td>AUSTRALIAN COMPANY</td>
                                <td>LKR.499.00</td>
                                <td>2020/04/13</td>
                                <td>456028779</td>
                            </tr>
                            <tr>
                                <td>CIN000010</td>
                                <td>AUSENCO</td>
                                <td>LRK.860.00</td>
                                <td>2020/04/16</td>
                                <td>125891320</td>
                            </tr>



                            </tbody>
                        </table>
                    </div>
                </section>


                <div className="made-with-love">

                </div>



            </div>
        );
    }
}

export default Demo;