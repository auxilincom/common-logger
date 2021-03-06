# Common Logger

[![Auxilin.com — Production ready Node, React starter kit for building products at a warp speed](https://raw.githubusercontent.com/auxilincom/component-template/master/assets/cover-black.png)](https://github.com/auxilincom/auxilin)

[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
[![npm version](https://badge.fury.io/js/%40auxilin%2Fcommon-logger.svg)](https://badge.fury.io/js/%40auxilin%2Fcommon-logger) 
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/auxilincom/common-logger/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![David Dependancy Status](https://david-dm.org/auxilincom/common-logger.svg)](https://david-dm.org/auxilincom/common-logger)

[![Watch on GitHub](https://img.shields.io/github/watchers/auxilincom/common-logger.svg?style=social&label=Watch)](https://github.com/auxilincom/common-logger/watchers)
[![Star on GitHub](https://img.shields.io/github/stars/auxilincom/common-logger.svg?style=social&label=Stars)](https://github.com/auxilincom/common-logger/stargazers)
[![Follow](https://img.shields.io/twitter/follow/auxilin.svg?style=social&label=Follow)](https://twitter.com/auxilin)
[![Tweet](https://img.shields.io/twitter/url/https/github.com/auxilincom/common-logger.svg?style=social)](https://twitter.com/intent/tweet?text=I%27m%20using%20Auxilin%20components%20to%20build%20my%20next%20product%20🚀.%20Check%20it%20out:%20https://github.com/auxilincom/common-logger)
[![@auxilin](https://img.shields.io/badge/%F0%9F%92%AC%20Telegram-t.me/auxilin-blue.svg)](https://t.me/auxilin)

Common logger is preconfigured console based logger. Currently based on [winston](https://github.com/winstonjs/winston).

## Installation

```bash
npm i @auxilin/common-logger
```

## Quick example

Create `logger.js` file in the root of your project:

```javascript
const {
  format,
  createConsoleLogger,
} = require('@auxilin/common-logger');

module.exports = createConsoleLogger({
  logToFiles: true,
  logDir: __dirname,
  format: format.combine(
    format.splat(),
    format.simple(),
  ),
});
```

## Options:

Available variables:

|Name|Default|Description|
|:--:|:--:|:----------|
|**`logToFiles`**|`false`|If `false` then log to console, instead write logs to the files `info.log`, `errors.log`, `exceptions.log`.|
|**`logDir`**|`resolve(appRoot.path, './logs')`|Directory where to save log files.|
|**`level`**|`info`|Log only if `info.level` less than or equal to this level. Available levels: `error`, `warn`, `info`, `verbose`, `debug`, `silly`|
|**`format`**|`format.combine(format.timestamp(), format.json())`|Format of logs.|

## Expose logger as global object

Since logger is such a common thing, it make sense to expose it as global variable, so it simpler to use it across the project.

```javascript
global.logger = require('./logger');

// In a place, where you need logger:
const logger = global.logger;
```

## Change Log

This project adheres to [Semantic Versioning](http://semver.org/).
Every release is documented on the Github [Releases](https://github.com/auxilincom/common-logger/releases) page.

## License

Node-mongo is released under the [MIT License](https://github.com/auxilincom/common-logger/blob/master/LICENSE).

## Contributing

Please read [CONTRIBUTING.md](https://github.com/auxilincom/common-logger/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/ezhivitsa"><img src="https://avatars2.githubusercontent.com/u/6461311?v=4" width="100px;" alt="Evgeny Zhivitsa"/><br /><sub><b>Evgeny Zhivitsa</b></sub></a><br /><a href="https://github.com/auxilincom/eslint-config/commits?author=ezhivitsa" title="Code">💻</a> <a href="https://github.com/auxilincom/eslint-config/commits?author=ezhivitsa" title="Documentation">📖</a> <a href="#ideas-ezhivitsa" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/anorsich"><img src="https://avatars3.githubusercontent.com/u/681396?v=4" width="100px;" alt="Andrew Orsich"/><br /><sub><b>Andrew Orsich</b></sub></a><br /><a href="#review-anorsich" title="Reviewed Pull Requests">👀</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
