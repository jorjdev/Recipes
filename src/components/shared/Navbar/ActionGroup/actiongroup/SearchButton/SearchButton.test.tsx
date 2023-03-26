import { render, screen } from '@testing-library/react';
import SearchButton from './SearchButton';

it('should find the component associated with the text', () => {
  render(<SearchButton className="" theme="" size={2} />);
  expect(screen.getByText(/search/i)).toBeDefined();
});
