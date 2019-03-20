import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import ErrorBoundary from './app/error-boundary/error-boundary';
import App from './app/app';

import './index.scss';

render(
  <ErrorBoundary>
    <CssBaseline />
    <Router>
      <App />
    </Router>
  </ErrorBoundary>,
  document.getElementById('root'),
);
