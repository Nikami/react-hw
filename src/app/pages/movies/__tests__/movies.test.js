import React from 'react';
import { shallow } from 'enzyme';

import Movies from '../index';
import SearchBar from '../search-bar';
import SearchList from '../search-list';

describe('DetailsList', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Movies />);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has SearchBar', () => {
    expect(wrapper.find(SearchBar).length).toBe(1);
  });

  it('has Footer', () => {
    expect(wrapper.find(SearchList).length).toBe(1);
  });
});
