import { render, screen } from '@testing-library/react';
import { List } from './List';
import { shallow } from 'enzyme';
it('should have adding and deleting enabled', () => {
  render(<List />);

  expect(screen.getByText('+')).toBeInTheDocument();
  expect(screen.getByText('-')).toBeInTheDocument();
});

it('adding new item should work', () => {
  const wrapper = shallow(<List />);

  // Check if the initial list is empty
  expect(wrapper.find('li').length).toEqual(0);

  // Simulate user input
  const newItem = 'Apples';
  wrapper.setState({ newItem });

  // Simulate button click
  wrapper.find('button').simulate('click');

  // Check if the item was added to the list
  expect(wrapper.find('li').length).toEqual(1);
  expect(wrapper.find('li').text()).toEqual(newItem);
});
