// @flow
import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { containerMUI } from '../../mui-styles';

import './styles.scss';

const BgContainer = ({ classes, children }) => (
  <React.Fragment>
    <div className="header">
      <div className="header__mask">

        <div className={`${classes.container} header__content`}>
          {children}
        </div>

      </div>
    </div>
  </React.Fragment>
);

export default withStyles(containerMUI)(BgContainer);
