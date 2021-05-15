import React from 'react';
import { render } from '@testing-library/react';
import IssueListItem from './IssueListItem';

test('should render single issue with specific data', () => {
  const { getByText } = render(<IssueListItem
    title="Issue Title"
    description="Lorem ipsum dolor sit amet."
    status="DONE"
  />);

  expect(getByText('Issue Title')).toBeTruthy();
  expect(getByText(/Lorem ipsum/i)).toBeTruthy();
});
