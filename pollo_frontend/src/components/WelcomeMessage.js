import React from 'react';
import {
  Row,
  Col,
  Button 
} from 'react-bootstrap';

const WelcomeMessage = (props) => {
  return (
    <Row className="align-items-center text-center" style={{height:'60vh'}}>
    <Col>
    <h1>Welcome to Poll'O</h1>
    <br/><br/>
    <Button
      size="lg"
      variant = 'outline-primary'
      onClick = {props.handleClick}
    >
      View Polls
    </Button>
    </Col>
    </Row>
  );
};

export default WelcomeMessage;
