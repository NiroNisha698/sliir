import React, {useState} from 'react';
import Cardds from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css';
import './creditAnimationStyle.css';
import swal from "sweetalert";
import $ from "jquery";

function App() {
    const [number, setNumber] = useState('')
    const [name,setName] =useState('')
    const [expiry,setExpiry] =useState('')
    const [cvc,setCvc] =useState('')
    const [focus,setFocus] =useState('')
    $(".submitcc").click(function() {
        swal("Good job!", "Your card details saved successfully", "success");
    });


    return (
        <div className="creaditn">
            <h1>Save your Card details Securely</h1>
            <br/>
            <Cardds
                number={number}
                name={name}
                expiry={expiry}
                cvc={cvc}
                focued={focus}
            />
            <br/>
            <br/>

            <div className="formnadu">
                <form className="cardani" >
                    <input className="niroin"  type='tel'
                           name='number'
                           maxLength='16'
                           required title='Enter '
                           placeholder='Card Number'
                           value={number}
                           onChange={e => setNumber(e.target.value)}
                           onFocus={e => setFocus(e.target.name)}
                    />

                    <input className="niroin" type='text'
                           name='name'
                           placeholder='Name'
                           required title='Enter '
                           value={name}
                           onChange={e => setName(e.target.value)}
                           onFocus={e => setFocus(e.target.name)}
                    />

                    <input className="niroin" type='text'
                           name='expiry'
                           maxLength='4'
                           required title='Enter '
                           placeholder='MM/YY Expiry'
                           value={expiry}
                           onChange={e => setExpiry(e.target.value)}
                           onFocus={e => setFocus(e.target.name)}
                    />

                    <input className="niroin" type='tel'
                           name='cvc'
                           maxLength='4'
                           required title='Enter '
                           placeholder='CVC'
                           value={cvc}
                           onChange={e => setCvc(e.target.value)}
                           onFocus={e => setFocus(e.target.name)}
                    />

                </form>
                <button className="submitcc"  type="submit" form="creditform" value="Submit" >SUBMIT</button>
            </div>


            <br/>
            <br/>


        </div>
    );



}
export default App;