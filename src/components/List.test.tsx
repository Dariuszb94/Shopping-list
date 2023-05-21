import { render } from '@testing-library/react';
import { List } from './List';

it('CheckboxWithLabel changes the text after click', () => {
  const { queryByLabelText } = render(<List />);

  expect(queryByLabelText(/send/i)).toBeTruthy();
});
