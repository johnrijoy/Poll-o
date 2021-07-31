import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import {
  Alert,
  Form,
  Button
} from 'react-bootstrap';

import { Context } from '../context/appContext';

const RegisterForm = (props)=>{
  const [alerts, setAlerts] = useState(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const actions = useContext(Context).actions;
  const history = useHistory();

  const handleSubmit = (e)=> {
    e.preventDefault();
    actions.register(email, name, password)
      .then(()=>{
        console.log("You have been registered");
        actions.login(email, password)
      })
      .then(()=>{
        props.handleSuccess();
        // redirect to dashboard
        history.push('/dashboard');
        console.log("You have beeen logged in");
      }
      ).catch((error)=>{
        console.log("Error 3", error.response.data.msg);
        setAlerts(error.response.data.msg);
      });
  };

  return (
  <Form>
    <Form.Group className="mb-3" controlId="Name">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter name" 
        value={name} onChange={e=>setName(e.target.value)}
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="Email">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="text" placeholder="Enter email" 
        value={email} onChange={e=>setEmail(e.target.value)}
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="Password">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Enter Password" 
        value = {password} onChange={e=>setPassword(e.target.value)}
      />
    </Form.Group>

    { (alerts) &&
    <Alert variant="danger">
      {alerts}
    </Alert>
    }

    <Button variant="primary" type="submit" 
        onClick = {(e)=> handleSubmit(e)}>
      Register
    </Button>

  </Form>
  );   
};

export default RegisterForm;
