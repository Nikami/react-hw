import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { SheetsRegistry } from 'jss';
import JssProvider from 'react-jss/lib/JssProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createGenerateClassName, MuiThemeProvider } from '@material-ui/core';
import withReduxStore from '../src/redux/with-redux-store';
import { MUI_THEME } from '../src/core/theme';
import ErrorBoundary from '../src/core/error-boundary';
import Footer from '../src/core/footer';

import '../src/assets/styles/styles.scss';

const sheetsRegistry = new SheetsRegistry();
const sheetsManager = new Map();
const generateClassName = createGenerateClassName();
const css = sheetsRegistry.toString();

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {},
    };
  }

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
            <style id="jss-server-side">${css}</style>
          </Head>

          <CssBaseline />

          <main className="app">
            <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
              <Provider store={reduxStore}>
                <MuiThemeProvider theme={MUI_THEME} sheetsManager={sheetsManager}>
                  <Component {...pageProps} />
                  <Footer />
                </MuiThemeProvider>
              </Provider>
            </JssProvider>
          </main>

        </ErrorBoundary>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
