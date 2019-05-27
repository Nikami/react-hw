import React from 'react';
import { connect } from 'react-redux';
import Error from '../src/core/error';

const ErrorPage = () => <Error code="404" error="Not Found" />;
ErrorPage.getInitialProps = () => {};

export default connect(null)(ErrorPage);
