import ContentBasePage from '@pages/contentBasePage';

export default class AccountCreationPage extends ContentBasePage {
  /**
   * Initializes a new instance of {@link AccountCreationPage}
   */
  constructor() {
    super();
    this.pageHeading = this.container.find('h1.page-heading');
    this.newAccountForm = this.container.find('#account-creation_form');

    // Personal Info
    this.newPersonalInfoFormSection = this.newAccountForm.child(
      'div.account_creation',
    );
    this.personalInfoHeading =
      this.newPersonalInfoFormSection.child('h3.page-subheading');
    this.titleRadioButtons = this.newPersonalInfoFormSection.find('div.radio');
    this.firstNameInput = this.newPersonalInfoFormSection.find(
      '#customer_firstname',
    );
    this.lastNameInput =
      this.newPersonalInfoFormSection.find('#customer_lastname');
    this.emailInput = this.newPersonalInfoFormSection.find('#email');
    this.passwordInput = this.newPersonalInfoFormSection.find('#passwd');
    this.newsLetterCheckbox =
      this.newPersonalInfoFormSection.find('#newsletter');
    this.specialOffersChecbox = this.newPersonalInfoFormSection.find('#optin');
    this.birthDaySelect = this.newPersonalInfoFormSection.find('#days');
    this.daySelectOptions = this.birthDaySelect.child('option');
    this.birthMonthSelect = this.newPersonalInfoFormSection.find('#months');
    this.monthSelectOptions = this.birthMonthSelect.find('option');
    this.birthYearSelect = this.newPersonalInfoFormSection.find('#years');
    this.yearSelectOptions = this.birthYearSelect.find('option');

    // Your address
    this.addressFormSection = this.newAccountForm.child('div.account_creation');
    this.addresInfoHeading = this.newAccountForm.child('h3.page-subheading');
    this.firstNamAddressInput = this.addressFormSection.find('#firstname');
    this.lastNameAddressInput = this.addressFormSection.find('#lastname');
    this.companyInput = this.addressFormSection.find('#company');
    this.addressInput = this.addressFormSection.find('#address1');
    this.addressLine2Input = this.addressFormSection.find('#address2');
    this.cityInput = this.addressFormSection.find('#city');
    this.stateSelect = this.addressFormSection.find('#id_state');
    this.stateSelectOptions = this.stateSelect.child('option');
    this.postalCodeInput = this.addressFormSection.find('#postcode');
    this.countryInput = this.addressFormSection.find('#id_country');
    this.additionalInfoInput = this.addressFormSection.find('#other');
    this.phoneInput = this.addressFormSection.find('#phone');
    this.mobileInput = this.addressFormSection.find('#phone_mobile');
    this.aliasInput = this.addressFormSection.find('#alias');

    this.registerButton = this.container.find('button#submitAccount');
  }
}
