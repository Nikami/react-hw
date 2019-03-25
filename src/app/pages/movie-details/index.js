import React from 'react';

import DetailsBar from './details-bar';
import DetailsList from './details-list';
import useFetch from '../../hooks/use-fetch';

// TODO: this is just for markup before redux
const url = 'https://reactjs-cdp.herokuapp.com/movies/348350';

export default () => {
  // TODO: this is just for markup before redux
  const [data, isLoading] = useFetch(url);

  // TODO: add loader
  return isLoading ? 'Loading...' : (
    <section className="movies">
      <DetailsBar movie={data} />
      <DetailsList />
    </section>
  );
};
