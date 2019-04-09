import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import connect from 'react-redux/es/connect/connect';

import { moviesFilterAction } from '../actions';
import FilterContainer from '../../shared/components/filter-container';

import './styles.scss';

const FILTER_TYPE = {
  rating: 'vote_count',
  relDate: 'release_date',
};
const BTN_PRIMARY_COLOR = 'primary';
const BTN_SECONDARY_COLOR = 'secondary';

export const SearchFilter = ({ moviesCount, dispatch, filter }) => {
  const [ratingColor, setRatingColor] = useState(
    FILTER_TYPE.rating === filter ? BTN_PRIMARY_COLOR : BTN_SECONDARY_COLOR,
  );
  const [relDateColor, setRelDateColor] = useState(
    FILTER_TYPE.relDate === filter ? BTN_PRIMARY_COLOR : BTN_SECONDARY_COLOR,
  );

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

        <Button color={relDateColor} onClick={filterByRelDate} size="small">
          release date
        </Button>

        <Button color={ratingColor} onClick={filterByRating} size="small">
          rating
        </Button>
      </div>
    </FilterContainer>
  );
};

const mapStateToProps = state => ({
  filter: state.filter,
});

export default connect(mapStateToProps)(SearchFilter);
