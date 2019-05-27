import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import JssProvider from 'react-jss/lib/JssProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core';
import withReduxStore from '../src/redux/with-redux-store';
import getPageContext from '../src/core/theme';
import ErrorBoundary from '../src/core/error-boundary';
import Footer from '../src/core/footer';

import '../src/assets/styles/styles.scss';

class MyApp extends App {
  constructor() {
    super();
    this.pageContext = getPageContext();
    this.css = this.pageContext.sheetsRegistry.toString();
  }

  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {},
    };
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Container>
        <ErrorBoundary>

          <Head>
            <title>Netflix Roulette</title>
          </Head>

          <CssBaseline />

          <main className="app">
            <JssProvider
              registry={this.pageContext.sheetsRegistry}
              generateClassName={this.pageContext.generateClassName}
            >

              <Provider store={reduxStore}>

                <MuiThemeProvider
                  theme={this.pageContext.theme}
                  sheetsManager={this.pageContext.sheetsManager}
                >
                  <Component pageContext={this.pageContext} {...pageProps} />
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
