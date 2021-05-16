import React from 'react';
import { render } from '@testing-library/react';
import IssueListItem from './IssueListItem';

test('should render single issue with specific data', () => {
  const { getByText } = render(<IssueListItem
    title="Issue Title"
    status={1}
    id={1}
  />);

  expect(getByText('Issue Title')).toBeTruthy();
  expect(getByText(/Pending/i)).toBeTruthy();
});
