import React from 'react';
import { shallow } from 'enzyme';
import DetailsFilter from '../index';

describe('DetailsFilter', () => {
  it('matches snapshot', () => {
    const defaultValue = 'test';
    const wrapper = shallow(<DetailsFilter genre={defaultValue} />);
    expect(wrapper).toMatchSnapshot();
  });
});
