import { AppPage } from './app.po';

describe('boilerplate App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
      expect(page.getParagraphText()).toEqual('i am the header title');
  });
});
