import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavDropdown,
  Container
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Context } from "../context/appContext";

import ModalLogin from "./ModalLogin";
import ModalCreatePoll from './ModalCreatePoll';

const Navigation = () => {
  const { store, actions } = useContext(Context);
  const [modalShow, setModalShow] = useState(null);
  const history = useHistory();

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

        <LinkContainer exact to='/'>
          <Nav.Link> Polls </Nav.Link>
        </LinkContainer>

       </Nav>

       <Nav className="me-auto;justify-content-end;">
       { !(store.isAuthenticated && store.user) ? (
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
        

        <NavDropdown title={'hi, '+ store.user.name } id="collasible-nav-dropdown">
          <NavDropdown.Item>Accout Settings</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item 
            onClick={()=>{
              actions.logout(); 
              history.push('/');
              history.go(0);
            }}
          >Sign Out</NavDropdown.Item>
        </NavDropdown>

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
