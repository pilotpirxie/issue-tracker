import { render, screen } from '@testing-library/react';
import App from './index';

test('should contains navbar somewhere on the screen', () => {
  render(<App />);
  const linkElement = screen.getByText('Issue Tracker');
  expect(linkElement).toBeInTheDocument();
});
