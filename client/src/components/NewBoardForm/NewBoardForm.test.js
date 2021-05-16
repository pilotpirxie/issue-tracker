import React from 'react';
import { render } from '@testing-library/react';
import NewBoardForm from './index';

test('should render create button', () => {
  const { getByText } = render(<NewBoardForm />);

  expect(getByText(/create new board/i)).toBeTruthy();
});

test('should render headings', () => {
  const { getByText } = render(<NewBoardForm />);

  expect(getByText(/issue tracker/i)).toBeTruthy();
  expect(getByText(/create board in a few/i)).toBeTruthy();
});

test('should render board key input', () => {
  const { getByPlaceholderText } = render(<NewBoardForm />);

  expect(getByPlaceholderText(/e\.g\./i)).toBeTruthy();
});
