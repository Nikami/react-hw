import React from 'react';
import { shallow } from 'enzyme';
import DetailsBar from '../index';

describe('DetailsBar', () => {
  it('matches snapshot', () => {
    const defaultProps = {
      title: 'Test',
      vote_count: 1,
      genres: ['Genre1', 'Genre2'],
      release_date: '2020-05-01',
      poster_path: 'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
      overview: 'Test',
    };
    const wrapper = shallow(<DetailsBar movie={defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
