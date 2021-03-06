import React from 'react';
import { shallow } from 'enzyme';
import { PostComponent } from './Post';

describe('Component Post', () => {
  it('should render without crashing', () => {
    const post = [
      {
        id: '1',
        title: 'Lorem',
        image:
          'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      {
        id: '2',
        title: 'New car',
      },
    ];
    const user = {
      active: true,
    };
    const fetchPost = function (){};
    const component = shallow(<PostComponent post={post} user={user} fetchPost={fetchPost}/>);
    expect(component).toBeTruthy();
  });
});
