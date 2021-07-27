import React, { useState } from "react";
import {
  Row,
  Col,
  Nav,
  Modal
} from "react-bootstrap";

import { LoginForm, RegisterForm } from './index';
import './ModalLogin.css';

const ModalLogin = (props) => {
  const [ register, setRegister ] = useState(false);
  
  const handleSuccess = ()=>{
    props.setModalShow(null);
  }

  return (
   <Modal
     {...props}
     size="lg"
     aria-labelledby="contained-modal-title-vcenter"
     
   >
     <Modal.Header closeButton>
       <Modal.Title>Sign In</Modal.Title>
     </Modal.Header>
    
     <Modal.Body>
    <Row>
    <Col className="col-2">
    <Nav variant="pills" className="text-center">
      <Nav.Item>
        <Nav.Link onClick={()=>setRegister(false)} active={!register}>Login</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>setRegister(true)} active={register}>Register</Nav.Link>
      </Nav.Item>
    </Nav>
    </Col>
    <Col>{ register?(
          <RegisterForm handleSuccess={handleSuccess}/>
          ):(
           <LoginForm handleSuccess={handleSuccess} />
          )}
     </Col>
     </Row> 
     </Modal.Body>
   </Modal>
 );
};
 
export default ModalLogin;

