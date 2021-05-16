import React from 'react';
import { render } from '@testing-library/react';
import IssueList from './index';

test('should render issue list with valid issues', () => {
  const issues = [{
    id: 1,
    title: 'This is Issue Title.',
    status: 0,
  }];

  const { getByText } = render(<IssueList issues={issues} />);

  expect(getByText('This is Issue Title.')).toBeTruthy();
  expect(getByText(/To-Do/i)).toBeTruthy();
});

test('should render info about empty list', () => {
  const issues = [];

  const { getByText } = render(<IssueList issues={issues} />);

  expect(getByText(/Board is empty/i)).toBeTruthy();
});

test('should list be clickable and calls passed methods', () => {
  const issues = [{
    id: 1,
    title: 'This is Issue Title.',
    status: 0,
  }];

  let clickedIssueId = 0;

  const { getByText } = render(<IssueList
    issues={issues}
    onShowIssueDetails={(id) => {
      clickedIssueId = id;
    }}
  />);

  getByText('This is Issue Title.').click();
  expect(clickedIssueId).toBe(1);
});

test('should render empty issue list', () => {
  const { container } = render(<IssueList issues={[]} />);

  expect(container.querySelectorAll('.list-group-item').length).toBe(0);
});
