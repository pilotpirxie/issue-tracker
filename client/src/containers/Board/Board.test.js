import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Board from './index';

test('should contains navbar somewhere on the screen', () => {
  render(
    <MemoryRouter>
      <Board />
    </MemoryRouter>,
  );
  const linkElement = screen.getByText('Issue Tracker');
  expect(linkElement).toBeInTheDocument();
});
