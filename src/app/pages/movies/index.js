import React from 'react';

import SearchBar from './search-bar';
import SearchList from './search-list';

export default () => (
  <section className="movies">
    <SearchBar />
    <SearchList />
  </section>
);
