import React from 'react';
import { shallow } from 'enzyme';
import { PostAddComponent } from './PostAdd';

describe('Component PostAdd', () => {
  const user = {
    active: true,
  };
  it('should render without crashing', () => {
    const component = shallow(<PostAddComponent  user={user} />);
    expect(component).toBeTruthy();
  });
});
