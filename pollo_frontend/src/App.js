import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation.js';
import {Home, Dashboard, Login, Pollpage} from './pages';
import injectContext from './context/appContext';

function App() {
  return (
    <Router>

      <Navigation />

      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/dashboard">
          <Dashboard />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/poll/:poll_id">
          <Pollpage />
        </Route>

    </Switch>

    </Router>
  );
};

export default injectContext(App);
