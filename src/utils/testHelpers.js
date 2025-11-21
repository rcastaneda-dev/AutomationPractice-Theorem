const { t } = require('testcafe');
const logger = require('@config/logger');

/**
 * Test helper utilities for common test operations
 */

/**
 * Wait for an element to be visible with custom timeout
 * @param {Selector} selector - TestCafe selector
 * @param {number} timeout - Timeout in milliseconds (default: 10000)
 * @returns {Promise<void>}
 */
async function waitForElement(selector, timeout = 10000) {
  logger.testAction('Waiting for element to be visible', { timeout });
  await t.expect(selector.exists).ok({ timeout });
  await t.expect(selector.visible).ok({ timeout });
}

/**
 * Wait for an element to disappear
 * @param {Selector} selector - TestCafe selector
 * @param {number} timeout - Timeout in milliseconds (default: 10000)
 * @returns {Promise<void>}
 */
async function waitForElementToDisappear(selector, timeout = 10000) {
  logger.testAction('Waiting for element to disappear', { timeout });
  await t.expect(selector.exists).notOk({ timeout });
}

/**
 * Scroll to element before interacting with it
 * @param {Selector} selector - TestCafe selector
 * @returns {Promise<void>}
 */
async function scrollToElement(selector) {
  logger.testAction('Scrolling to element');
  await t.scrollIntoView(selector);
}

/**
 * Click element with retry logic
 * @param {Selector} selector - TestCafe selector
 * @param {number} retries - Number of retry attempts (default: 3)
 * @returns {Promise<void>}
 */
async function clickWithRetry(selector, retries = 3) {
  logger.testAction('Clicking element with retry', { retries });
  for (let i = 0; i < retries; i++) {
    try {
      await waitForElement(selector);
      await t.click(selector);
      return;
    } catch (error) {
      if (i === retries - 1) throw error;
      logger.warn(`Click attempt ${i + 1} failed, retrying...`);
      await t.wait(1000);
    }
  }
}

/**
 * Type text with clearing existing value first
 * @param {Selector} selector - TestCafe selector
 * @param {string} text - Text to type
 * @param {Object} options - Type options
 * @returns {Promise<void>}
 */
async function typeTextClear(selector, text, options = {}) {
  logger.testAction('Typing text after clearing', { text });
  await waitForElement(selector);
  await t.selectText(selector).pressKey('delete');
  await t.typeText(selector, text, options);
}

/**
 * Take a screenshot with custom name
 * @param {string} name - Screenshot name
 * @returns {Promise<void>}
 */
async function takeScreenshot(name) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const screenshotName = `${name}_${timestamp}`;
  logger.info(`Taking screenshot: ${screenshotName}`);
  await t.takeScreenshot(screenshotName);
}

/**
 * Wait for a specific amount of time
 * @param {number} ms - Milliseconds to wait
 * @returns {Promise<void>}
 */
async function wait(ms) {
  logger.testAction(`Waiting for ${ms}ms`);
  await t.wait(ms);
}

/**
 * Get current URL
 * @returns {Promise<string>}
 */
async function getCurrentUrl() {
  const url = await t.eval(() => window.location.href);
  logger.debug('Current URL:', { url });
  return url;
}

/**
 * Navigate to URL
 * @param {string} url - URL to navigate to
 * @returns {Promise<void>}
 */
async function navigateTo(url) {
  logger.testAction('Navigating to URL', { url });
  await t.navigateTo(url);
}

/**
 * Refresh the page
 * @returns {Promise<void>}
 */
async function refreshPage() {
  logger.testAction('Refreshing page');
  await t.eval(() => location.reload(true));
}

/**
 * Switch to iframe
 * @param {Selector} iframeSelector - Iframe selector
 * @returns {Promise<void>}
 */
async function switchToIframe(iframeSelector) {
  logger.testAction('Switching to iframe');
  await t.switchToIframe(iframeSelector);
}

/**
 * Switch to main window from iframe
 * @returns {Promise<void>}
 */
async function switchToMainWindow() {
  logger.testAction('Switching to main window');
  await t.switchToMainWindow();
}

/**
 * Get element count
 * @param {Selector} selector - TestCafe selector
 * @returns {Promise<number>}
 */
async function getElementCount(selector) {
  const count = await selector.count;
  logger.debug('Element count:', { count });
  return count;
}

/**
 * Check if element exists
 * @param {Selector} selector - TestCafe selector
 * @returns {Promise<boolean>}
 */
async function elementExists(selector) {
  const exists = await selector.exists;
  logger.debug('Element exists:', { exists });
  return exists;
}

/**
 * Check if element is visible
 * @param {Selector} selector - TestCafe selector
 * @returns {Promise<boolean>}
 */
async function isElementVisible(selector) {
  const visible = await selector.visible;
  logger.debug('Element visible:', { visible });
  return visible;
}

/**
 * Get element text
 * @param {Selector} selector - TestCafe selector
 * @returns {Promise<string>}
 */
async function getElementText(selector) {
  const text = await selector.innerText;
  logger.debug('Element text:', { text });
  return text;
}

/**
 * Get element attribute value
 * @param {Selector} selector - TestCafe selector
 * @param {string} attributeName - Attribute name
 * @returns {Promise<string>}
 */
async function getElementAttribute(selector, attributeName) {
  const value = await selector.getAttribute(attributeName);
  logger.debug(`Element attribute ${attributeName}:`, { value });
  return value;
}

/**
 * Hover over element
 * @param {Selector} selector - TestCafe selector
 * @returns {Promise<void>}
 */
async function hoverElement(selector) {
  logger.testAction('Hovering over element');
  await waitForElement(selector);
  await t.hover(selector);
}

/**
 * Double click element
 * @param {Selector} selector - TestCafe selector
 * @returns {Promise<void>}
 */
async function doubleClickElement(selector) {
  logger.testAction('Double clicking element');
  await waitForElement(selector);
  await t.doubleClick(selector);
}

/**
 * Right click element
 * @param {Selector} selector - TestCafe selector
 * @returns {Promise<void>}
 */
async function rightClickElement(selector) {
  logger.testAction('Right clicking element');
  await waitForElement(selector);
  await t.rightClick(selector);
}

/**
 * Select dropdown option by text
 * @param {Selector} selector - Dropdown selector
 * @param {string} optionText - Option text to select
 * @returns {Promise<void>}
 */
async function selectDropdownByText(selector, optionText) {
  logger.testAction('Selecting dropdown option', { optionText });
  await waitForElement(selector);
  const option = selector.find('option').withText(optionText);
  await t.click(selector).click(option);
}

/**
 * Select dropdown option by value
 * @param {Selector} selector - Dropdown selector
 * @param {string} value - Option value to select
 * @returns {Promise<void>}
 */
async function selectDropdownByValue(selector, value) {
  logger.testAction('Selecting dropdown option by value', { value });
  await waitForElement(selector);
  const option = selector.find('option').withAttribute('value', value);
  await t.click(selector).click(option);
}

module.exports = {
  waitForElement,
  waitForElementToDisappear,
  scrollToElement,
  clickWithRetry,
  typeTextClear,
  takeScreenshot,
  wait,
  getCurrentUrl,
  navigateTo,
  refreshPage,
  switchToIframe,
  switchToMainWindow,
  getElementCount,
  elementExists,
  isElementVisible,
  getElementText,
  getElementAttribute,
  hoverElement,
  doubleClickElement,
  rightClickElement,
  selectDropdownByText,
  selectDropdownByValue,
};
