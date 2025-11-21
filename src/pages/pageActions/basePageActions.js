import { t } from 'testcafe';
import logger from '@config/logger';
import HeaderBasePage from '@pages/headerBasePage';

export default class BasePageActions {
  /**
   * Initializes a new instance of {@link BasePageActions}
   */
  constructor() {
    this.headerPage = new HeaderBasePage();
  }

  /**
   * Navigate to sign in section by clicking href anchor
   */
  async goToSignIn() {
    logger.info('Navigating to Sign In');
    await t.click(this.headerPage.signInLink);
  }

  /**
   * Navigate to contact us section by clicking href anchor
   */
  async goToContactUs() {
    logger.info('Navigating to Conctact Us');
    await t.click(this.headerPage.signInLink);
  }

  /**
   * Navigate to given category
   * @param {String} targetCategory identifies the desired category
   */
  async goToCategory(targetCategory) {
    logger.info(`Navigating to category ${targetCategory}`);
    const menuOption = await this.headerPage.categoryOptions.withAttribute(
      'title',
      targetCategory,
    );
    await t.hover(menuOption).click(menuOption);
  }

  async search(query) {
    logger.debug(`Searching for: ${query}`);
    await t.typeText(this.headerPage.searchQuerInput, query).pressKey('enter');
  }
}
