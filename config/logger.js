const winston = require('winston');
const path = require('path');
const fs = require('fs');

// Ensure logs directory exists
const logsDir = 'logs';
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

// Get log level from environment or default to 'info'
const logLevel = process.env.LOG_LEVEL || 'info';

// Custom format for better readability
const customFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.errors({ stack: true }),
  winston.format.splat(),
  winston.format.printf(({ timestamp, level, message, ...meta }) => {
    let msg = `${timestamp} [${level.toUpperCase()}]: ${message}`;
    if (Object.keys(meta).length > 0) {
      msg += ` ${JSON.stringify(meta)}`;
    }
    return msg;
  }),
);

// Create logger instance
const logger = winston.createLogger({
  level: logLevel,
  format: customFormat,
  transports: [
    // Console transport with colors
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize(), customFormat),
    }),
    // File transport for all logs
    new winston.transports.File({
      filename: path.join(logsDir, 'application.log'),
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      tailable: true,
    }),
    // Separate file for errors
    new winston.transports.File({
      filename: path.join(logsDir, 'error.log'),
      level: 'error',
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      tailable: true,
    }),
  ],
  // Handle uncaught exceptions
  exceptionHandlers: [
    new winston.transports.File({
      filename: path.join(logsDir, 'exceptions.log'),
    }),
  ],
  // Handle unhandled rejections
  rejectionHandlers: [
    new winston.transports.File({
      filename: path.join(logsDir, 'rejections.log'),
    }),
  ],
});

// Add test context logging helper
logger.testStep = (step, details = {}) => {
  logger.info(`TEST STEP: ${step}`, details);
};

logger.testAction = (action, details = {}) => {
  logger.debug(`TEST ACTION: ${action}`, details);
};

logger.testAssertion = (assertion, details = {}) => {
  logger.info(`TEST ASSERTION: ${assertion}`, details);
};

module.exports = logger;
