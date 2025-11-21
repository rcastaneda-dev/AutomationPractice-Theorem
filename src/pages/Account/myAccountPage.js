import ContentBasePage from '@pages/contentBasePage';

export default class MyAccountPage extends ContentBasePage {
  /**
   * Initializes a new instance of {@link MyAccountPage}
   */
  constructor() {
    super();
    this.pageHeading = this.container.find('h1.page-heading');
    this.accountInfo = this.container.find('p.info-account');
    this.accountLinks = this.container
      .find('ul.myaccount-link-list')
      .child('li')
      .child('a');
    this.ordersHistory = this.accountLinks.withAttribute('title', 'Orders');
    this.creditSlips = this.accountLinks.withAttribute('title', 'Credit slips');
    this.addresses = this.accountLinks.withAttribute('title', 'Addresses');
    this.personalInfo = this.accountLinks.withAttribute('title', 'Information');
    this.whishlists = this.accountLinks.withAttribute('title', 'My wishlists');
  }
}
