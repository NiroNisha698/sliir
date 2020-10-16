import React, {Component} from 'react';
import "./paymentStyle.css"
import $ from 'jquery';
import Button from 'react-bootstrap/Button';
import Badge from "@material-ui/core/Badge";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import reqDeee from '../views/requestBook/mainReqBook';



class PaymentBook extends Component {
    inputCheck;



    componentDidMount() {



//jQuery time
        var current_fs, next_fs, previous_fs; //fieldsets
        var left, opacity, scale; //fieldset properties which we will animate
        var animating; //flag to prevent quick multi-click glitches

        $(".next").click(function(){


            if(animating) return false;
            animating = true;

            current_fs = $(this).parent();
            next_fs = $(this).parent().next();

            //activate next step on progressbar using the index of next_fs
            $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

            //show the next fieldset
            next_fs.show();
            //hide the current fieldset with style
            current_fs.animate({opacity: 0}, {
                step: function(now, mx) {
                    //as the opacity of current_fs reduces to 0 - stored in "now"
                    //1. scale current_fs down to 80%
                    scale = 1 - (1 - now) * 0.2;
                    //2. bring next_fs from the right(50%)
                    left = (now * 50)+"%";
                    //3. increase opacity of next_fs to 1 as it moves in
                    opacity = 1 - now;
                    current_fs.css({
                        'transform': 'scale('+scale+')',
                        'position': 'absolute'
                    });
                    next_fs.css({'left': left, 'opacity': opacity});
                },
                duration: 800,
                complete: function(){
                    current_fs.hide();
                    animating = false;
                },
                //this comes from the custom easing plugin
               // easing: 'easeInOutBack'
              //  easing: Easing.bounce
            });
        });

        $(".previous").click(function(){
            if(animating) return false;
            animating = true;

            current_fs = $(this).parent();
            previous_fs = $(this).parent().prev();

            //de-activate current step on progressbar
            $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

            //show the previous fieldset
            previous_fs.show();
            //hide the current fieldset with style
            current_fs.animate({opacity: 0}, {
                step: function(now, mx) {
                    //as the opacity of current_fs reduces to 0 - stored in "now"
                    //1. scale previous_fs from 80% to 100%
                    scale = 0.8 + (1 - now) * 0.2;
                    //2. take current_fs to the right(50%) - from 0%
                    left = ((1-now) * 50)+"%";
                    //3. increase opacity of previous_fs to 1 as it moves in
                    opacity = 1 - now;
                    current_fs.css({'left': left});
                    previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
                },
                duration: 800,
                complete: function(){
                    current_fs.hide();
                    animating = false;


                },
                //this comes from the custom easing plugin

            });
        });

        $(".submit").click(function(){


            current_fs = $(this).parent();
            current_fs.animate({opacity: 0}, {

                duration: 8000,
                complete: function(){
                    current_fs.hide();
                    animating = false;


                },
                });
            swal("Good job!", "Thank you for Contact US", "success");
            swal.close();

        });


    }



    render() {
        return (
<div className="niro-pay">
    <h2>REQUEST BOOK</h2>
            <div className="row">
              <div className="col-md-6 col-md-offset-3">
                  <form id="msform">
                      <ul id="progressbar">
                          <li className="active">Personal Details</li>
                          <li>Book details</li>
                          <li>Confirmation Setup</li>
                      </ul>

                      <fieldset>
                          <h2 className="fs-title">Personal Details</h2>
                          <h3 className="fs-subtitle">Tell us something more about you</h3>
                          <input type="text" name="fname" placeholder="Full Name" />
                          <input type="tel" name="lname" placeholder="Mobile" />
                          <input type="text" name="pname" placeholder="Email" />
                          <input type="text" name="pname" placeholder="Occupation" />
                          <input type="button" name="next" className="next action-button" value="Next" />
                      </fieldset>


                      <fieldset>
                          <h2 className="fs-title">Book Details</h2>
                          <h3 className="fs-subtitle">Your request details</h3>
                          <input type="tel" name="twitter" placeholder="Book Title"/>
                          <input type="number" name="google" placeholder="ISBN No"/>
                          <input type="text" name="insta" placeholder="Category"/>
                          <input type="text" name="youTube" placeholder="Nationality"/>
                          <input type="button" name="previous" className="previous action-button-previous" value="Previous"/>
                          <input type="button" name="next" className="next action-button" value="Next"/>
                      </fieldset>

                      <fieldset>
                          <h2 className="fs-title">Confirm Request</h2>
                          <h3 className="fs-subtitle">Fill in your credentials</h3>
                          <input type="text" name="email" placeholder="Publisher"/>
                          <input type="date" name="pass" placeholder="Date of Publication"/>
                          <input type="password" name="cpass" placeholder="Confirm Password"/>
                          <input type="button" name="previous" className="previous action-button-previous" value="Previous"/>
                          <input type="submit" name="submit" className="submit action-button" value="Submit" />
                          {/*<Button variant="primary">
                              Amount <Badge variant="light">9</Badge>
                              <span className="sr-only">unread messages</span>
                          </Button>*/}
                      </fieldset>


                  </form>
              </div>


            </div>
           {/* <Button variant="success" >Summary</Button>*/}


</div>

        );
    }

}

export default PaymentBook;