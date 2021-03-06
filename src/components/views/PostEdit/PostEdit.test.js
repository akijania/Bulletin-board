import React from 'react';
import { shallow } from 'enzyme';
import { PostEditComponent } from './PostEdit';

describe('Component PostEdit', () => {
  it('should render without crashing', () => {
    const posts = [
      {
        id: '1',
        title: 'Lorem',
        image: 'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      {
        id: '2',
        title: 'New car',
      },
    ];
    const user = {
      active: true,
    };
    const component = shallow(<PostEditComponent posts={posts}  user={user}/>);
    expect(component).toBeTruthy();
  });
});
