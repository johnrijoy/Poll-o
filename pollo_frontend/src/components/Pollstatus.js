import React from 'react';
import {
  Row,
  Col,
  ProgressBar
} from 'react-bootstrap';

const Pollstatus = (props)=>{
  const options = props.poll.polloptions;
  const votes = props.poll.pollvotes;
  var totalvotes = 0;
  var progress = {};

  Object.entries(votes).map((item)=>{
    totalvotes = totalvotes + item[1];
    return true;
  });
  Object.entries(votes).map((item)=>{
    progress[item[0]] = (item[1]*100)/totalvotes;
    return true;
  });

  console.log('calcs:', totalvotes, progress);

  return (
    <>
    {progress ? (
      Object.entries(options).map((option)=>(
        <Row>
          <Col className="col-2">
            <h1 className="h4 align-self-center">{option[1]}</h1>
          </Col>
          <Col className="col-8 align-self-center">
            <ProgressBar striped variant="success" now={progress[option[0]]} />
          </Col>
          <Col className="col-2">
            <h1 className="h4">{votes[option[0]]}</h1>
          </Col>
        </Row>
      ))
    ):(
      <>
      Loading
      </>
    )} 
    </>
  )
}
export default Pollstatus;
