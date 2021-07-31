import React from "react";
import {
  Container
} from 'react-bootstrap';

const Layout = (props) => ( 
    <>
    <Container className='h-100'>
      <h1 className="display-1 text-center">{props.heading}</h1> 
      <hr/>
    {props.children}
    </Container>
    </>
)

export { Layout };
