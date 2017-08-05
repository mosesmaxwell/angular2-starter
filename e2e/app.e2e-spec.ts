import { Angular2StarterPage } from './app.po';

describe('angular2-starter App', () => {
  let page: Angular2StarterPage;

  beforeEach(() => {
    page = new Angular2StarterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
