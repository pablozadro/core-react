import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LocaleContext from '../contexts/Locale';

import Home from '../pages/Home';
import State from '../pages/State';
import ReactContextAPI from '../pages/ReactContextAPI';
import ReactReduxSync from '../pages/ReactReduxSync';
import ReactReduxAsync from '../pages/ReactReduxAsync';

import Topnav from '../components/topnav/Topnav';
import Button from '../elements/button/Button';

import './App.scss';

interface IAppState {
  locale: string;
};

class App extends React.Component<IAppState> {

  state: IAppState = {
    locale: 'en'
  }

  toggleLocale = () => {
    this.setState((state:IAppState) => ({
      locale: state.locale === 'en' ? 'es' : 'en'
    }));
  }

  render() {
    return (
      <LocaleContext.Provider value={{
          locale: this.state.locale,
          toggleLocale: this.toggleLocale
        }}>
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
                <Route exact path="/state/react-context-api" component={ ReactContextAPI } />
                <Route exact path="/state/react-redux-sync" component={ ReactReduxSync } />
                <Route exact path="/state/react-redux-async" component={ ReactReduxAsync } />
                <Route exact path="/" component={ Home } />
              </Switch>
            </div>
          </div>
        </Router>
      </LocaleContext.Provider>
    );
  }
}

export default App;
