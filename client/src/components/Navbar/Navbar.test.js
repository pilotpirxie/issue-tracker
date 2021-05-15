import {render} from '@testing-library/react';
import Navbar from './index';

test('should render logo text', () => {
  const {getByText} = render(<Navbar />);

  expect(getByText('Issue Tracker')).toBeTruthy();
});
