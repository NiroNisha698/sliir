import React, {Component} from 'react';
import RequstBookNew from './paymentBook';
import Anim from './reqAnimation'
import Motive from './motivationBook'


class WrapReqBookMain extends Component {
    render() {
        return (
            <div>
                <div>
                    <Motive/>
                </div>
                <br/>
                <br/>
                <RequstBookNew/>
                <br/>
                <br/>
                <br/>

            <div>
                <Anim/>
            </div>
<br/>


            </div>
        );
    }
}

export default WrapReqBookMain;