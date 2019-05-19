import React from 'react';

import './styles.scss';

export default ({ code, error }) => (
  <div className="error">
    <div className="error__code">{ code }</div>
    <div className="error__msg">{ error }</div>
  </div>
);
