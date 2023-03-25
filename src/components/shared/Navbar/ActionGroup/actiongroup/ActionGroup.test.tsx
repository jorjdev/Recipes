import { render, screen } from '@testing-library/react';
import ActionGroup from './ActionGroup';

it('should find the component associated with the text', () => {
  render(<ActionGroup className="" />);
  expect(screen.getByText(/search/i)).toBeDefined();
});
