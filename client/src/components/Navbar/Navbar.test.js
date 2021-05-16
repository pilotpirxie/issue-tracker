import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './index';

test('should render logo text', () => {
  const { getByText } = render(<Navbar onClickCreate={() => {}} />);

  expect(getByText('Issue Tracker')).toBeTruthy();
});

test('should create button be clickable', () => {
  let clicked = false;

  const { getByText } = render(<Navbar onClickCreate={() => {
    clicked = true;
  }}
  />);

  getByText('Create').click();

  expect(clicked).toBeTruthy();
});
