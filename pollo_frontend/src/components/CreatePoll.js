import React from 'react';
import {
  Form,
  ButtonGroup,
  InputGroup,
  Button
} from 'react-bootstrap';

import { Context } from '../context/appContext';

// functional component to add and remove options
const OptionGroup = (props) => {
    const count = props.count;
    return (
      <Form.Group className="mb-3" controlId={'Option'+(count+1)}>
      <InputGroup>
        <InputGroup.Text
          id = {'Option'+(count+1)}
        >Option {count+1}</InputGroup.Text>
        <Form.Control
          className="col-sm-10"
          type="text"
          name = {count}
          aria-describedby={'Option'+(count+1)}
          value={props.value}
          onChange = {(event)=>(props.handleChangeInput(event, count))}
        />
      </InputGroup>
      </Form.Group>
    );
  };

// class component for create poll form
class CreatePoll extends React.Component {
  static contextType = Context;

  constructor(props){
    super(props);
    this.state={
    question:"",
    options:["",""]
    }

    
  }

  addOption = () => {
      const values = this.state;
      if (values.options.length < 10){
        values.options.push('');
      }
      this.setState(values);
    
    }

   removeOption = () => {
      const values = this.state;
      if (values.options.length > 2){
        values.options.pop();
      }
      this.setState(values);
    }

   handleChangeInput= (event, i) => {
      console.log(i);
      const values = this.state;
      values.options[i] = event.target.value;
      this.setState(values);
    }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state, this.context);
    this.context.actions.create_post(this.state)
      .then((ret)=>{
        if (ret){
        this.props.onHide();
        console.log('post created successfully')
        }
      }).catch(
        console.log("Error in action: create_post")
      )
    
  }

  render() {
    return (
    <>
    <Form onSubmit={this.handleSubmit}>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Question</Form.Label>
        <Form.Control
          name = "question"
          value={this.state.question}
          onChange={(e)=>(
            this.setState(
              prevState=>({...prevState, [e.target.name]:e.target.value}))
          )}
          as="textarea" rows={2} 
          placeholder="Enter Question you want to ask" />
      </Form.Group>
      
      {this.state.options.map((option, i) => (
          <OptionGroup count={i}
            value = {option}
            handleChangeInput={this.handleChangeInput}
          />
        )
      )}

    <Form.Group className="mt-3">
    <ButtonGroup aria-label="Basic example">
      <Button variant="success"
        onClick={()=>this.addOption()}
      >Add</Button>
      <Button variant="secondary"
        onClick={()=>this.removeOption()}
      >Remove</Button>
    </ButtonGroup>
    </Form.Group>
    <hr/>
    <Form.Group className='mt-3 text-end'>
      <Button className='m-2' onClick={this.props.onHide}>Close</Button>
      <Button className='m-2' variant="primary" type="submit">
        Submit
      </Button>
    </Form.Group>
    </Form>
    </>
  );
 }
  
};

export default CreatePoll;
