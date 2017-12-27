const winston = require('winston');

const configuration = {
  transports: [
    new winston.transports.Console({
      level: process.env.NODE_ENV === 'development' ? 'debug' : 'error',
      colorize: true,
      prettyPrint: true,
      depth: 4,
      timestamp: process.env.NODE_ENV === 'development'
    }),
    new winston.transports.File({
      depth: 4,
      filename:
        process.env.NODE_ENV === 'development'
          ? '../../dev-log.log'
          : 'criticide-log.log',
      handleExceptions: true,
      humanReadableUnhandledException: true,
      level: process.env.NODE_ENV === 'development' ? 'silly' : 'warn',
      maxFile: 4,
      json: true,
      maxsize: 500000,
      prettyPrint: true,
      tailable: true
    })
  ]
};

/**
 * Provides a logger that is configured for the runtime environment.
 * @return {winston.LoggerInstance | *}
 */
const logProvider = () => {
  return new winston.Logger(configuration);
};

module.exports = logProvider;
