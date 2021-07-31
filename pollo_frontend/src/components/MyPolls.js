import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { Context } from '../context/appContext';

import {
  Row
} from 'react-bootstrap';

import Pollcard from './Pollcard';

const MyPolls =(props)=>{
  const [polls, setPolls] = useState(null);
  const token = useContext(Context).store.token;

  useEffect(()=>{

    axios.get(process.env.REACT_APP_API_SERVER + "/api/polls/mypoll",
      {headers: 
        {'Accept': 'application/json', 
          'Authorization': 'Bearer '+ token}
      }
    ).then((resp)=>{
        console.log(resp.data);
        setPolls(resp.data);
      }
    ).catch((error) =>{
        console.log(error);
      }
    );

  }, [token]);

  return (
    <>
    {(polls) ?(
      <>
        <Row xs={1} md={2} lg={3}  className="g-4">
        {polls.polls.map((poll)=>(
          <Pollcard polldata={poll}/>
         ))}
         </Row>
      </>
    ):(
      <p>Loading</p>
    )}
    </>
  )
  
}
export default MyPolls;
