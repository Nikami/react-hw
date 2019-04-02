import React from 'react';
import { shallow } from 'enzyme';
import MovieDetails from '../index';

// TODO: Doesn't work!!!
xdescribe('MovieDetails', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      data: [],
    }));
  });

  it('has call to movies api', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<MovieDetails />);

    jest.spyOn(global, 'fetch');

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://reactjs-cdp.herokuapp.com/movies/348350');

    // process.nextTick(() => {
    //   global.fetch.mockClear();
    //   done();
    // });
  });
});
