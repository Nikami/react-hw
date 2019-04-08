import React from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';

import configureStore from './core/store/configure-store';
import { MUI_THEME } from './core/theme';

import Routes from './core/routes';
import Footer from './footer';
import './styles.scss';

const store = configureStore();

export default () => (
  <main className="app">
    <Provider store={store}>
      <MuiThemeProvider theme={MUI_THEME}>
        <Routes />
        <Footer />
      </MuiThemeProvider>
    </Provider>
  </main>
);
