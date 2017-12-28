const R = require('ramda');

process.env.NODE_ENV = 'DEVELOPMENT';

const isProduction = R.pipe(
  R.propOr('PRODUCTION', 'NODE_ENV'),
  R.equals('PRODUCTION')
);

if (isProduction(process.env)) {
  process.env.NODE_NDEBUG = 'false';
} else {
  process.env.NODE_NDBUG = undefined;
}

const assert = require('assert-plus');
const winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      colorize: true,
      depth: 4,
      humanReadableUnhandledException: true,
      level: isProduction(process.env) ? 'info' : 'debug',
      prettyPrint: true,
      showLevel: true,
      timestamp: true,
      json: true,
      stringify: true,
      stderrLevels: ['error', 'warn']
    }),
    new winston.transports.File({
      level: isProduction(process.env) ? 'info' : 'debug',
      filename: isProduction(process.env)
        ? 'criticide-log.log'
        : '../../dev-log.log',
      depth: 4,
      handleExceptions: true,
      humanReadableUnhandledException: true,
      json: true,
      maxFile: 4,
      maxsize: 500000,
      prettyPrint: true,
      tailable: true
    })
  ]
});

console.log(isProduction(process.env));

logger.log('error', 'Error Message', { k: 'value' });

logger.warn('Warning Message');
logger.info('Info Message');
logger.verbose('Verbose Message');
logger.debug('Debug Message');
logger.silly('Silly Message');
