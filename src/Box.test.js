import React from 'react';
import { render } from '@testing-library/react';
import BoxApp from './BoxApp';

test('Testing Box App', () => {
  const { getByText } = render(<BoxApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
