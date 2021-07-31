import React, { useState, useContext } from 'react';
import axios from 'axios';

import {
  Form,
  Button
} from 'react-bootstrap';

import { Context } from '../context/appContext';

const Pollform = (props) => {
  const store = useContext(Context).store;
  const [ option, setOption ] = useState({
    poll_id: props.poll.polldata.poll_id
  });
  
  const handleRadio = (event) => {
    setOption({...option, option_id : event.target.value});
    console.log('option set as:', event.target.value, props.poll.polloptions[event.target.value]);
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    const vote = option;
    const opts={
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        "Authorization": "Bearer "+ store.token
      },
      data: JSON.stringify(vote)
    };

    console.log(opts);
    axios(process.env.REACT_APP_API_SERVER+"/api/polls/votepoll", opts)
      .then((resp)=>{
        if (resp.status === 200)
          console.log('voted successfully');
          props.setchanged(!props.changed)
        if (resp.status === 400)
          console.log('already voted');

      }).catch((error)=>{
        console.error('caught error', error.response.data.msg);
        props.setchanged(!props.changed) 
      })
    

  }

  return (
    <>
    <Form onSubmit={handleSubmit}>
      <h1>{props.poll.polldata.question}</h1>
      <Form.Group onChange={handleRadio}>
      {Object.entries(props.poll.polloptions).map((key, i)=>
                (
                  <Form.Check
                    name="option"
                    type="radio"
                    label={key[1]}
                    value={key[0]}
                  />
                )
        ) 
      }
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  )
}

export default Pollform;
