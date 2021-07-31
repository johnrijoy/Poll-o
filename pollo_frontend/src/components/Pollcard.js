import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { Col,Card,Collapse,ListGroup,Button } from 'react-bootstrap';
import { Context } from "../context/appContext";

const Pollcard = (props) => {
  const poll = props.polldata;
  const [polldata, setPolldata] = useState(false);
  const [open, setOpen] = useState(false);
  const token = useContext(Context).store.token;
  const history = useHistory();

  const handleCheckout = (pollid) =>{
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
        console.log('response data',resp.data);
        const data = resp.data;
        setPolldata(data);
        console.log('poll data:',polldata);
        setOpen(!open);
      }
    ).catch((error) =>{
        console.log(error.response.status);
        if (error.response.status === 422 || error.response.status === 401 )
          history.push('/login');
      }
    );
  }

  return (
    <>
    <Col>
    <Card border="primary" className="mb-3" >
      <Card.Body
        onClick={()=>handleCheckout(poll.id)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        <Card.Title>{poll.question}</Card.Title>

      <Collapse in={open}>
        <Card.Text id="example-collapse-text">
          <ListGroup variant="flush">
            { (polldata)?
              (Object.entries(polldata.polloptions).map((key, i)=>{
                return(
                  <ListGroup.Item id={key[0]}>
                   {key[1]} 
                  </ListGroup.Item>
                );
            })):(
              <p>Loading</p>
            )}
          </ListGroup>
          { useContext(Context).store.isAuthenticated &&
          <Button
           variant = 'primary'
           onClick={()=>history.push('/poll/'+polldata.polldata.poll_id)}
          >Check out</Button>
          }
        </Card.Text>  
      </Collapse>

      </Card.Body>
      <Card.Footer className="text-muted text-end">Poll created on</Card.Footer>
    </Card>
    </Col>
    </>
  );
};

export default Pollcard;
