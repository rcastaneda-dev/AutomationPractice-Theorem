import { Selector } from 'testcafe';

export default class HeaderBasePage {
  /**
   * Initializes a new instance of {@link HeaderBasePage}
   */
  constructor() {
    this.container = Selector('#header');
    this.banner = this.container.child('.banner');
    this.nav = this.container.child('.nav');
    this.signInLink = this.nav.find('a.login');
    this.contactUsLink = this.nav.find('a').withExactText('Contact us');
    this.categoriesMenu = this.container.find('ul.menu-content');
    this.categoryOptions = this.categoriesMenu.child('li').child('a');
    this.searchQuerInput = this.container.find('input#search_query_top');
  }
}
