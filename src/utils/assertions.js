const { t } = require('testcafe');
const logger = require('@config/logger');

/**
 * Custom assertions for better test readability and logging
 */

/**
 * Assert element is visible
 * @param {Selector} selector - TestCafe selector
 * @param {string} message - Custom assertion message
 * @param {number} timeout - Timeout in milliseconds
 * @returns {Promise<void>}
 */
async function assertElementVisible(
  selector,
  message = 'Element should be visible',
  timeout = 10000,
) {
  logger.testAssertion(message);
  await t.expect(selector.visible).ok(message, { timeout });
}

/**
 * Assert element is not visible
 * @param {Selector} selector - TestCafe selector
 * @param {string} message - Custom assertion message
 * @param {number} timeout - Timeout in milliseconds
 * @returns {Promise<void>}
 */
async function assertElementNotVisible(
  selector,
  message = 'Element should not be visible',
  timeout = 10000,
) {
  logger.testAssertion(message);
  await t.expect(selector.visible).notOk(message, { timeout });
}

/**
 * Assert element exists
 * @param {Selector} selector - TestCafe selector
 * @param {string} message - Custom assertion message
 * @param {number} timeout - Timeout in milliseconds
 * @returns {Promise<void>}
 */
async function assertElementExists(
  selector,
  message = 'Element should exist',
  timeout = 10000,
) {
  logger.testAssertion(message);
  await t.expect(selector.exists).ok(message, { timeout });
}

/**
 * Assert element does not exist
 * @param {Selector} selector - TestCafe selector
 * @param {string} message - Custom assertion message
 * @param {number} timeout - Timeout in milliseconds
 * @returns {Promise<void>}
 */
async function assertElementNotExists(
  selector,
  message = 'Element should not exist',
  timeout = 10000,
) {
  logger.testAssertion(message);
  await t.expect(selector.exists).notOk(message, { timeout });
}

/**
 * Assert text contains
 * @param {Selector} selector - TestCafe selector
 * @param {string} expectedText - Expected text
 * @param {string} message - Custom assertion message
 * @returns {Promise<void>}
 */
async function assertTextContains(
  selector,
  expectedText,
  message = `Text should contain: ${expectedText}`,
) {
  logger.testAssertion(message, { expectedText });
  await t.expect(selector.innerText).contains(expectedText, message);
}

/**
 * Assert text equals
 * @param {Selector} selector - TestCafe selector
 * @param {string} expectedText - Expected text
 * @param {string} message - Custom assertion message
 * @returns {Promise<void>}
 */
async function assertTextEquals(
  selector,
  expectedText,
  message = `Text should equal: ${expectedText}`,
) {
  logger.testAssertion(message, { expectedText });
  await t.expect(selector.innerText).eql(expectedText, message);
}

/**
 * Assert text does not contain
 * @param {Selector} selector - TestCafe selector
 * @param {string} unexpectedText - Text that should not be present
 * @param {string} message - Custom assertion message
 * @returns {Promise<void>}
 */
async function assertTextNotContains(
  selector,
  unexpectedText,
  message = `Text should not contain: ${unexpectedText}`,
) {
  logger.testAssertion(message, { unexpectedText });
  await t.expect(selector.innerText).notContains(unexpectedText, message);
}

/**
 * Assert URL contains
 * @param {string} expectedUrlPart - Expected URL part
 * @param {string} message - Custom assertion message
 * @returns {Promise<void>}
 */
async function assertUrlContains(
  expectedUrlPart,
  message = `URL should contain: ${expectedUrlPart}`,
) {
  logger.testAssertion(message, { expectedUrlPart });
  const currentUrl = await t.eval(() => window.location.href);
  await t.expect(currentUrl).contains(expectedUrlPart, message);
}

/**
 * Assert URL equals
 * @param {string} expectedUrl - Expected URL
 * @param {string} message - Custom assertion message
 * @returns {Promise<void>}
 */
async function assertUrlEquals(
  expectedUrl,
  message = `URL should equal: ${expectedUrl}`,
) {
  logger.testAssertion(message, { expectedUrl });
  const currentUrl = await t.eval(() => window.location.href);
  await t.expect(currentUrl).eql(expectedUrl, message);
}

/**
 * Assert element count
 * @param {Selector} selector - TestCafe selector
 * @param {number} expectedCount - Expected count
 * @param {string} message - Custom assertion message
 * @returns {Promise<void>}
 */
