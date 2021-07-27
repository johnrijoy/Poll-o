import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Pollcard = (props) => {
  const poll = props.polldata;
  return (
    <>
    <Card>
      <Card.Body>
        <Card.Title>{poll.question}</Card.Title>
        <Button
         variant = 'primary'
        >Check out</Button>
      </Card.Body>
    </Card>
    </>
  );
};

export default Pollcard;
