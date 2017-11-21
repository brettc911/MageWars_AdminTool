import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Import Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import Components
import CreateCardForm from './containers/CreateCardForm';
import Dashboard from './containers/Dashboard';
import CardManager from './containers/CardManager';
import DeckManager from './containers/DeckManager';

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Dashboard>
          <Route path ="/create" component={CreateCardForm} />
          <Route path ="/cardManager" component={CardManager} />
          <Route path ="/DeckManager" component={DeckManager} />
        </Dashboard>
      </Switch>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
