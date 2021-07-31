import React, { useState, useContext } from "react";
import { useHistory, useLocation } from 'react-router-dom';
import {
  Alert,
  Form,
  Button
} from 'react-bootstrap';

import { Context } from '../context/appContext';

const LoginForm = (props)=>{
  const [alerts, setAlerts] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const actions = useContext(Context).actions;
  const history = useHistory();
  const location  = useLocation();

  const handleSubmit = (e)=> {
    e.preventDefault();
    actions.login(email, password)
      .then(()=>{
        if (props.handleSuccess)
        (props.handleSuccess())
        else
          (history.goBack())
        console.log(location.pathname);
        // redirect to dashboard
        //history.push('/dashboard');
        console.log("You have beeen logged in");
      }
      ).catch((error)=>{
        console.log("Error 3", error.response.data.msg);
        setAlerts(error.response.data.msg);

      });
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

    { (alerts) &&
    <Alert variant="danger">
      {alerts}
    </Alert>
    }

    <Button variant="primary" type="submit" 
        onClick = {(e)=> handleSubmit(e)}>
      Log In
    </Button>

  </Form>
  );   
};

export default LoginForm;
