import { createMuiTheme } from '@material-ui/core';

export const MUI_THEME = createMuiTheme({
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
