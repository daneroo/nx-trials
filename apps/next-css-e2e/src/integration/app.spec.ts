import { getMenu } from '../support/app.po';

describe('next-css', () => {
  beforeEach(() => cy.visit('/'));

  it('should have a menu entry for Home', () => {
    // Function helper example, see `../support/app.po.ts` file
    getMenu().contains('Home');
  });
});
