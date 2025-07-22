import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  it('renders the company name', () => {
    render(<Header />);
    expect(screen.getByText(/AC Paints/i)).toBeInTheDocument();
  });
});