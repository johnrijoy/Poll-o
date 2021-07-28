import React, { Component } from 'react';
import axios from 'axios';
import { Row,Col,Spinner,Button } from 'react-bootstrap';
import { Pollcard } from '../components';

console.log(process.env);

class AllPolls extends Component {
  constructor (props){
    super(props);
    this.state = {
      polls : null,
      loading: true
    };
    axios.get(process.env.REACT_APP_API_SERVER + "/polls/viewpoll",
      {headers: {'Accepts': 'aplication/json'}}
    ).then((resp)=>{
        console.log(resp.data);
        this.setState({ polls : resp.data, loading: false });
      }
    ).catch((error) =>{
        console.log(error);
      }
    );
  }

  render() {
    const polls = this.state.polls;
    console.log('Hello')
    console.log(polls);

    return (
      <>

      {(polls) ? (
        <Row xs={1} md={2} lg={3}  className="g-4">
        {polls.polls.map((poll)=>(
          <Pollcard polldata={poll}/>
          )
        )}
        </Row>
      ) : (
        <>
        <Row className="align-items-center text-center" style={{height:"70vh"}}>
        <Col>
          <Spinner animation="grow" />
          <br/><br/>
          <p className="text-muted">All polls will be displayed here</p>
        </Col>
        </Row>
        </>
      )}

      <Button
       variant = 'secondary'
       onClick = {this.props.handleClick}
      >
        Back
      </Button>
      </>
    )
  }
}

export default AllPolls;
