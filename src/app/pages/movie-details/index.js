import React from 'react';

import Spinner from '../shared/components/spinner';
import DetailsBar from './details-bar';
import DetailsList from './details-list';
import useFetch from '../../hooks/use-fetch';

const url = 'https://reactjs-cdp.herokuapp.com/movies/348350';

export default () => {
  // TODO: this is just for markup before redux
  const [data, isLoading] = useFetch(url);

  return isLoading ? <Spinner /> : (
    <section className="movies">
      <DetailsBar movie={data} />
      <DetailsList />
    </section>
  );
};
