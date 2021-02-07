import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Landing from './pages/Landing';
import UI from './pages/UI';
import Buttons from './pages/Buttons';
import Messages from './pages/Messages';
import Brands from './pages/Brands';
import Loadings from './pages/Loadings';
import Controls from './pages/Controls';

import Topnav from './components/topnav/Topnav';
import Button from './ui/button/Button';

import './App.scss';


const App = () => {
  return (
    <Router>
      <div className="app">
        <Topnav 
          primaryNav={[
            <Link className="link black" to="/">Landing</Link>,
            <Link className="link black" to="/ui">UI</Link>
          ]} 
          secondaryNav={[
            <Button theme="gray" txt="register" icon="send" />
          ]} />
        <div className="app__content">
          <Switch>
            <Route exact path="/ui" component={ UI } />,
            <Route exact path="/ui/buttons" component={ Buttons } />,
            <Route exact path="/ui/messages" component={ Messages } />,
            <Route exact path="/ui/brand" component={ Brands } />,
            <Route exact path="/ui/loading" component={ Loadings } />,
            <Route exact path="/ui/controls" component={ Controls } />,
            <Route exact path="/" component={ Landing } />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
