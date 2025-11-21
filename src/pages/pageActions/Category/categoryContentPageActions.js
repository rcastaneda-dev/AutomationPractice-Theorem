import { t } from 'testcafe';
import logger from '@config/logger';
import CategoryContentPage from '@pages/Category/categoryContentPage';

export default class CategoryContentPageActions {
  /**
   * Initializes a new instance of {@link CategoryContentPageActions}
   */
  constructor() {
    this.categoryContentPage = new CategoryContentPage();
  }

  /**
   * Verify expected title is present in the selected category.
   * @param {String} expectedTitle represents the expected page title
   */
  async verifyCategoryPageTitle(expectedTitle) {
    logger.info(`Verifying category page title is: ${expectedTitle}`);
    await t
      .expect(this.categoryContentPage.categoryPageHeading.innerText)
      .contains(expectedTitle.toUpperCase());
  }

  /**
   * Navigate to sub-category based on the title passed
   * @param {String} targetSubCategory identifies the subcategory to select
   */
  async goToSubCategory(targetSubCategory) {
    logger.info(`Navigating to subCategory ${targetSubCategory}`);
    const subCategory = this.categoryContentPage.getSubcategoryRef(
      targetSubCategory.toUpperCase(),
    );
    await t.hover(subCategory).click(subCategory);
  }
}
