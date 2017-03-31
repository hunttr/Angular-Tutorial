import { DmFrontEndPage } from './app.po';

describe('dm-front-end App', () => {
  let page: DmFrontEndPage;

  beforeEach(() => {
    page = new DmFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
