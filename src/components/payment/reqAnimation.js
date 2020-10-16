import React, {Component} from 'react';
import './reqAni_Style.css'
import {TwitterTimelineEmbed} from "react-twitter-embed";

class ReqAnimation extends Component {
    render() {
        return (
            <div className="catag">


                <blockquote className="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">Independent booksellers
                    are desperate for customers to return, and not just for an online reading <a
                        href="https://t.co/v6wg3wnFzK">https://t.co/v6wg3wnFzK</a></p>&mdash; New York Times Books
                    (@nytimesbooks) <a
                    href="https://twitter.com/nytimesbooks/status/1316812370212159489?ref_src=twsrc%5Etfw">October 15,
                    2020</a>
            </blockquote>
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="#"
                    options={{height: 200}}
                />

            </div>
        );
    }
}

export default ReqAnimation;