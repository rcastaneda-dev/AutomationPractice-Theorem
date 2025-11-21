import { t } from 'testcafe';
import SearchResultsPage from '@pages/Search/searchResultsPage';
import logger from '@config/logger';

export default class SearchResultsPageActions {
  /**
   * Initializes a new instance of {@link SearchResultsPageActions}
   */
  constructor() {
    this.searchResultsPage = new SearchResultsPage();
  }

  async filterItemByPrice(price) {
    logger.debug(`Filtering matching items by price [${price}]`);
    const results = this.searchResultsPage.matchingResults;
    const filterFunction = (node, _idx) => node.innerText.includes(price);
    return results.filter(filterFunction, { price });
  }

  async verifyMatchingItemIsVisible(itemSelector) {
    logger.info('Verifying that matching element is visible');
    await t.expect(itemSelector.visible).ok();
  }

  async verifyDiscountLabel(itemSelector, isLabelExpected) {
    logger.info('Verifying if item has discount');

    if (isLabelExpected) {
      await t
        .expect(itemSelector.find('.price-percent-reduction').visible)
        .ok();
      return;
    }

    await t.expect(itemSelector.exists).notOk();
  }
}
