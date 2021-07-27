import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import {
  Form,
  Button
} from 'react-bootstrap';

import { Context } from '../context/appContext';

const LoginForm = (props)=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { store, actions} = useContext(Context);
  const history = useHistory();

  const handleSubmit = (e)=> {
    e.preventDefault();
    actions.login(email, password)
      .then(()=>{
        props.handleSuccess();
        // redirect to dashboard
        history.push('/dashboard');
        console.log("You have beeen logged in");
      }
      ).catch(()=>(console.log("Error 3")));
  };

  return (
  <Form>
    <Form.Group className="mb-3" controlId="Email">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="text" placeholder="Enter email" 
        value={email} onChange={e=>setEmail(e.target.value)}
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" 
        value = {password} onChange={e=>setPassword(e.target.value)}
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>

    <Button variant="primary" type="submit" 
        onClick = {(e)=> handleSubmit(e)}>
      Log In
    </Button>

  </Form>
  );   
};

export default LoginForm;
