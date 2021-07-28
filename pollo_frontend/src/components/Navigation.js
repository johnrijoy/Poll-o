import React, { useState, useContext } from "react";
import {
  Navbar,
  Nav,
  Container
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Context } from "../context/appContext";

import ModalLogin from "./ModalLogin";
import ModalCreatePoll from './ModalCreatePoll';

const Navigation = () => {
  const { store, actions } = useContext(Context);
  const [modalShow, setModalShow] = useState(null);
  const navs =[
    {
      name:"Polls",
      path: "#"
    }
  ]

  return (
    <>
    <Navbar bg="primary" variant="dark" expand="md">
    <Container>

     <LinkContainer exact to='/'>
      <Navbar.Brand>Poll'O</Navbar.Brand>
     </LinkContainer>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />

     <Navbar.Collapse id="basic-navbar-nav">

       <Nav className="me-auto justify-content-center">

    { store.isAuthenticated ? (
      <>
         <Nav.Link 
            variant="light"
            onClick={() => setModalShow('CreatePoll')}
         >
          Create Poll
         </Nav.Link> 

         <ModalCreatePoll show={modalShow==='CreatePoll'} onHide={()=> setModalShow(null)} />
      </>
    ):(
      <>
      </>
    )}
         {navs.map(navItem => (
              <Nav.Link 
                href={navItem.path}
              > {navItem.name} </Nav.Link>
          )
         )}

       </Nav>

       <Nav className="me-auto;justify-content-end;">
       { !store.isAuthenticated ? (
         <>
         <Nav.Link 
            variant="light"
            onClick={() => setModalShow('Login')}
         >
          Sign In
         </Nav.Link> 

         <ModalLogin show={modalShow === 'Login'} onHide={() => setModalShow(null)} setModalShow={setModalShow}/>
         </>
       ):(

         <>
         <LinkContainer to='/dashboard'>
           <Nav.Link>
             Dashboard
           </Nav.Link>
         </LinkContainer>

         <Nav.Link
          onClick={()=>actions.logout()}
         >
          Sign Out
         </Nav.Link>

         </>
       )
       }
         </Nav>
    
     </Navbar.Collapse>
    </Container>
    </Navbar>
    </>
  );
};

export default Navigation;
