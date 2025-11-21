import ContentBasePage from '@pages/contentBasePage';

export default class CategoryContentPage extends ContentBasePage {
  /**
   * Initializes a new instance of {@link CategoryContentPage}
   */
  constructor() {
    super();
    this.breadCrumbContainer = this.container.find('.breadcrumb');
    this.categoryPageHeading = this.container
      .find('h1.page-heading.product-listing')
      .child('.cat-name');
    this.subCategoriesSection = this.container.find('#subcategories');
    this.subCategories = this.subCategoriesSection.child('ul').child('li');
  }

  /**
   * Get the selector to click subcategory element
   * @param {String} subCategory represents the subcategory title
   * @returns {Selector} represents the href for the given subcategory item
   */
  getSubcategoryRef(subCategory) {
    return this.subCategories
      .child('h5')
      .child('a.subcategory-name')
      .withText(subCategory);
  }
}
