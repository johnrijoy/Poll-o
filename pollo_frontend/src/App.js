import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation.js';
import {Home, Dashboard} from './pages';
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

      </Switch>

    </Router>
  );
};

export default injectContext(App);
