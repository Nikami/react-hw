import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core';
import withReduxStore from '../src/redux/with-redux-store';
import { MUI_THEME } from '../src/core/theme';
import ErrorBoundary from '../src/core/error-boundary';
import Footer from '../src/core/footer';

import '../src/assets/styles/styles.scss';

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <ErrorBoundary>
          <Head>
            <title>Netflix Roulette</title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          </Head>

          <CssBaseline />

          <main className="app">
            <Provider store={reduxStore}>
              <MuiThemeProvider theme={MUI_THEME}>
                <Component {...pageProps} />
              </MuiThemeProvider>
            </Provider>
            <Footer />
          </main>

        </ErrorBoundary>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
