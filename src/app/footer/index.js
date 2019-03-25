import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import { containerMUI } from '../pages/shared/mui-styles';

import './styles.scss';

const Footer = ({ classes }) => (
  <footer className="footer">
    <div className={`${classes.container} primary-color`}>
      netflixroulette
    </div>
  </footer>
);

export default withStyles(containerMUI)(Footer);
