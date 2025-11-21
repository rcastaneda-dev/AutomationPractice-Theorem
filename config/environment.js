require('dotenv').config();

/**
 * Environment configuration module
 * Manages environment-specific settings and provides defaults
 */

const environment = {
  // Base URL configuration
  baseUrl: process.env.BASE_URL || 'http://automationpractice.com/index.php',

  // Browser configuration
  browser: process.env.BROWSER || 'chrome',
  headless: process.env.HEADLESS === 'true',

  // Test execution settings
  concurrency: parseInt(process.env.CONCURRENCY, 10) || 1,
  testTimeout: parseInt(process.env.TEST_TIMEOUT, 10) || 30000,
  retryCount: parseInt(process.env.RETRY_COUNT, 10) || 0,

  // Screenshot and video settings
  screenshotOnFail: process.env.SCREENSHOT_ON_FAIL !== 'false',
  videoRecording: process.env.VIDEO_RECORDING === 'true',
  screenshotPath: 'screenshots/',
  videoPath: 'videos/',

  // Logging configuration
  logLevel: process.env.LOG_LEVEL || 'info',

  // Test users
  users: {
    testUser1: {
      email: process.env.TEST_USER1_EMAIL || 'Harrison30@gmail.com',
      password: process.env.TEST_USER1_PASSWORD || 'oO_PI6jocB1JOLN',
    },
    testUser2: {
      email: process.env.TEST_USER2_EMAIL || 'Bryon55@gmail.com',
      password: process.env.TEST_USER2_PASSWORD || 'UYn4zvvJS45jLqB',
    },
  },

  // Environment detection
  isCI: process.env.CI === 'true',
  isCIGitHub: process.env.GITHUB_ACTIONS === 'true',

  // Report paths
  reportPath: 'reports/',
  htmlReportPath: 'reports/html/',
  allureResultsPath: 'allure-results/',
};

/**
 * Get user credentials by key
 * @param {string} userKey - The user identifier (e.g., 'testUser1')
 * @returns {Object} User credentials object with email and password
 */
function getCredentials(userKey) {
  if (!environment.users[userKey]) {
    throw new Error(`User credentials not found for key: ${userKey}`);
  }
  return environment.users[userKey];
}

/**
 * Get browser configuration for TestCafe
 * @returns {string} Browser string for TestCafe
 */
function getBrowserConfig() {
  const { browser, headless } = environment;
  return headless ? `${browser}:headless` : browser;
}

module.exports = {
  environment,
  getCredentials,
  getBrowserConfig,
};
