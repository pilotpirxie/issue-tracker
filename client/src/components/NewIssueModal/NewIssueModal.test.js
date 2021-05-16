import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import NewIssueModal from './index';

test('should render modal with title and description label', () => {
  const { getByText } = render(<NewIssueModal
    isVisible
    onCreate={() => {}}
  />);

  expect(getByText(/title/i)).toBeTruthy();
  expect(getByText(/description/i)).toBeTruthy();
});

test('should change form data', () => {
  const modal = render(<NewIssueModal
    isVisible
    onCreate={() => {}}
  />);

  const titleInput = modal.getByLabelText(/title/i);
  const descriptionInput = modal.getByLabelText(/description/i);

  fireEvent.change(titleInput, { target: { value: 'Sample Title' } });
  fireEvent.change(descriptionInput, { target: { value: 'Sample Description' } });

  expect(titleInput.value).toBe('Sample Title');
  expect(descriptionInput.value).toBe('Sample Description');
});

test('should return form data', () => {
  let formData = null;

  const modal = render(<NewIssueModal
    isVisible
    onCreate={(data) => {
      formData = data;
    }}
  />);

  const titleInput = modal.getByLabelText(/title/i);
  const descriptionInput = modal.getByLabelText(/description/i);

  fireEvent.change(titleInput, { target: { value: 'Sample Title' } });
  fireEvent.change(descriptionInput, { target: { value: 'Sample Description' } });

  modal.getByText('Create').click();

  expect(formData.title).toBe('Sample Title');
  expect(formData.description).toBe('Sample Description');
});
