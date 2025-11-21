import { t } from 'testcafe';
import logger from '@config/logger';
import AccountCreationPage from '@pages/Login/accountCreationPage';
import {
  address,
  company,
  datatype,
  date,
  internet,
  lorem,
  name,
  phone,
} from 'faker';

export default class AccountCreationPageActions {
  /**
   * Initializes a new instance of {@link AccountCreationPageActions}
   */
  constructor() {
    this.accountCreationPage = new AccountCreationPage();
  }

  /**
   * Complete personal information in the account creation flow.
   * @param {String} email string that represents the email associated to the registration.
   * @param {Object} customParams contains custom parameters to override default values.
   */
  async fillPersonalInfo(email, customParams = {}) {
    logger.info(
      `Filling personal info with the following custom params: ${JSON.stringify(
        customParams,
      )}`,
    );
    const personalInfoParams = {
      email,
      lastName: name.lastName(),
      name: name.firstName(),
      password: internet.password(datatype.number({ min: 5, max: 16 })),
      ...customParams,
    };

    await this.selectGenderRadio();
    const dayRandomOption = datatype.number({ min: 1, max: 31 }).toString();
    const monthRandomOption = date.month().toString();
    const yearRandomOption = date.past(18).getFullYear().toString();

    await t
      .typeText(
        this.accountCreationPage.firstNameInput,
        personalInfoParams.name,
      )
      .typeText(
        this.accountCreationPage.lastNameInput,
        personalInfoParams.lastName,
      )
      .expect(this.accountCreationPage.emailInput.value)
      .eql(email, 'Email entered in previous screen should match')
      .typeText(
        this.accountCreationPage.passwordInput,
        personalInfoParams.password,
      )
      .click(this.accountCreationPage.birthDaySelect)
      .click(
        this.accountCreationPage.daySelectOptions.withText(dayRandomOption),
      )
      .click(this.accountCreationPage.birthMonthSelect)
      .click(
        this.accountCreationPage.monthSelectOptions.withText(monthRandomOption),
      )
      .click(this.accountCreationPage.birthYearSelect)
      .click(
        this.accountCreationPage.yearSelectOptions.withText(yearRandomOption),
      )
      .click(this.accountCreationPage.newsLetterCheckbox)
      .click(this.accountCreationPage.specialOffersChecbox);
  }

  /**
   * Complete address & company details in the account creation flow.
   * @param {Object} customParams contains custom parameters to override default values.
   */
  async fillAddress(customParams = {}) {
    logger.info(
      `Filling address section with the following custom params: ${JSON.stringify(
        customParams,
      )}`,
    );

    const addressParams = {
      additionalInfo: lorem.sentence(),
      addressAlias: lorem.slug(2),
      address: address.streetAddress(true),
      addressLine2: address.secondaryAddress(),
      city: address.cityName(),
      lastName: company.companySuffix(),
      mobile: phone.phoneNumberFormat(0),
      name: company.bsNoun(),
      company: company.companyName(),
      phone: phone.phoneNumberFormat(0),
      state: address.state(),
      ...customParams,
    };

    const specialTypingOptions = {
      replace: true,
      paste: true,
    };

    logger.info(addressParams.address);

    const randomStateOption = address.state();
    const zipCodeForGivenState = address
      .zipCodeByState(randomStateOption)
      .split('-')[0];

    await t
      .typeText(
        this.accountCreationPage.firstNamAddressInput,
        addressParams.name,
      )
      .typeText(
        this.accountCreationPage.lastNameAddressInput,
        addressParams.lastName,
      )
      .typeText(this.accountCreationPage.companyInput, addressParams.company)
      .typeText(
        this.accountCreationPage.addressInput,
        addressParams.address,
        specialTypingOptions,
      )
      .typeText(
        this.accountCreationPage.addressLine2Input,
        addressParams.addressLine2,
      )
      .typeText(this.accountCreationPage.cityInput, addressParams.city)
      .click(this.accountCreationPage.stateSelect)
      .click(
        this.accountCreationPage.stateSelectOptions.withText(randomStateOption),
      )
      .typeText(this.accountCreationPage.postalCodeInput, zipCodeForGivenState)
      .typeText(
        this.accountCreationPage.additionalInfoInput,
        addressParams.additionalInfo,
      )
      .typeText(this.accountCreationPage.phoneInput, addressParams.phone)
      .typeText(this.accountCreationPage.mobileInput, addressParams.mobile)
      .typeText(
        this.accountCreationPage.aliasInput,
        addressParams.addressAlias,
      );
  }

  /**
   * Final step in the account creation flow. Click in the "Register" button.
   */
  async proceedWithRegistration() {
    logger.debug('Proceed with registration');
    await t
      .hover(this.accountCreationPage.registerButton)
      .click(this.accountCreationPage.registerButton);
  }

  /**
   * Randomly selects what title will be assigned for each test run.
   */
  async selectGenderRadio() {
    const randomTitleIndex = datatype.number({ min: 0, max: 1 });
    await t.click(
      this.accountCreationPage.titleRadioButtons.nth(randomTitleIndex),
    );
  }
}
