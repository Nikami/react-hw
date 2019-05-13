import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import App from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core';
import configureStore from '../src/app/redux/configure-store';
import ErrorBoundary from '../src/app/core/error-boundary';
import { MUI_THEME } from '../src/app/core/theme';
import Footer from '../src/app/core/footer';

import './styles.scss';


export default withRedux(configureStore, { debug: true })(class PageWrapper extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        // Call page-level getInitialProps
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
      },
    };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
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
              <Component {...pageProps} />
              <Footer />
            </MuiThemeProvider>
          </Provider>
        </main>
      </ErrorBoundary>
    );
  }
});
