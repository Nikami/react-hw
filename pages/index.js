import React from 'react';
import { connect } from 'react-redux';
import PageWrapper from '../next/page';

const test = () => (<div>TEST</div>);

export default PageWrapper(connect(state => state)(test));
