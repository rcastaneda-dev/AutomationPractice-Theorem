import ContentBasePage from '../contentBasePage';

export default class LoginPage extends ContentBasePage {
  /**
   * Initializes a new instance of {@link LoginPage}
   */
  constructor() {
    super();
    this.pageHeading = this.container.find('h1.page-heading');

    // Create an account form objects
    this.createAccountForm = this.container.find('#create-account_form');
    this.createAccountSubheading =
      this.createAccountForm.child('h3.page-subheading');
    this.createAccountDescription = this.createAccountForm
      .find('.form_content')
      .child('p');
    this.createACcountEmailInput =
      this.createAccountForm.find('input#email_create');
    this.createAccountButton = this.createAccountForm.find(
      'button#SubmitCreate',
    );

    // Already registered form objects
    this.alreadyRegisteredForm = this.container.find('#login_form');
    this.alreadyRegisteredSubheading =
      this.alreadyRegisteredForm.child('h3.page-subheading');
    this.alreadyRegisteredEmailInput =
      this.alreadyRegisteredForm.find('input#email');
    this.alreadyRegisteredPassInput =
      this.alreadyRegisteredForm.find('input#passwd');
    this.forgotYourPasswordLink = this.alreadyRegisteredForm
      .find('a')
      .withExactText('Forgot your password?');
    this.signInButton = this.alreadyRegisteredForm.find('button#SubmitLogin');
  }
}
