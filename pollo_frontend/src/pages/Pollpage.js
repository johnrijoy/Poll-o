import React, { useState, useContext, useEffect } from "react";
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import {
  Card,
  Row,
  Col,
  Form
} from 'react-bootstrap';

import { Layout } from '../layout/Layout';
import { Context } from '../context/appContext';
import { 
  Pollform,
  Pollstatus
} from '../components';

const Pollpage = () => {
  const { poll_id } = useParams();
  const history = useHistory();
  const [ loading, setLoading ] = useState(true);
  const [ changed, setChanged ] = useState(false);
  const [ poll, setPoll ] = useState(null);
  const token = useContext(Context).store.token;
  
  console.log('poll id received:',poll_id, token);
  
  useEffect(()=> {
    
  const opts = {
      method: "GET",
      headers: {
        "Accept":"application/json",
        "Authorization": "Bearer "+ token
      },
      params: {"poll_id":poll_id}
  }
  axios.get(process.env.REACT_APP_API_SERVER+"/api/polls/getpoll", opts)
    .then((resp)=>{
      if (resp.status === 200){
      setPoll(resp.data);
      setLoading(false);
      }
    }).catch((error)=>{
      console.error("error in getpoll:", error);
      if (error.response.status === 422 || error.response.status === 401)
        history.push('/login');
    });
  }, [changed, token, poll_id, history])
  console.log(poll);

  return (
    <Layout heading="Poll'O">
    {loading ? (
        <>
        <p>Loading</p>
        </>
      ):(
        <>
        <Row>
          <Card className="text-center h2" body>{poll.polldata.question}</Card>
        </Row>
        <Row className="justify-content-center">
        { !poll.polldata.attempted &&
          <Col className="col-md-6">
            <Pollform poll = {poll} changed={changed} setchanged={setChanged}/>
          </Col>
        }
        <Col className="col-md-6">
          <Pollstatus poll = {poll} />
        </Col>
        </Row>

        <Row className="justify-content-center text-center">
        <Col>
          <Form.Group as={Row} className="mb-3 justify-content-center" >
            <Form.Label column sm="2">
               Share Link 
            </Form.Label>
            <Col sm="4">
              <Form.Control plaintext readOnly defaultValue={window.location.href} />
            </Col>
          </Form.Group>
        </Col>

        </Row>
        </>
      )
    }
    </Layout>
  );
};

export default Pollpage;
