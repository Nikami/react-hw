import React from 'react';

import './app.scss';

const App = ({ title = 'world!' }) => (
  <h1 style={{ color: 'teal' }}>
    Hello, {title}
  </h1>
);

export default App;
