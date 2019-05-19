import { SheetsRegistry } from 'jss';
import { createMuiTheme, createGenerateClassName } from '@material-ui/core';

const MUI_THEME = createMuiTheme({
  palette: {
    primary: {
      main: '#e50914',
    },
    secondary: {
      main: '#3c3c3c',
    },
    type: 'dark',
  },
  typography: {
    fontSize: 13,
    useNextVariants: true,
  },
});

function createPageContext() {
  return {
    theme: MUI_THEME,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
  };
}

let pageContext;

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!pageContext) {
    pageContext = createPageContext();
  }

  return pageContext;
}
