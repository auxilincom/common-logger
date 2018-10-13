const winston = require('winston');

module.exports.createConsoleLogger = ({ isDev = false }) => {  
  const logger = winston.createLogger({
    level: isDev ? 'debug' : 'info',
    format: isDev ? winston.format.colorize() : winston.format.json(),
    transports: [
      new transports.Console(),
    ],
    exceptionHandlers: [
      new transports.Console(),
    ]
  });

  logger.debug('[logger] Configured console based logger');

  return logger;
};
