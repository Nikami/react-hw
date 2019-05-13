import React from 'react';
import { connect } from 'react-redux';

class Test extends React.Component {
  // static getInitialProps({ store }) {
  //   return { store };
  // }

  render() {
    return (<div>{ this.props.store }</div>);
  }
}

export default connect(state => state)(Test);
