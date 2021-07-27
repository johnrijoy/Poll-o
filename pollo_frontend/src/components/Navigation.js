import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container
} from "react-bootstrap";
import { Link } from "react-router-dom";

import ModalLogin from "./ModalLogin";
import ModalCreatePoll from './ModalCreatePoll';

const Navigation = () => {
  const [modalShow, setModalShow] = useState(null);
  const navs =[
    {
      name:"Polls",
      path: "#"
    },
    {
      name:"Create Poll",
      path: "#"
    }
  ]

  return (
    <>
    <Navbar bg="primary" variant="dark" expand="md">
    <Container>

     <Link exact to='/'>
      <Navbar.Brand href="#home">Poll'O</Navbar.Brand>
     </Link>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />

     <Navbar.Collapse id="basic-navbar-nav">

       <Nav className="me-auto justify-content-center">
         {navs.map(navItem => (
              <Nav.Link 
                href={navItem.path}
              > {navItem.name} </Nav.Link>
          )
         )}

         <Link to='/dashboard'>
           <Nav.Link as='li'>
             Dashboard
           </Nav.Link>
         </Link>

       </Nav>

       <Nav className="me-auto;justify-content-end;">
         <Nav.Link 
            variant="light"
            onClick={() => setModalShow('CreatePoll')}
         >
          Create Poll
         </Nav.Link> 

         <Nav.Link 
            variant="light"
            onClick={() => setModalShow('Login')}
         >
          Sign In
         </Nav.Link> 

         <ModalLogin show={modalShow === 'Login'} onHide={() => setModalShow(null)} setModalShow={setModalShow}/>
         <ModalCreatePoll show={modalShow==='CreatePoll'} onHide={()=> setModalShow(null)} />
       </Nav>
    
     </Navbar.Collapse>
    </Container>
    </Navbar>
    </>
  );
};

export default Navigation;
