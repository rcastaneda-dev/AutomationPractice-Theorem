import { Selector } from 'testcafe';
import HeaderBasePage from './headerBasePage';
import ContentBasePage from './contentBasePage';
import FooterBasePage from './footerBasePage';

export default class BasePage {
  /**
   * Initializes a new instance of {@link BasePage}
   */
  constructor() {
    this.body = Selector('body');
    this.header = new HeaderBasePage();
    this.content = new ContentBasePage();
    this.footer = new FooterBasePage();
  }
}
