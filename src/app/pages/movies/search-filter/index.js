import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import connect from 'react-redux/es/connect/connect';

import { moviesFilterAction } from '../actions';
import FilterContainer from '../../shared/components/filter-container';

import './styles.scss';

const BTN_PRIMARY_COLOR = 'primary';
const BTN_SECONDARY_COLOR = 'secondary';

export const SearchFilter = ({ moviesCount, dispatch }) => {
  const [ratingColor, setRatingColor] = useState(BTN_PRIMARY_COLOR);
  const [relDateColor, setRelDateColor] = useState(BTN_SECONDARY_COLOR);

  const filterByRating = () => {
    setRelDateColor(BTN_SECONDARY_COLOR);
    setRatingColor(BTN_PRIMARY_COLOR);
    dispatch(moviesFilterAction('vote_count'));
  };
  const filterByRelDate = () => {
    setRelDateColor(BTN_PRIMARY_COLOR);
    setRatingColor(BTN_SECONDARY_COLOR);
    dispatch(moviesFilterAction('release_date'));
  };

  return (
    <FilterContainer contentClasses="search-filter">
      <div className="search-filter__text font-bold">
        {moviesCount} movies found
      </div>

      <div className="search-filter__toolbar">
        <div className="search-filter__text text-right font-bold">
          Sort by
        </div>

        <Button color={relDateColor} size="small" onClick={filterByRelDate}>
          release date
        </Button>

        <Button color={ratingColor} size="small" onClick={filterByRating}>
          rating
        </Button>
      </div>
    </FilterContainer>
  );
};

export default connect()(SearchFilter);
