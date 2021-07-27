import React from 'react';
import { Button } from 'react-bootstrap';

const WelcomeMessage = (props) => {
  return (
    <>
    <p>This is the welcome message for Home page</p>
    <Button
      variant = 'primary'
      onClick = {props.handleClick}
    >
      View Polls
    </Button>
    </>
  );
};

export default WelcomeMessage;
