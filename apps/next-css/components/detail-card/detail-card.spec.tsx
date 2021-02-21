import React from 'react';
import { render } from '@testing-library/react';

import DetailCard from './detail-card';

describe('DetailCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DetailCard title="Title" text="Here is the text" />);
    expect(baseElement).toBeTruthy();
  });
});
