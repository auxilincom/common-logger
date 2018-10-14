# Common Logger

[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors)
[![npm version](https://badge.fury.io/js/%40auxilin%2Feslint-config.svg)](https://badge.fury.io/js/%40auxilin%2Fcommon-logger) 
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/auxilincom/common-logger/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

[![Watch on GitHub](https://img.shields.io/github/watchers/auxilincom/common-logger.svg?style=social&label=Watch)](https://github.com/auxilincom/common-logger/watchers)
[![Star on GitHub](https://img.shields.io/github/stars/auxilincom/common-logger.svg?style=social&label=Stars)](https://github.com/auxilincom/common-logger/stargazers)
[![Tweet](https://img.shields.io/twitter/url/https/github.com/auxilincom/common-logger.svg?style=social)](https://twitter.com/intent/tweet?text=I%27m%20using%20Auxilin%20components%20to%20build%20my%20next%20product%20🚀.%20Check%20it%20out:%20https://github.com/auxilincom/common-logger)

Common logger is preconfigured console based logger. Currently based on [winston](https://github.com/winstonjs/winston).

## Installation

```bash
npm i @auxilin/common-logger
```

## Quick example

Create `logger.js` file in the root of your project:

```javascript
const createConsoleLogger = require('@auxilin/common-logger').createConsoleLogger;

module.exports = createConsoleLogger({ isDev: true, logDir: __dirname, });
```

By default isDev is set to `false` in logger. If set to true, two things will happen:

1. All logs output will be in plain text in the console (vs `json` in the corresponding files for production like environments)
2. For development environment logger will also output all `logger.debug()` messages, while none dev info and above.

If `isDev` is set to `false` we write logs to the files `info.log`, `errors.log`, `exceptions.log`. You can set location of this files using option `logDir`.

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
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/6461311?v=4" width="100px;"/><br /><sub><b>Evgeny Zhivitsa</b></sub>](https://github.com/ezhivitsa)<br />[💻](https://github.com/auxilincom/eslint-config/commits?author=ezhivitsa "Code") [📖](https://github.com/auxilincom/eslint-config/commits?author=ezhivitsa "Documentation") [🤔](#ideas-ezhivitsa "Ideas, Planning, & Feedback") | [<img src="https://avatars3.githubusercontent.com/u/681396?v=4" width="100px;"/><br /><sub><b>Andrew Orsich</b></sub>](https://github.com/anorsich)<br />[👀](#review-anorsich "Reviewed Pull Requests") |
| :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
