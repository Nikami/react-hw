// @flow
import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { containerMUI } from '../../mui-styles';

import './styles.scss';

const FilterContainer = ({ classes, children, contentClasses = '' }) => (
  <div className="filter-container">
    <div className={`${classes.container} ${contentClasses}`}>
      {children}
    </div>
  </div>
);

export default withStyles(containerMUI)(FilterContainer);
