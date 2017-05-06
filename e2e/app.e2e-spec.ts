import { NghTestPage } from './app.po';

describe('ngh-test App', () => {
  let page: NghTestPage;

  beforeEach(() => {
    page = new NghTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
