import React from 'react';
import { render } from '@testing-library/react';
import Alert from './index';

test('should render alert with specific text', () => {
  const { getByText } = render(<Alert
    text="Error abc"
    onClose={() => {}}
  />);

  expect(getByText('Error abc')).toBeTruthy();
});

test('should be possible to close alert', () => {
  let closed = false;

  const alert = render(<Alert
    text="Error abc"
    onClose={() => {
      closed = true;
    }}
  />);

  alert.getByTestId('close').click();

  expect(closed).toBeTruthy();
});