async function assertElementCount(
  selector,
  expectedCount,
  message = `Element count should be: ${expectedCount}`,
) {
  logger.testAssertion(message, { expectedCount });
  await t.expect(selector.count).eql(expectedCount, message);
}

/**
 * Assert element has attribute
 * @param {Selector} selector - TestCafe selector
 * @param {string} attributeName - Attribute name
 * @param {string} expectedValue - Expected attribute value
 * @param {string} message - Custom assertion message
 * @returns {Promise<void>}
 */
async function assertElementHasAttribute(
  selector,
  attributeName,
  expectedValue,
  message = `Element should have attribute ${attributeName} with value: ${expectedValue}`,
) {
  logger.testAssertion(message, { attributeName, expectedValue });
  await t
    .expect(selector.getAttribute(attributeName))
    .eql(expectedValue, message);
}

/**
 * Assert element has class
 * @param {Selector} selector - TestCafe selector
 * @param {string} className - Class name
 * @param {string} message - Custom assertion message
 * @returns {Promise<void>}
 */
async function assertElementHasClass(
  selector,
  className,
  message = `Element should have class: ${className}`,
) {
  logger.testAssertion(message, { className });
  await t.expect(selector.hasClass(className)).ok(message);
}

/**
 * Assert element does not have class
 * @param {Selector} selector - TestCafe selector
 * @param {string} className - Class name
 * @param {string} message - Custom assertion message
 * @returns {Promise<void>}
 */
async function assertElementNotHasClass(
  selector,
  className,
  message = `Element should not have class: ${className}`,
) {
  logger.testAssertion(message, { className });
  await t.expect(selector.hasClass(className)).notOk(message);
}

/**
 * Assert element is enabled
 * @param {Selector} selector - TestCafe selector
 * @param {string} message - Custom assertion message
 * @returns {Promise<void>}
 */
async function assertElementEnabled(
  selector,
  message = 'Element should be enabled',
) {
  logger.testAssertion(message);
  await t.expect(selector.hasAttribute('disabled')).notOk(message);
}

/**
 * Assert element is disabled
 * @param {Selector} selector - TestCafe selector
 * @param {string} message - Custom assertion message
 * @returns {Promise<void>}
 */
async function assertElementDisabled(
  selector,
  message = 'Element should be disabled',
) {
  logger.testAssertion(message);
  await t.expect(selector.hasAttribute('disabled')).ok(message);
}

/**
 * Assert checkbox is checked
 * @param {Selector} selector - TestCafe selector
 * @param {string} message - Custom assertion message
 * @returns {Promise<void>}
 */
async function assertCheckboxChecked(
  selector,
  message = 'Checkbox should be checked',
) {
  logger.testAssertion(message);
  await t.expect(selector.checked).ok(message);
}

/**
 * Assert checkbox is not checked
 * @param {Selector} selector - TestCafe selector
 * @param {string} message - Custom assertion message
 * @returns {Promise<void>}
 */
async function assertCheckboxNotChecked(
  selector,
  message = 'Checkbox should not be checked',
) {
  logger.testAssertion(message);
  await t.expect(selector.checked).notOk(message);
}

/**
 * Assert value equals
 * @param {*} actual - Actual value
 * @param {*} expected - Expected value
 * @param {string} message - Custom assertion message
 * @returns {Promise<void>}
 */
async function assertValueEquals(
  actual,
  expected,
  message = `Value should equal: ${expected}`,
) {
  logger.testAssertion(message, { actual, expected });
  await t.expect(actual).eql(expected, message);
}

/**
 * Assert value not equals
 * @param {*} actual - Actual value
 * @param {*} expected - Expected value
 * @param {string} message - Custom assertion message
 * @returns {Promise<void>}
 */
async function assertValueNotEquals(
  actual,
  expected,
  message = `Value should not equal: ${expected}`,
) {
  logger.testAssertion(message, { actual, expected });
  await t.expect(actual).notEql(expected, message);
}

module.exports = {
  assertElementVisible,
  assertElementNotVisible,
  assertElementExists,
  assertElementNotExists,
  assertTextContains,
  assertTextEquals,
  assertTextNotContains,
  assertUrlContains,
  assertUrlEquals,
  assertElementCount,
  assertElementHasAttribute,
  assertElementHasClass,
  assertElementNotHasClass,
  assertElementEnabled,
  assertElementDisabled,
  assertCheckboxChecked,
  assertCheckboxNotChecked,
  assertValueEquals,
  assertValueNotEquals,
};
