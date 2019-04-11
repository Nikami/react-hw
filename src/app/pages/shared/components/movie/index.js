import React from 'react';
import { joinArrToStrByComma, sliceDateStrToYear } from '../../utils';

import './styles.scss';

export default ({
  poster_path, title, release_date, genres,
}) => (
  <div className="movie">
    <img
      src={poster_path}
      alt={title}
      className="movie__poster"
    />

    <div className="movie__info">

      <h4 className="movie__title">
        {title}
      </h4>

      <div>
        <div className="movie__year">
          {sliceDateStrToYear(release_date)}
        </div>
      </div>

    </div>

    <div className="movie__genres">
      {joinArrToStrByComma(genres)}
    </div>
  </div>
);
