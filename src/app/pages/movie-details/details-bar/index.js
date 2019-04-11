import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'underscore';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { ROUTES } from '../../../core/config';
import { joinArrToStrByComma, sliceDateStrToYear } from '../../shared/utils';
import BgContainer from '../../shared/components/bg-container';
import Roulette from '../../shared/components/roulette';

import './styles.scss';

export default ({ movie }) => (
  <BgContainer>

    <div className="details-header">
      <Roulette />

      <Link to={ROUTES.movies} className="details-header__link">
        <Button
          color="primary"
          size="small"
          variant="contained"
        >
          Search
        </Button>
      </Link>
    </div>

    {!_.isEmpty(movie) && (
      <div className="details-bar">

        <img
          src={movie.poster_path}
          alt={movie.title}
          className="details-bar__poster"
        />

        <div className="details-bar__info">

          <div className="details-bar__rate">

            <Typography
              component="h3"
              variant="h6"
              className="details-bar__title"
            >
              {movie.title}
            </Typography>

            <div className="details-bar__rating">
              {movie.vote_count}
            </div>

          </div>

          <Typography
            component="h6"
            variant="subtitle2"
            className="details-bar__genres"
          >
            {joinArrToStrByComma(movie.genres)}
          </Typography>

          <Typography
            component="h6"
            variant="subtitle2"
            gutterBottom
            className="font-bold"
          >
            {sliceDateStrToYear(movie.release_date)}
          </Typography>

          <Typography
            component="p"
            variant="subtitle1"
            gutterBottom
            className="details-bar__overview"
          >
            {movie.overview}
          </Typography>

        </div>

      </div>
    )}

  </BgContainer>
);
