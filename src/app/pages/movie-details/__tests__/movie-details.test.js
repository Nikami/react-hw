import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-testing-library';
import MovieDetails from '../index';
import Spinner from '../../shared/components/spinner';

jest.useFakeTimers();

describe('MovieDetails', () => {
  const url = 'https://reactjs-cdp.herokuapp.com/movies/348350';
  const defaultResult = { data: [] };
  const mockJsonPromise = Promise.resolve(defaultResult);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });

  let wrapper;

  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
  });

  afterEach(() => {
    global.fetch.mockClear();
    wrapper.unmount();
  });

  it('has call to movies api', () => {
    wrapper = mount(<MovieDetails />);

    jest.spyOn(global, 'fetch');

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(url);
  });

  it('renders Spinner while fetch movies', () => {
    wrapper = mount(<MovieDetails />);

    jest.spyOn(global, 'fetch');
    expect(wrapper.find(Spinner).length).toBe(1);
  });

  // TODO: Doesn't work. An update to _default inside a test was not wrapped in act(...).
  xit('renders movies content after fetch', (done) => {
    wrapper = mount(<MovieDetails />);

    jest.spyOn(global, 'fetch');

    act(() => {
      jest.runAllTimers();
    });

    process.nextTick(() => {
      expect(wrapper.find('section.movies').length).toBe(1);
      done();
    });
  });
});
