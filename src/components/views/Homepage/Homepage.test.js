import React from 'react';
import { shallow } from 'enzyme';
import { HomepageComponent } from './Homepage';

describe('Component Homepage', () => {
  it('should render without crashing', () => {
    const posts = [
      {
        _id: '1',
        title: 'Lorem',
        photo: 'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      {
        _id: '2',
        title: 'New car',
      },
    ];
    const user = {
      active: true,
    };
    const fetchPublishedPosts = function (){};
    const component = shallow(<HomepageComponent posts={posts} user={user} fetchPublishedPosts={fetchPublishedPosts} />);
    expect(component).toBeTruthy();
  });
});
