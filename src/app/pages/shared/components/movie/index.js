// @flow
import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../../../core/config';
import { joinArrToStrByComma, sliceDateStrToYear } from '../../utils';

import './styles.scss';

type MovieProps = {|
  id: number,
  poster_path: string,
  title: string,
  release_date: string,
  genres: string[]
|}

export default ({
  id, poster_path, title, release_date, genres,
}: MovieProps) => (
  <div className="movie">
    <Link key={id} to={`${ROUTES.film}/${id}`} className="link-reset">
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

export type { MovieProps };
