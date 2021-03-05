import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home';
import State from './pages/State';
import Context from './pages/Context';

import Topnav from './components/topnav/Topnav';
import Button from './elements/button/Button';

import './App.scss';


const App = () => {
  return (
    <Router>
      <div className="app">
        <Topnav 
          primaryNav={[
            <Link className="link black" to="/">Home</Link>,
            <Link className="link black" to="/state">State</Link>
          ]} 
          secondaryNav={[
            <Button theme="white" txt="settings" icon="settings" />
          ]} />
        <div className="app__content">
          <Switch>
            <Route exact path="/state" component={ State } />,
            <Route exact path="/state/context" component={ Context } />
            <Route exact path="/" component={ Home } />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
