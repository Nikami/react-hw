import React from 'react';
import { connect } from 'react-redux';
import Film from '../src/app/film';

const FilmPage = () => <Film />;
FilmPage.getInitialProps = () => {};

export default connect(null)(FilmPage);
