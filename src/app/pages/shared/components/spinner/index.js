import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import './styles.scss';

export default () => (
  <div className="spinner">
    <CircularProgress color="primary" />
  </div>
);
