import { BadgesAppPage } from './app.po';

describe('badges-app App', function() {
  let page: BadgesAppPage;

  beforeEach(() => {
    page = new BadgesAppPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('badges-app works!');
  });
});
