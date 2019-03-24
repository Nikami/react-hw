import React from 'react';

import BgContainer from '../shared/bg-container';
import SearchBar from './search';
import SearchList from './search-list';

import './styles.scss';

export default () => (
  <section>

    <BgContainer>
      <SearchBar />
    </BgContainer>

    <SearchList />

  </section>
);
