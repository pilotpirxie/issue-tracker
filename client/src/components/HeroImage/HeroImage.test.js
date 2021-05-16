import React from 'react';
import { render } from '@testing-library/react';
import HeroImage from './index';

test('should render image with alt text', () => {
  const { getByAltText } = render(<HeroImage />);

  expect(getByAltText(/issue tracker/i)).toBeTruthy();
});
