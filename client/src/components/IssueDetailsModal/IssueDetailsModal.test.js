import React from 'react';
import { render } from '@testing-library/react';
import IssueDetailsModal from './index';

test('should render correct modal', () => {
  const { getByText } = render(
    <IssueDetailsModal
      isVisible
      title="Modal title"
      primaryButtonText="Submit"
    >
      <p>Lorem ipsum</p>
    </IssueDetailsModal>,
  );

  expect(getByText(/Lorem ipsum/i)).toBeTruthy();
  expect(getByText(/Modal title/i)).toBeTruthy();
  expect(getByText(/Submit/i)).toBeTruthy();
});

test('should render modal with pending button', () => {
  const { getByText } = render(
    <IssueDetailsModal
      isVisible
    >
      <p>Lorem ipsum</p>
    </IssueDetailsModal>,
  );

  expect(getByText(/Cancel/i)).toBeTruthy();
});
