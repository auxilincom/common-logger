# Common Logger

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
[![npm version](https://badge.fury.io/js/%40auxilin%2Feslint-config.svg)](https://badge.fury.io/js/%40auxilin%2Fcommon-logger) 
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/auxilincom/common-logger/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

[![Watch on GitHub](https://img.shields.io/github/watchers/auxilincom/common-logger.svg?style=social&label=Watch)](https://github.com/auxilincom/common-logger/watchers)
[![Star on GitHub](https://img.shields.io/github/stars/auxilincom/common-logger.svg?style=social&label=Stars)](https://github.com/auxilincom/common-logger/stargazers)
[![Tweet](https://img.shields.io/twitter/url/https/github.com/auxilincom/common-logger.svg?style=social)](https://twitter.com/intent/tweet?text=I%27m%20using%20Auxilin%20components%20to%20build%20my%20next%20product%20🚀.%20Check%20it%20out:%20https://github.com/auxilincom/common-logger)

Common logger is preconfigured console based logger. Currently based on [winston](https://github.com/winstonjs/winston).

### Installation

```
npm i @paralect/common-logger
```

### Usage

Create `logger.js` file in the root of your project:

```
const createConsoleLogger = require('@paralect/common-logger').createConsoleLogger;

module.exports = createConsoleLogger({ isDev: true });
```

By default isDev is set to `false` in logger. If set to true, two things will happen:

1. All logs output will be in plain text (vs `json` for production like environments)
2. For development environment logger will also output all `logger.debug()` messages, while none dev info and above.

### Expose logger as global object

Since logger is such a common thing, it make sense to expose it as global variable, so it simpler to use it across the project.

```
global.logger = require('./logger');

// In a place, where you need logger:
const logger = global.logger;
```
