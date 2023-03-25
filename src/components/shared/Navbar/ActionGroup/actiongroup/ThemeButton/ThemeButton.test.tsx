import { render, screen } from '@testing-library/react';
import ThemeButton from './ThemeButton';

it('should find the component associated with the text', () => {
  render(<ThemeButton className="" size={2} mode="" />);
  expect(screen.getByText(/search/i)).toBeDefined();
});
