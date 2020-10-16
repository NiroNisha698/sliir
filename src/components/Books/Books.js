import React, { Component } from 'react'
import { Container, Row, Col, Card, CardImg,  CardDeck, CardTitle, CardText, 
         CardSubtitle, CardBody  } from 'reactstrap';
import CardActionArea from '@material-ui/core/CardActionArea';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import ReadMoreAndLess from 'react-read-more-less';

import obama from '../Images/obama.jpg';
import wife from '../Images/wife.jpg';
import far from '../Images/far.jpg';
import novel from '../Images/novel.jpg';
import mistakes from '../Images/mistakes.jpg';
import harry from '../Images/harry.jpg';
import love from '../Images/love.jpg';

import './books.css';
import Chips from './chips.js';


export default class Books extends Component {

    constructor(props) {
        super(props);
        this.state = {
          clicks: 0,
          show: true
        };
      }
    
      IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
      }
      DecreaseItem = () => {
        
        this.setState({ clicks: this.state.clicks - 1 });
      }
      

    render() {
        return (
            <div>
                <br />
                <Container>
                    <Row >
                        <Col>
                        <div class="col-sm-7">
                        <img 
                            src={obama}
                            alt="books"
                            height="300"
                        />
                        </div>
                        </Col>
                        <div class="col-sm-5">
                        <CardBody>
                            <CardTitle>Becoming </CardTitle>
                            <CardSubtitle>Michelle Obama</CardSubtitle>
                            <CardText>$18</CardText>
                                <Box component="fieldset" borderColor="transparent">
                                    <Rating name="read-only" value={3} />
                                </Box>
                               
                                <div >
                                    Units &nbsp;
                                <button class="button" onClick={this.DecreaseItem}>-</button>
                                { this.state.show ? <h2 class="buttonin">{ this.state.clicks }</h2> : '0' } 
                                <button  class="button" onClick={this.IncrementItem}>+</button>
                               </div>
                                <br />
                            <button class="button">Add to Cart</button>
                            <br />
                            <br />
                            <Chips />
                        </CardBody>
                        </div>
                        
                        <Col></Col>
                        <Col></Col>
                    </Row>
                    <br />
                    <Row >
                        <Col>
                            <div class="col-sm-10">
                                <h2>Book Description</h2>
                                <br />
                                <p class="p">In a life filled with meaning and accomplishment, Michelle Obama has emerged as one of the most 
                                iconic and compelling women of our era. As First Lady of the United States of America—the first African American 
                                to serve in that role—she helped create the most welcoming and inclusive White House in history, 
                                while also establishing herself as a powerful advocate for women and girls in the U.S. and around
                                 the world, dramatically changing the ways that families pursue healthier and more active lives, and 
                                 standing with her husband as he led America through some of its most harrowing moments. </p>

                                 <ReadMoreAndLess
                                    ref={this.ReadMore}
                                    className="read-more-content"
                                    charLimit={250}
                                    readMoreText="Read more"
                                    readLessText="Read less"
                                                                >
                                    {"Along the way, she showed us a few dance moves, crushed Carpool Karaoke, and raised two down-to-earth daughters under an unforgiving media glare.In her memoir, a work of deep reflection and mesmerizing storytelling, Michelle Obama invites readers into her world, chronicling the experiences that have shaped her—from her childhood on the South Side of Chicago to her years as an executive balancing the demands of motherhood and work, to her time spent at the world’s most famous address. With unerring honesty and lively wit, she describes her triumphs and her disappointments, both public and private, telling her full story as she has lived it—in her own words and on her own terms. Warm, wise, and revelatory, Becoming is the deeply personal reckoning of a woman of soul and substance who has steadily defied expectations—and whose story inspires us to do the same."}
                                </ReadMoreAndLess>

                                <p></p>
                            </div>
                            <br />
                            <div class="col-sm-5">
                                <h2>Book Details</h2>
                                <br />
                                <p>Book Name:  &nbsp; Becoming</p>
                                <p>ISBN:&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  1254563257895</p>
                                <p>Author:    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Michelle Obama</p>
                                <p>Publisher: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Vintage</p>
                                <p>Language:   &nbsp;&nbsp;&nbsp;&nbsp; English</p>
                            </div>
                            
                        </Col>
                        
                    </Row>
                    <br />
                    <div class="col-sm-10">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 

                      <button class="button">Add Review</button>
                    </div>
                    <br />
                    
                    <div>
                    <br />
                    <h2>People who liked this also liked !!!</h2>
                    <br />
                    <CardDeck>
                        <Card>
                        <CardActionArea>
                        <a href="/bdet">
                            <CardImg  
                            src={obama}
                            alt="Book"
                            height="210"    
                        />
                        </a>
                        </CardActionArea>
                        </Card>
                        <Card>
                            <CardActionArea>
                            <CardImg 
                                    src={far}
                                    alt="Book"
                                    height="210"
                                    
                                    />
                            </CardActionArea>
                        
                        </Card>
                        <Card>
                            <CardActionArea>
                            <CardImg  
                            src={novel}
                            alt="Book"
                            height="210"
                        />
                        </CardActionArea>
                            
                        </Card>
                        <Card>
                            <CardActionArea>
                            <CardImg  
                            src={love}
                            alt="Book"
                            height="210"
                        />
                        </CardActionArea>
                            
                        </Card>
                        <Card>
                            <CardActionArea>
                            <CardImg  
                            src={mistakes}
                            alt="Book"
                            height="210"
                        />
                        </CardActionArea>
                            
                        </Card>
                        <Card>
                            <CardActionArea>
                            <CardImg  
                            src={harry}
                            alt="Book"
                            height="210"
                        />
                        </CardActionArea>
                            
                        </Card>
                        <Card>
                            <CardActionArea>
                            <CardImg  
                            src={wife}
                            alt="Book"
                            height="210"
                            />
                            </CardActionArea>
                        </Card>
                    </CardDeck>
                    </div>
                    </Container>
                    <br />
                    <br />
            </div>
        )
    }
}
