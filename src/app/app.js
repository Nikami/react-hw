import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';

import { MUI_THEME } from './mui-theme';
import Routes from './routes';
import Footer from './footer';

import './styles.scss';

const App = () => (
  <main className="app">
    <MuiThemeProvider theme={MUI_THEME}>
      <Routes />
      <Footer />
    </MuiThemeProvider>
  </main>
);

export default App;
