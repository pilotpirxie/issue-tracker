import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { fireEvent, render } from '@testing-library/react';
import NewIssue from './index';

test('should display error', () => {
  const { getByTestId, getByText } = render(
    <MemoryRouter initialEntries={['/boards/1/boardkey']}>
      <NewIssue
        onError={() => {}}
        onClose={() => {}}
        onFetchIssues={() => {}}
        isVisible
      />
    </MemoryRouter>,
  );

  getByTestId(/create-btn/i).click();
  expect(getByText(/Title and description/i)).toBeTruthy();
});

test('should display error when only title is set', () => {
  const { getByTestId, getByText, getByPlaceholderText } = render(
    <MemoryRouter initialEntries={['/boards/1/boardkey']}>
      <NewIssue
        onError={() => {}}
        onClose={() => {}}
        onFetchIssues={() => {}}
        isVisible
      />
    </MemoryRouter>,
  );

  const input = getByPlaceholderText(/Issue title/i);
  fireEvent.change(input, { target: { value: 'issue title' } });
  expect(input.value).toBe('issue title');

  getByTestId(/create-btn/i).click();
  expect(getByText(/Title and description/i)).toBeTruthy();
});

test('should display error when only description is set', () => {
  const { getByTestId, getByText, getByPlaceholderText } = render(
    <MemoryRouter initialEntries={['/boards/1/boardkey']}>
      <NewIssue
        onError={() => {}}
        onClose={() => {}}
        onFetchIssues={() => {}}
        isVisible
      />
    </MemoryRouter>,
  );

  const input = getByPlaceholderText(/Issue description/i);
  fireEvent.change(input, { target: { value: 'issue description' } });
  expect(input.value).toBe('issue description');

  getByTestId(/create-btn/i).click();
  expect(getByText(/Title and description/i)).toBeTruthy();
});
