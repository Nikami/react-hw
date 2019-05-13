import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core';
import configureStore from '../../src/app/core/store/configure-store';
import ErrorBoundary from '../../src/app/core/error-boundary';
import { MUI_THEME } from '../../src/app/core/theme';
import Footer from '../../src/app/footer';

import './styles.scss';

const store = configureStore();

const PageWrapper = Page => (
  <ErrorBoundary>
    <Head>
      <title>Netflix Roulette</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Head>

    <CssBaseline />

    <main className="app">
      <Provider store={store}>
        <MuiThemeProvider theme={MUI_THEME}>
          <Page />
          <Footer />
        </MuiThemeProvider>
      </Provider>
    </main>
  </ErrorBoundary>
);

export default PageWrapper;
