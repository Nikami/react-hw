// @flow
import React from 'react';
import FilterContainer from '../../shared/components/filter-container';

import './styles.scss';

export default () => (
  <FilterContainer>
    <div className="details-filter font-bold">
      Films by same <span className="details-filter__genre">genre</span>
    </div>
  </FilterContainer>
);
