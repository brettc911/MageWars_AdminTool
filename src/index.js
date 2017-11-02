import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Import Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import Components
import CreateCardForm from './containers/CreateCardForm';
import Dashboard from './containers/Dashboard';

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route path ="/create" component={CreateCardForm} />
        <Route path ="/" component={Dashboard} />
      </Switch>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
