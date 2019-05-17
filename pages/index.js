import React, { Component } from 'react';
import { connect } from 'react-redux';
import Movies from '../src/app/movies';

class Index extends Component {
  static getInitialProps() {
    return {};
  }

  render() {
    return <Movies />;
  }
}

export default connect(
  null,
)(Index);
