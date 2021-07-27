import React, { useState } from "react";

import { Layout } from '../layout/Layout';
import { 
  AllPolls,
  WelcomeMessage
} from '../components';

const Home = () => {
  const [viewPolls, setViewPolls] = useState(false);

  const handleClick = ()=>(setViewPolls(!viewPolls))
 
  return (
    <Layout>

       { (viewPolls) ? (
           <AllPolls handleClick={handleClick}/>
       ) : (
           <WelcomeMessage handleClick={handleClick} />
       )

       }
    </Layout>
  );
};

export default Home;
