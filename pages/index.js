import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../server/components/search-bar';

class Index extends Component {
  static getInitialProps() {
    return {};
  }

  render() {
    return (
      <section className="movies">
        <SearchBar />
      </section>
    );
  }
}

export default connect(
  null,
)(Index);
