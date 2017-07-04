import { AngularTBPage } from './app.po';

describe('angular-tb App', () => {
  let page: AngularTBPage;

  beforeEach(() => {
    page = new AngularTBPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
