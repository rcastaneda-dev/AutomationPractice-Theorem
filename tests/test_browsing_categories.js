import urls from '@constants/urls';
import getCredentials from '@config/users';
import Category from '@constants/existingCategories';
import SubCategory from '@constants/existingSubCategories';
import BasePageActions from '@pageActions/basePageActions';
import LoginPageActions from '@pageActions/Login/loginPageActions';
import CategoryContentPageActions from '@pageActions/Category/categoryContentPageActions';

const basePageActions = new BasePageActions();
const loginPageActions = new LoginPageActions();
const categoryContentPageActions = new CategoryContentPageActions();
const { email, password } = getCredentials('testUser1');

fixture('Test - Browsing & Navigation')
  .meta('smoke', 'true')
  .meta('feature', 'Browsing')
  .page(urls.BASE_URL)
  .beforeEach(async t => {
    await basePageActions.goToSignIn();
    await loginPageActions.logIn(email, password);
  });

const dataset = [
  {
    testCaseId: 'TC003',
    targetCategory: Category.WOMEN,
    targetSubCategory: SubCategory.WOMEN.TOPS,
    title:
      'Verify user is able to navigate to Women > Tops subcategory successfully',
  },
  {
    testCaseId: 'TC004',
    targetCategory: Category.DRESSES,
    targetSubCategory: SubCategory.DRESSES.EVENING_DRESSES,
    title:
      'Verify user is able to navigate to Dresses > Evening Dresses subcategory successfully',
  },
  {
    testCaseId: 'TC005',
    targetCategory: Category.WOMEN,
    targetSubCategory: SubCategory.WOMEN.DRESSES,
    title:
      'Verify user is able to navigate to Women > Dresses subcategory successfully',
  },
  {
    testCaseId: 'TC006',
    targetCategory: Category.DRESSES,
    targetSubCategory: SubCategory.DRESSES.SUMMER_DRESSES,
    title:
      'Verify user is able to navigate to Dresses > Summer Dresses subcategory successfully',
  },
];

dataset.forEach(({ testCaseId, targetCategory, targetSubCategory, title }) => {
  test.meta('testCaseId', testCaseId)(title, async t => {
    await basePageActions.goToCategory(targetCategory);
    await categoryContentPageActions.verifyCategoryPageTitle(targetCategory);
    await categoryContentPageActions.goToSubCategory(targetSubCategory);
    await categoryContentPageActions.verifyCategoryPageTitle(targetSubCategory);
    // TODO: Add handling when category has no subcategories
  });
});
