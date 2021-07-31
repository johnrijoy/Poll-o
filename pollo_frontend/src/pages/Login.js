import React, { useContext, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import {Row, Col, Tabs, Tab} from 'react-bootstrap';

import { Layout } from '../layout/Layout';
import { Context } from '../context/appContext';
import { LoginForm, RegisterForm } from '../components';

const Login = () => {
  const authenticated = useContext(Context).store.isAuthenticated;
  const history = useHistory();

  useEffect(()=>{
    if (authenticated) history.goBack();
  }, [authenticated, history])
 
  return (
  <Layout heading="Login | Register">
    <Row className="justify-content-center">
     <Col className="col-lg-4">
     <Tabs defaultActiveKey="Login" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="Login" title="Login">
    <LoginForm />
  </Tab>
  <Tab eventKey="Register" title="Register">
    <RegisterForm />
  </Tab>
</Tabs> 
     </Col>
    </Row>
  </Layout>
 )
}

export default Login;
