import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';

import { fetchMovie } from './actions';
import Spinner from '../shared/components/spinner';
import DetailsBar from './details-bar';
import DetailsList from './details-list';

export class MovieDetails extends Component {
  componentDidMount() {
    const { match } = this.props;
    this.props.fetchMovie(match.params.id);
  }

  render() {
    const { isLoading, movie } = this.props;

    return isLoading ? <Spinner /> : (
      <section className="movies">
        <DetailsBar movie={movie} />
        <DetailsList />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.movie,
  isLoading: state.movieLoading,
});

const mapDispatchToProps = { fetchMovie };

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MovieDetails),
);
