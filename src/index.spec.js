const { readFileSync, existsSync } = require('fs');
const { resolve } = require('path');

const del = require('del');
const chai = require('chai');

const { createConsoleLogger } = require('./index');

chai.should();

const tryGetFile = (path, resolveFn) => {
  setTimeout(() => {
    if (existsSync(path)) {
      const buffer = readFileSync(path);
      resolveFn(buffer);
    } else {
      tryGetFile(path, resolveFn);
    }
  }, 100);
};

const waitFile = (path) => {
  return new Promise((resolveFn) => {
    tryGetFile(path, resolveFn);
  });
};

describe('common logger', () => {
  let logger;

  before(async () => {
    logger = createConsoleLogger({
      isDev: false,
      logDir: resolve('./logs'),
    });
  });

  after(() => {
    del.sync([resolve('./logs/**')], { force: true });
  });

  it('should successfully log info', async () => {
    logger.info('test info');
    const buffer = await waitFile(resolve('./logs/combined.log'));
    const content = buffer.toString();
    content.should.includes('"message":"test info","level":"info"');
  });

  it('should successfully log unhandled error', async () => {
    logger.error('thrown error');
    const buffer = await waitFile(resolve('./logs/errors.log'));
    const content = buffer.toString();
    content.should.be.includes('"message":"thrown error","level":"error"');
  });
});
