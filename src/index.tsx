import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './App';
import { AppContainer } from './AppContainer';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppContainer>
        <App />
      </AppContainer>
    </Router>
  </React.StrictMode>,
  document.querySelector('#root'),
);
