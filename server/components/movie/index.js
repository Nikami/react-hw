import React from 'react';
import Link from 'next/link';

import { ROUTES } from '../../../src/app/core/config';
import { joinArrToStrByComma, sliceDateStrToYear } from '../../../src/app/pages/shared/utils';

import '../../../src/app/pages/shared/components/movie/styles.scss';

export default ({
  id, poster_path, title, release_date, genres,
}) => (
  <div className="movie">
    <Link key={id} href={`${ROUTES.film}/${id}`} className="link-reset">
      <img
        src={poster_path}
        alt={title}
        className="movie__poster"
      />
    </Link>

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
