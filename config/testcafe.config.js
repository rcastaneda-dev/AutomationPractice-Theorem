const { environment } = require('./environment');

/**
 * TestCafe configuration file
 * Centralizes all TestCafe-specific settings
 */

module.exports = {
  // Browser settings
  browsers: environment.getBrowserConfig
    ? environment.getBrowserConfig()
    : 'chrome',

  // Source files
  src: ['tests/**/*.js'],

  // Screenshot settings
  screenshots: {
    path: environment.screenshotPath || 'screenshots/',
    takeOnFails: environment.screenshotOnFail !== false,
    pathPattern:
      // eslint-disable-next-line no-template-curly-in-string
      '${DATE}_${TIME}/${FIXTURE}/${TEST}/${BROWSER}/${FILE_INDEX}.png',
    fullPage: true,
  },

  // Video recording settings
  videoPath: environment.videoPath || 'videos/',
  videoOptions: {
    singleFile: false,
    failedOnly: true,
    pathPattern:
      // eslint-disable-next-line no-template-curly-in-string
      '${DATE}_${TIME}/${FIXTURE}/${TEST}/${BROWSER}/${FILE_INDEX}.mp4',
  },
  videoEncodingOptions: {
    r: 20,
    aspect: '16:9',
  },

  // Concurrency
  concurrency: environment.concurrency || 1,

  // Quarantine mode for flaky tests
  quarantineMode: {
    attemptLimit: environment.retryCount || 3,
    successThreshold: 1,
  },

  // Skip JS errors
  skipJsErrors: false,

  // Stop on first fail (useful for debugging)
  stopOnFirstFail: false,

  // Disable page caching
  disablePageCaching: true,

  // Color output
  color: true,

  // Reporter configuration
  reporter: [
    {
      name: 'spec',
    },
    {
      name: 'json',
      output: 'reports/report.json',
    },
  ],

  // Retry test actions on failure
  retryTestPages: true,

  // Speed of test execution (1 is fastest, 0.01 is slowest)
  speed: 1,

  // Timeout settings
  pageLoadTimeout: environment.testTimeout || 30000,
  assertionTimeout: 10000,
  selectorTimeout: 10000,
  pageRequestTimeout: 10000,

  // Skip uncaught errors
  skipUncaughtErrors: false,

  // Disable multiple windows
  disableMultipleWindows: false,

  // Development mode
  developmentMode: false,

  // Compiler options
  compilerOptions: {
    typescript: {
      configPath: 'tsconfig.json',
      customCompilerModulePath: '../typescript',
    },
  },
};
