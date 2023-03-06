import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('should find the component associated with the text', () => {
  render(<App />);
  expect(screen.getByText(/search/i)).toBeDefined();
});
