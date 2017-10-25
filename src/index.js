import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Import Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import Components
import CreateCardForm from './containers/CreateCardForm';

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route path ="/" component={CreateCardForm} />
      </Switch>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
