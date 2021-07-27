import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Pollcard } from '../components';

console.log(process.env);

class AllPolls extends Component {
  constructor (props){
    super(props);
    this.state = {polls : null};
    axios.get(process.env.REACT_APP_API_SERVER + "/polls/viewpoll",
      {headers: {'Accepts': 'aplication/json'}}
    ).then((resp)=>{
        console.log(resp.data);
        this.setState({ polls : resp.data });
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
        polls.polls.map((poll)=>(
          <Pollcard polldata={poll}/>
          )
        )
      ) : (
        <p>All polls will be displayed here</p>
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
