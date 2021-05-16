import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Board from './index';

test('should contains navbar somewhere on the screen', () => {
  render(
    <MemoryRouter initialEntries={['/boards/1/boardkey']}>
      <Board />
    </MemoryRouter>,
  );
  const linkElement = screen.getByText('Issue Tracker');
  expect(linkElement).toBeInTheDocument();
});

test('should contains create btn and modal', () => {
  render(
    <MemoryRouter initialEntries={['/boards/1/boardkey']}>
      <Board />
    </MemoryRouter>,
  );

  expect(screen.getByTestId(/create-issue-btn/i)).toBeInTheDocument();
  expect(screen.getAllByText(/Create new issue/i).length).toBeGreaterThan(0);
});
