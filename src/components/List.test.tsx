import { render, screen } from '@testing-library/react';
import { List } from './List';

it('should have adding option enabled', () => {
  render(<List />);

  expect(screen.getByText('+')).toBeInTheDocument();
});
