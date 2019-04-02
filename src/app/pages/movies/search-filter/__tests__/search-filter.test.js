import React from 'react';
import { shallow } from 'enzyme';
import SearchFilter from '../index';

describe('SearchFilter', () => {
  it('matches snapshot', () => {
    const defaultProps = 10;
    const wrapper = shallow(<SearchFilter moviesCount={defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
