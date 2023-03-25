import { render, screen } from '@testing-library/react';
import GithubButton from './GithubButton';

it('should find the component associated with the text', () => {
  render(<GithubButton className="" size={2} />);
  expect(screen.getByText(/search/i)).toBeDefined();
});
