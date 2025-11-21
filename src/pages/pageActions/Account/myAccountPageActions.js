import { t } from 'testcafe';
import MyAccountPage from '@pages/Account/myAccountPage';

export default class MyAccountPageActions {
  /**
   * Initializes a new instance of {@link MyAccountPageActions}
   */
  constructor() {
    this.myAccountPage = new MyAccountPage();
  }

  /**
   * Validates that expected elements are displayed in my account landing page.
   */
  async validateMyAccountHome() {
    await t
      .expect(this.myAccountPage.addresses.visible)
      .ok()
      .expect(this.myAccountPage.whishlists.visible)
      .ok()
      .expect(this.myAccountPage.ordersHistory.visible)
      .ok()
      .expect(this.myAccountPage.accountInfo.visible)
      .ok()
      .expect(this.myAccountPage.creditSlips.visible)
      .ok();
  }
}
