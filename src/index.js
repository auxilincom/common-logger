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
}) => {
  if (logToFiles && !existsSync(logDir)) {
    mkdirSync(logDir);
  }

  const loggerTransports = !logToFiles
    ? [new transports.Console()]
    : [
      new transports.File({
        filename: resolve(logDir, './errors.log'),
        level: 'error',
        maxsize: 5242880, // 5MB
        maxFiles: 5,
      }),
      new transports.File({
        filename: resolve(logDir, './combined.log'),
        level: 'info',
        maxsize: 5242880, // 5MB
        maxFiles: 5,
      }),
    ];

  const exceptionTransports = !logToFiles
    ? [new transports.Console()]
    : [
      new transports.File({
        filename: resolve(logDir, './exceptions.log'),
        maxsize: 5242880, // 5MB
        maxFiles: 5,
      }),
    ];

  const logger = createLogger({
    exitOnError: false,
    format: logToFiles
      ? format.combine(
        format.timestamp(),
        format.json(),
      )
      : format.combine(
        format.colorize(),
        format.splat(),
        format.simple(),
      ),
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
