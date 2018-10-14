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
  isDev = false,
  logDir = defaultLogDir,
}) => {
  if (!isDev && !existsSync(logDir)) {
    mkdirSync(logDir);
  }

  const loggerTransports = isDev
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
      }),
    ];

  const exceptionTransports = isDev
    ? [new transports.Console()]
    : [
      new transports.File({
        filename: resolve(logDir, './exceptions.log'),
      }),
    ];

  const logger = createLogger({
    exitOnError: false,
    format: isDev
      ? format.combine(
        format.colorize(),
        format.splat(),
        format.simple(),
      )
      : format.combine(
        format.timestamp(),
        format.json(),
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
