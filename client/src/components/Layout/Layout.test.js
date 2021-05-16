import React from 'react';
import { render } from '@testing-library/react';
import Layout from './index';

test('should render single children', () => {
  const { getByText } = render(<Layout><p>Lorem ipsum</p></Layout>);

  expect(getByText(/Lorem ipsum/i)).toBeTruthy();
});

test('should render multiple children', () => {
  const { getByText } = render(<Layout>
    <p>Lorem ipsum</p>
    <p>dolor sit amet</p>
  </Layout>);

  expect(getByText(/Lorem ipsum/i)).toBeTruthy();
  expect(getByText(/dolor sit amet/i)).toBeTruthy();
});
