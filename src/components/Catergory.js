import React, { Component } from "react";
import ReactRoundedImage from "react-rounded-image";
import { CardTitle } from 'reactstrap';

import bio from "./Images/bio.png";
import clip from "./Images/clip.png";
import hist from "./Images/history.jpg";
import tree from "./Images/tree.png";
import sci from "./Images/sci.png";
import roman from "./Images/romantic.png";


class Catergory extends Component {
  render() {
    return (

       <div>
           <br />
            <h2 style={{
                font: "20px"}}><b>
                Shop by Catergory</b></h2>
            <br />
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            
            <a href="/romance">
                <ReactRoundedImage
                image={roman}
                roundedColor=""
                imageWidth="150"
                imageHeight="150"
                roundedSize="13"
                borderRadius="70"
                />
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <CardTitle>Romance</CardTitle>
                </div>
            </a>
            
            <a href="/novel">
            <ReactRoundedImage
            image={clip}
            roundedColor=""
            imageWidth="150"
            imageHeight="150"
            roundedSize="13"
            borderRadius="70"
            />
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
            <CardTitle>Novels</CardTitle>
            </div>
            </a>

            <a href="/business">
            <ReactRoundedImage
            image={tree}
            roundedColor=""
            imageWidth="150"
            imageHeight="150"
            roundedSize="13"
            borderRadius="70"
            />
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
            <CardTitle>Business </CardTitle>
            </div>
            </a>
            
            <a href="/sic">
            <ReactRoundedImage
            image={sci}
            roundedColor=""
            imageWidth="150"
            imageHeight="150"
            roundedSize="13"
            borderRadius="70"
            />
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
            <CardTitle>Sci-fi</CardTitle>
            </div>
            </a>

            <a href="/history">
            <ReactRoundedImage
            image={hist}
            roundedColor=""
            imageWidth="150"
            imageHeight="150"
            roundedSize="13"
            borderRadius="70"
            />
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
            <CardTitle>History</CardTitle>
            </div>
            </a>

            <a href="/bio">
            <ReactRoundedImage
            image={bio}
            roundedColor=""
            imageWidth="150"
            imageHeight="150"
            roundedSize="13"
            borderRadius="70"
            />
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
            <CardTitle>Biography</CardTitle>
            </div>
            </a>
        </div>
      </div>
    );
  }
}

export default Catergory;