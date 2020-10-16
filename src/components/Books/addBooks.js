import React from 'react';
import { FormGroup, Label  } from 'reactstrap';
import './books.css';
import { Button, Container, Row, Col, Card, CardImg,  CardDeck, CardTitle, CardText, 
  CardSubtitle, CardBody  } from 'reactstrap';
import CardActionArea from '@material-ui/core/CardActionArea';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import heart from '../Images/heart.jpg';
import honda from '../Images/honda.jpg';
import kaalam from '../Images/kaalam.jpg';
import hotel from '../Images/hotel.png';
import lake from '../Images/lake.jpg';

const Books = (props) => {
  return (
   <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color:"#000000"
    }}>

     <form>
      <FormGroup>
        <br />
        <Label for="bookName">Book Name</Label>
        <input type="textarea" name="text" id="bookName" placeholder="Name of the Book" size="40" required/>
      </FormGroup>
      <FormGroup>
        <Label for="bookAuthor">Book Author</Label>
        <input type="text" name="text" id="bookAuthor" placeholder="Name of the Author" size="40" required />
      </FormGroup>
      <FormGroup>
        <Label for="bookIsbn">Book ISBN</Label>
        <input type="text" name="number" id="bookIsbn" placeholder="Book ISBN" />
      </FormGroup>
      <FormGroup>
        <label for="desc">Book Description</label>
        <input type="textarea" name="text" id="desc" placeholder="Description" rows="5" cols="33"/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">File</Label>
        <input type="file" name="file" id="exampleFile" />
      </FormGroup>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      <button class="button">Submit</button>
      
    </form>

  <div>
      <CardDeck>
      <Card style={{width:"80%", height:"60%"}}>
                          <CardActionArea>
                          <CardImg  
                          src={heart}
                          alt="Book"
                          height="210"
                      />
                      </CardActionArea>
                          <CardBody>
                          <CardTitle>Heart Spring Mountain</CardTitle>
                          <CardSubtitle>Robin Macarthur</CardSubtitle>
                          <CardText>$52</CardText>
                              <Box component="fieldset" borderColor="transparent">
                                  <Rating name="read-only" value={3} readOnly />
                              </Box>
                          <Button>Add to Cart</Button>
                          </CardBody>
                      </Card>
                      <Card style={{width:"80%", height:"60%"}}>
                          <CardActionArea>
                          <CardImg  
                          src={honda}
                          alt="Book"
                          height="210"
                      />
                      </CardActionArea>
                          <CardBody>
                          <CardTitle>Hitha Hoda Dosthara </CardTitle>
                          <CardSubtitle>Samarasinghe Gunasekara</CardSubtitle>
                          <CardText>$20</CardText>
                              <Box component="fieldset" borderColor="transparent">
                                  <Rating name="read-only" value={3} readOnly />
                              </Box>
                          <Button>Add to Cart</Button>
                          </CardBody>
                      </Card>
                      <Card style={{width:"80%", height:"60%"}}>
                          <CardActionArea>
                          <CardImg  
                          src={lake}
                          alt="Book"
                          height="210"
                      />
                      </CardActionArea>
                          <CardBody>
                          <CardTitle>The Bell in the Lake</CardTitle>
                          <CardSubtitle>Lars Mytting</CardSubtitle>
                          <CardText>$55</CardText>
                              <Box component="fieldset" borderColor="transparent">
                                  <Rating name="read-only" value={3} readOnly />
                              </Box>
                          <Button>Add to Cart</Button>
                          </CardBody>
                      </Card>
                      <Card style={{width:"80%", height:"60%"}}>
                          <CardActionArea>
                          <CardImg  
                          src={kaalam}
                          alt="Book"
                          height="210"
                      />
                      </CardActionArea>
                          <CardBody>
                          <CardTitle>Kolaiyuthir kaalam</CardTitle>
                          <CardSubtitle>Sujatha</CardSubtitle>
                          <CardText>$25</CardText>
                              <Box component="fieldset" borderColor="transparent">
                                  <Rating name="read-only" value={3} readOnly />
                              </Box>
                          <Button>Add to Cart</Button>
                          </CardBody>
                      </Card>
                      <Card style={{width:"80%", height:"60%"}}>
                          <CardActionArea>
                          <CardImg  
                          src={hotel}
                          alt="Book"
                          height="210"
                      />
                      </CardActionArea>
                          <CardBody>
                          <CardTitle>The Glass Hotel</CardTitle>
                          <CardSubtitle>Emily St.John Mandel</CardSubtitle>
                          <CardText>$50</CardText>
                              <Box component="fieldset" borderColor="transparent">
                                  <Rating name="read-only" value={2} readOnly />
                              </Box>
                          <Button>Add to Cart</Button>
                          </CardBody>
                      </Card>
      </CardDeck>
    </div>
   </div>
  );
}

export default Books;