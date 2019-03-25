import React from 'react';
import FilterContainer from '../../shared/components/filter-container';

import './styles.scss';

export default ({ genre }) => (
  <FilterContainer>
    <div className="details-filter font-bold">
      Films by <span className="details-filter__genre">{genre}</span>
    </div>
  </FilterContainer>
);
