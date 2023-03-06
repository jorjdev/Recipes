import { render, screen } from '@testing-library/react';
import React from 'react';
import Navbar from './Navbar';

it('Should render the component', () => {
  const mockClassName = 'navbar';
  render(<Navbar className={mockClassName} />);
  expect(screen.getByText(/search/i)).toBeDefined();
});
