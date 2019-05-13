import React from 'react';
import { shallow } from 'enzyme/build';
import App from '../index';
import Routes from '../core/routes';
import Footer from '../core/footer';

describe('DetailsList', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has Routes', () => {
    expect(wrapper.find(Routes).length).toBe(1);
  });

  it('has Footer', () => {
    expect(wrapper.find(Footer).length).toBe(1);
  });
});
