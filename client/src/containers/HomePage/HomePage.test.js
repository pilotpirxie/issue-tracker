import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import HomePage from './index';

test('should change form data with board key', () => {
  const page = render(<HomePage />);

  const boardKeyInput = page.getByLabelText(/secret key/i);

  fireEvent.change(boardKeyInput, { target: { value: 'test-key' } });

  expect(boardKeyInput.value).toBe('test-key');
});
