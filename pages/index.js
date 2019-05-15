import React from 'react';
import { connect } from 'react-redux';
import SearchBar from '../server/components/search-bar';

class Index extends React.Component {
  static getInitialProps({ reduxStore, req }) {
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
