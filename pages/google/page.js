export default class Page {
  constructor(browser) {
    this.browser = browser;
    this.page = browser.url("http://www.google.com");
  }

  title() {
    return this.page.getTitle();
  }
}
