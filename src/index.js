import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Index from './app/error-boundary';
import App from './app/app';

import './styles.scss';

render(
  <Index>
    <CssBaseline />
    <Router>
      <App />
    </Router>
  </Index>,
  document.getElementById('root'),
);
