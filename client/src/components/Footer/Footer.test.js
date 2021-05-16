import React from 'react';
import { render } from '@testing-library/react';
import Footer from './index';

test('should render footer with link', () => {
  const { getByText } = render(<Footer />);

  expect(getByText(/terms of service/i)).toBeTruthy();
  expect(getByText(/privacy policy/i)).toBeTruthy();
  expect(getByText(/about us/i)).toBeTruthy();
  expect(getByText(/contact/i)).toBeTruthy();
});
