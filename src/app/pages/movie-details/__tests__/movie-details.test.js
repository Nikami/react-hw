import React from 'react';
import { mount } from 'enzyme';
import MovieDetails from '../index';

describe('MovieDetails', () => {
  const url = 'https://reactjs-cdp.herokuapp.com/movies/348350';

  beforeEach(() => {
    const defaultResult = { data: [] };
    global.fetch = jest.fn().mockImplementation(
      () => Promise.resolve(defaultResult),
    );
  });

  it('has call to movies api', () => {
    const wrapper = mount(<MovieDetails />);

    jest.spyOn(global, 'fetch');

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(url);

    wrapper.unmount();
  });
});
