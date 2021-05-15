import React from 'react';
import { render } from '@testing-library/react';
import IssueList from './index';

test('should render issue list with valid issues', () => {
  const issues = [{
    id: 1,
    title: 'This is Issue Title.',
    description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
    status: 'PENDING',
  }];

  const { getByText } = render(<IssueList issues={issues} />);

  expect(getByText('This is Issue Title.')).toBeTruthy();
  expect(getByText(/Lorem ipsum/i)).toBeTruthy();
});

test('should list be clickable and calls passed methods', () => {
  const issues = [{
    id: 1,
    title: 'This is Issue Title.',
    description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
    status: 'PENDING',
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
