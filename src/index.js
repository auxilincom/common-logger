const { existsSync, mkdirSync } = require('fs');
const { resolve } = require('path');

const appRoot = require('app-root-path');
const {
  createLogger,
  format,
  transports,
  config,
} = require('winston');

const defaultLogDir = resolve(appRoot.path, './logs');

module.exports.createConsoleLogger = ({
  logToFiles = false,
  logDir = defaultLogDir,
  level = 'info',
  format: logFormat = format.combine(
    format.timestamp(),
    format.json(),
  ),
}) => {
  if (logToFiles && !existsSync(logDir)) {
    mkdirSync(logDir);
  }

  const fileOptions = {
    maxsize: 5242880, // 5MB
    maxFiles: 5,
  };

  const loggerTransports = !logToFiles
    ? [new transports.Console()]
    : [
      new transports.File({
        filename: resolve(logDir, './errors.log'),
        level: 'error',
        ...fileOptions,
      }),
      new transports.File({
        filename: resolve(logDir, './combined.log'),
        level: 'info',
        ...fileOptions,
      }),
    ];

  const exceptionTransports = !logToFiles
    ? [new transports.Console()]
    : [
      new transports.File({
        filename: resolve(logDir, './exceptions.log'),
        ...fileOptions,
      }),
    ];

  const logger = createLogger({
    exitOnError: false,
    level,
    format: logFormat,
    levels: config.syslog.levels,
    transports: loggerTransports,
    exceptionHandlers: exceptionTransports,
  });

  // create a stream object with a 'write' function that will be used by `morgan`
  logger.stream = {
    write(message, encoding) {
      logger.info(message);
    },
  };

  logger.debug('[logger] Configured console based logger');

  return logger;
};
