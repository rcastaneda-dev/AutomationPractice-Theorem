const faker = require('faker');

/**
 * Test data builder using Faker.js
 * Provides builder pattern for creating test data
 */

class UserDataBuilder {
  constructor() {
    this.data = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(12, false, /[A-Za-z0-9]/),
      company: faker.company.companyName(),
      address: faker.address.streetAddress(),
      address2: faker.address.secondaryAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: 'United States',
      phone: faker.phone.phoneNumber(),
      mobilePhone: faker.phone.phoneNumber(),
      alias: faker.random.words(2),
    };
  }

  withFirstName(firstName) {
    this.data.firstName = firstName;
    return this;
  }

  withLastName(lastName) {
    this.data.lastName = lastName;
    return this;
  }

  withEmail(email) {
    this.data.email = email;
    return this;
  }

  withPassword(password) {
    this.data.password = password;
    return this;
  }

  withCompany(company) {
    this.data.company = company;
    return this;
  }

  withAddress(address) {
    this.data.address = address;
    return this;
  }

  withCity(city) {
    this.data.city = city;
    return this;
  }

  withState(state) {
    this.data.state = state;
    return this;
  }

  withZipCode(zipCode) {
    this.data.zipCode = zipCode;
    return this;
  }

  withCountry(country) {
    this.data.country = country;
    return this;
  }

  withPhone(phone) {
    this.data.phone = phone;
    return this;
  }

  withMobilePhone(mobilePhone) {
    this.data.mobilePhone = mobilePhone;
    return this;
  }

  build() {
    return this.data;
  }
}

class ProductDataBuilder {
  constructor() {
    this.data = {
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(),
      category: faker.commerce.department(),
      color: faker.commerce.color(),
      quantity: faker.datatype.number({ min: 1, max: 10 }),
    };
  }

  withName(name) {
    this.data.name = name;
    return this;
  }

  withDescription(description) {
    this.data.description = description;
    return this;
  }

  withPrice(price) {
    this.data.price = price;
    return this;
  }

  withCategory(category) {
    this.data.category = category;
    return this;
  }

  withColor(color) {
    this.data.color = color;
    return this;
  }

  withQuantity(quantity) {
    this.data.quantity = quantity;
    return this;
  }

  build() {
    return this.data;
  }
}

/**
 * Generate random user data
 * @returns {Object} User data object
 */
function generateUserData() {
  return new UserDataBuilder().build();
}

/**
 * Generate random product data
 * @returns {Object} Product data object
 */
function generateProductData() {
  return new ProductDataBuilder().build();
}

/**
 * Generate random email
 * @returns {string} Email address
 */
function generateEmail() {
  return faker.internet.email();
}

/**
 * Generate random password
 * @param {number} length - Password length
 * @returns {string} Password
 */
function generatePassword(length = 12) {
  return faker.internet.password(length, false, /[A-Za-z0-9]/);
}

/**
 * Generate random phone number
 * @returns {string} Phone number
 */
function generatePhoneNumber() {
  return faker.phone.phoneNumber();
}

/**
 * Generate random address
 * @returns {Object} Address object
 */
function generateAddress() {
  return {
    street: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    zipCode: faker.address.zipCode(),
    country: 'United States',
  };
}

/**
 * Generate random number in range
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Random number
 */
function generateRandomNumber(min = 1, max = 100) {
  return faker.datatype.number({ min, max });
}

/**
 * Generate random string
 * @param {number} length - String length
 * @returns {string} Random string
 */
function generateRandomString(length = 10) {
  return faker.random.alphaNumeric(length);
}

/**
 * Generate random date
 * @param {Date} from - Start date
 * @param {Date} to - End date
 * @returns {Date} Random date
 */
function generateRandomDate(from, to) {
  return faker.date.between(from, to);
}

module.exports = {
  UserDataBuilder,
  ProductDataBuilder,
  generateUserData,
  generateProductData,
  generateEmail,
  generatePassword,
  generatePhoneNumber,
  generateAddress,
  generateRandomNumber,
  generateRandomString,
  generateRandomDate,
};
