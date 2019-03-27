import React from 'react';
import Button from '@material-ui/core/Button';
import FilterContainer from '../../shared/components/filter-container';

import './styles.scss';

export default ({ moviesCount }) => (
  <FilterContainer contentClasses="search-filter">

    <div className="search-filter__text font-bold">
      {moviesCount} movies found
    </div>

    <div className="search-filter__toolbar">

      <div className="search-filter__text text-right font-bold">
        Sort by
      </div>

      <Button
        color="secondary"
        size="small"
      >
        release date
      </Button>

      <Button
        color="primary"
        size="small"
      >
        rating
      </Button>

    </div>

  </FilterContainer>
);
