import React from 'react';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';

import { containerMUI } from '../../shared/mui-styles';
import List from '../../shared/list';
import useFetch from '../../../hooks/use-fetch';

import './styles.scss';

const url = 'https://reactjs-cdp.herokuapp.com/movies';

const SearchList = ({ classes }) => {
  // TODO: this is just for markup before redux
  const [data, isLoading] = useFetch(url);

  // TODO: add loader
  return isLoading ? 'Loading...' : (
    <React.Fragment>

      <div className="search-filter">
        <div className={`${classes.container} search-filter__content`}>

          <div className="search-filter__text font-bold">
            {data.length} movies found
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

        </div>
      </div>

      <List movies={data} />

    </React.Fragment>
  );
};
export default withStyles(containerMUI)(SearchList);
