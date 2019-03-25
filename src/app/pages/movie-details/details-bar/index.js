import React from 'react';
import Typography from '@material-ui/core/Typography';

import BgContainer from '../../shared/components/bg-container';
import { joinArrToStrByComma, sliceDateStrToYear } from '../../shared/pipes';

import './styles.scss';

export default ({ movie }) => {
  const {
    title,
    vote_count,
    genres,
    release_date,
    poster_path,
    overview,
  } = movie;

  return (
    <BgContainer>
      <div className="details-bar">

        <img
          src={poster_path}
          alt={title}
          className="details-bar__poster"
        />

        <div className="details-bar__info">

          <div className="details-bar__rate">

            <Typography
              component="h3"
              variant="h5"
              className="details-bar__title"
            >
              {title}
            </Typography>

            <div className="details-bar__rating">
              {vote_count}
            </div>

          </div>

          <Typography
            component="h6"
            variant="subtitle1"
          >
            {joinArrToStrByComma(genres)}
          </Typography>

          <Typography
            component="h6"
            variant="subtitle1"
            gutterBottom
            className="font-bold"
          >
            {sliceDateStrToYear(release_date)}
          </Typography>

          <Typography
            component="p"
            variant="h6"
            gutterBottom
            className="details-bar__overview"
          >
            {overview}
          </Typography>

        </div>

      </div>
    </BgContainer>
  );
};
