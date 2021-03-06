// @flow
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import { doMoviesFilter } from '../../../redux/actions/movies';
import FilterContainer from '../../shared/components/filter-container';
import type { AppState } from '../../../redux/root-reducer';

import './styles.scss';

const FILTER_TYPE = {
  rating: 'vote_count',
  relDate: 'release_date',
};
const BTN_PRIMARY_COLOR = 'primary';
const BTN_SECONDARY_COLOR = 'secondary';

export const SearchFilter = ({ moviesCount, filterBy, ...props }: AppState) => {
  const [ratingColor, setRatingColor] = useState(
    FILTER_TYPE.rating === filterBy ? BTN_PRIMARY_COLOR : BTN_SECONDARY_COLOR,
  );
  const [relDateColor, setRelDateColor] = useState(
    FILTER_TYPE.relDate === filterBy ? BTN_PRIMARY_COLOR : BTN_SECONDARY_COLOR,
  );

  const filterByRating = () => {
    setRelDateColor(BTN_SECONDARY_COLOR);
    setRatingColor(BTN_PRIMARY_COLOR);
    props.doMoviesFilter(FILTER_TYPE.rating);
  };
  const filterByRelDate = () => {
    setRelDateColor(BTN_PRIMARY_COLOR);
    setRatingColor(BTN_SECONDARY_COLOR);
    props.doMoviesFilter(FILTER_TYPE.relDate);
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

const mapStateToProps = ({ filters }: AppState) => ({
  filterBy: filters.filterBy,
});

export default connect(mapStateToProps, { doMoviesFilter })(SearchFilter);
