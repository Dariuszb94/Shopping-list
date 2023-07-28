import { render, screen } from '@testing-library/react';
import { List } from './List';

it('should have adding and deletig enabled', () => {
  render(<List />);

  expect(screen.getByText('+')).toBeInTheDocument();
  expect(screen.getByText('-')).toBeInTheDocument();
});
