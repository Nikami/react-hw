import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../index';

describe('SearchBar', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
