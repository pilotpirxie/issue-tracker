import React from 'react';
import { render } from '@testing-library/react';
import IssueDetailsModal from './index';

test('should render correct modal', () => {
  const { getByText } = render(
    <IssueDetailsModal
      isVisible
      issue={{
        status: 0,
        title: 'Modal title',
        description: 'Lorem ipsum...',
      }}
    >
      <p>Lorem ipsum</p>
    </IssueDetailsModal>,
  );

  expect(getByText(/Lorem ipsum/i)).toBeTruthy();
  expect(getByText(/Modal title/i)).toBeTruthy();
  expect(getByText(/Pending/i)).toBeTruthy();
});

test('should render modal with done button', () => {
  const { getByText } = render(
    <IssueDetailsModal
      isVisible
      issue={{
        status: 1,
        title: 'Modal title',
        description: 'Lorem ipsum...',
      }}
    >
      <p>Lorem ipsum</p>
    </IssueDetailsModal>,
  );

  expect(getByText(/Done/i)).toBeTruthy();
});
