export class BadgesAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('badges-app-app h1')).getText();
  }
}
