import React from 'react';
import { connect } from 'react-redux';
import Movies from '../src/app/movies';

const IndexPage = () => <Movies />;
IndexPage.getInitialProps = () => {};

export default connect(null)(IndexPage);
