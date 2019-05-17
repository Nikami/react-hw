import React from 'react';
import DetailsBar from '../../app/movie-details/details-bar';

import './styles.scss';

export default () => (
  <section className="movies">
    <DetailsBar movie={{}} />
    <div className="not-found">
      <div className="not-found__404">404</div>
      <div className="not-found__title">Not Found</div>
    </div>
  </section>
);
