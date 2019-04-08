import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import ErrorBoundary from './app/core/error-boundary';
import App from './app';

import './styles.scss';

render(
  <ErrorBoundary>
    <CssBaseline />
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  </ErrorBoundary>,
  document.getElementById('root'),
);
