import React from 'react';
import { connect } from 'react-redux';
import Error from '../src/core/error';

const ErrorPage = ({ code }) => <Error code={code} error="Error occurred" />;
ErrorPage.getInitialProps = ({ res, err }) => {
  // eslint-disable-next-line no-nested-ternary
  const code = res ? res.statusCode : err ? err.statusCode : null;
  return { code };
};

export default connect(null)(ErrorPage);
