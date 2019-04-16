import { GregometerPage } from './app.po';

describe('gregometer App', function() {
  let page: GregometerPage;

  beforeEach(() => {
    page = new GregometerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
