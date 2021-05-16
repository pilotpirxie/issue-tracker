import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { AppSwitch } from './index';

test('should contains board view', () => {
  render(
    <MemoryRouter initialEntries={['/boards/1/boardkey']}>
      <AppSwitch />
    </MemoryRouter>,
  );

  expect(screen.getByText(/Issue Tracker/i)).toBeInTheDocument();
  expect(screen.getAllByText(/create/i).length).toBeGreaterThan(0);
});
