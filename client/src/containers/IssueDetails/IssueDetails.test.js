import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';
import IssueDetails from './index';

test('should contain remove button', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/boards/1/boardkey']}>
      <IssueDetails
        onFetchIssues={() => {}}
        onClose={() => {}}
        onError={() => {}}
        selectedIssue={1}
      />
    </MemoryRouter>,
  );

  expect(getByText(/remove/i)).toBeTruthy();
});

test('should close button be clickable', () => {
  let closed = false;

  const modal = render(
    <MemoryRouter initialEntries={['/boards/1/boardkey']}>
      <IssueDetails
        onFetchIssues={() => {}}
        onClose={() => {
          closed = true;
        }}
        onError={() => {}}
        selectedIssue={1}
      />
    </MemoryRouter>,
  );

  modal.getByTestId(/close/i).click();

  expect(closed).toBeTruthy();
});
