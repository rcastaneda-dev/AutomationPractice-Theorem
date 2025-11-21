import urls from '@constants/urls';
import getCredentials from '@config/users';
import BasePageActions from '@pageActions/basePageActions';
import LoginPageActions from '@pageActions/Login/loginPageActions';
import SearchResultsPageActions from '@pageActions/Search/searchResultsPageActions';

const basePageActions = new BasePageActions();
const loginPageActions = new LoginPageActions();
const searchResultsPageActions = new SearchResultsPageActions();
const { email, password } = getCredentials('testUser2');

fixture('Test - Items Search')
  .meta('smoke', 'true')
  .meta('feature', 'Search')
  .page(urls.BASE_URL)
  .beforeEach(async t => {
    await basePageActions.goToSignIn();
    await loginPageActions.logIn(email, password);
  });

const dataset = [
  {
    title: 'Verify item is found by name & price without discount',
    testCaseId: 'TC007',
    itemName: 'Printed Dress',
    price: '$50.99',
    hasDiscount: false,
  },
  {
    title: 'Verify item is found by name & price with discount',
    testCaseId: 'TC008',
    itemName: 'Printed Summer Dress',
    price: '$28.98',
    hasDiscount: true,
  },
];

dataset.forEach(({ testCaseId, itemName, hasDiscount, price, title }) => {
  test.meta('testCaseId', testCaseId)(title, async t => {
    await basePageActions.search(itemName);
    const matchingItem = await searchResultsPageActions.filterItemByPrice(
      price,
    );
    await searchResultsPageActions.verifyMatchingItemIsVisible(matchingItem);
    await searchResultsPageActions.verifyDiscountLabel(hasDiscount);
  });
});
