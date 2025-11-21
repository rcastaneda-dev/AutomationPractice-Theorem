const { getCredentials } = require('./environment');

/**
 * Get user credentials from environment configuration
 * @param {string} keyword - User identifier (e.g., 'testUser1', 'testUser2')
 * @returns {Object} User credentials with email and password
 *
 * @deprecated This module is kept for backward compatibility.
 * Consider using getCredentials from config/environment.js directly.
 */
export default function getUserCredentials(keyword) {
  return getCredentials(keyword);
}
