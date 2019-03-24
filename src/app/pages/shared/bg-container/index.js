import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import './styles.scss';

const styles = theme => ({
  container: {
    padding: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    width: 'auto',
    [theme.breakpoints.up(750 + theme.spacing.unit * 2 * 2)]: {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: 750,
    },
  },
});

const BgContainer = ({ classes, children }) => (
  <section>

    <div className="header">
      <div className="header__mask">
        <div className={classes.container}>
          <p className="netflix-title">
            netflixroulette
          </p>
          {children}
        </div>
      </div>
    </div>

  </section>
);

export default withStyles(styles)(BgContainer);
