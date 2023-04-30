import { render } from '@testing-library/react';

import Ui from './ui';

describe('Ui', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui name="Someone" />);
    expect(baseElement).toBeTruthy();
  });
});
