import React, { useState,useContext } from 'react';
import axios from 'axios';
import { Col,Card,Collapse,ListGroup,Button } from 'react-bootstrap';
import { Context } from "../context/appContext";

const Pollcard = (props) => {
  const poll = props.polldata;
  const [polldata, setPolldata] = useState(null)
  const [open, setOpen] = useState(false);
  const token = useContext(Context).store.token

  const handleCheckout = (pollid) =>{
    const data = {
      "poll_id":pollid
    }
    const opts={
      method: "GET",
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json",
        "Authorization": "Bearer "+ token
      },
      params: {"poll_id":pollid}
    };

    axios.get(process.env.REACT_APP_API_SERVER + "/api/polls/getpoll",
      opts
    ).then((resp)=>{
        console.log(resp.data);
        setPolldata(resp.data);
        setOpen(!open);
      }
    ).catch((error) =>{
        console.log(error);
      }
    );
  }

  return (
    <>
    <Col>
    <Card border="primary" className="mb-3" >
      <Card.Body
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}

      >
        <Card.Title>{poll.question}</Card.Title>
        { useContext(Context).store.isAuthenticated &&
        <Button
         variant = 'primary'
        >Check out</Button>
        }

      <Collapse in={open}>
        <Card.Text id="example-collapse-text">
          <ListGroup variant="flush">
            {        
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            }
          </ListGroup>
        </Card.Text>  
      </Collapse>
      <Button
        onClick={()=>handleCheckout(poll.id)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Check Out
      </Button>

      </Card.Body>
      <Card.Footer className="text-muted text-end">Poll created on</Card.Footer>
    </Card>
    </Col>
    </>
  );
};

export default Pollcard;
