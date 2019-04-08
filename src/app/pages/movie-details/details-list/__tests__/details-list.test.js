import React from 'react';
import { shallow } from 'enzyme';

import DetailsList from '../index';
import DetailsFilter from '../../details-filter';
import MovieList from '../../../shared/components/movie-list';

describe('DetailsList', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DetailsList />);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has DetailsFilter', () => {
    expect(wrapper.find(DetailsFilter).length).toBe(1);
  });

  it('has MovieList', () => {
    expect(wrapper.find(MovieList).length).toBe(1);
  });
});
