import React from "react";

import {
  Tabs,
  Tab
} from 'react-bootstrap';

import { Layout } from '../layout/Layout';
import { AttemptedPolls, MyPolls } from '../components';

const Dashboard = () => (
  <Layout heading="Dashboard">
    <Tabs defaultActiveKey="AttemptedPolls" id="uncontrolled-tab-example" className="mb-3">
      <Tab eventKey="AttemptedPolls" title="Attempted Polls">
        <AttemptedPolls />
      </Tab>
      <Tab eventKey="mypolls" title="My Polls">
        <MyPolls />
      </Tab>
    </Tabs>
  </Layout>
);

export default Dashboard;
