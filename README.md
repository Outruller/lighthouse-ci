# Lighthouse CI
[![All Contributors](https://img.shields.io/badge/all_contributors-6-orange.svg?style=flat-square)](#contributors)
[![npm version](https://badge.fury.io/js/lighthouse-ci.svg)](https://badge.fury.io/js/lighthouse-ci)
[![npm](https://img.shields.io/npm/dt/lighthouse-ci.svg)](https://www.npmjs.com/package/lighthouse-ci)
[![Known Vulnerabilities](https://snyk.io/test/github/andreasonny83/lighthouse-ci/badge.svg?targetFile=package.json)](https://snyk.io/test/github/andreasonny83/lighthouse-ci?targetFile=package.json)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

> A useful wrapper around Google Lighthouse CLI

<img alt="Lighthouse CI logo" src="https://raw.githubusercontent.com/andreasonny83/lighthouse-ci/master/logo.png" width="800px">

<img src="https://raw.githubusercontent.com/andreasonny83/lighthouse-ci/master/lighthouse-cli.gif" width="700">

## Install

```
$ npm install -g lighthouse-ci
```

## Table of Contents

- [Lighthouse CI](#lighthouse-ci)
  - [Install](#install)
  - [Table of Contents](#table-of-contents)
  - [Usage](#usage)
  - [CLI](#cli)
  - [Lighthouse flags](#lighthouse-flags)
  - [Chrome flags](#chrome-flags)
  - [Contributors](#contributors)
  - [License](#license)

## Usage

```sh
lighthouse-ci --help
```

## CLI

```
$ lighthouse-ci --help

  Usage
    $ lighthouse-ci <target-url>

  Powershell examples
    $ lighthouse-ci https://example.com/
    $ lighthouse-ci https://example.com/ --report="<file path>"
    $ lighthouse-ci https://example.com/ --validate="{`\`"audits`\`":[{`\`"id`\`":`\`"first-contentful-paint`\`"`,`\`"warn`\`":3000`,`\`"error`\`":5000}]}"
    $ lighthouse-ci https://example.com/ --validate="{\`"categories\`":[{\`"id\`":\`"performance\`"`,\`"warn\`":0.5`,\`"error\`":0.25}]}"

  Options
    --report=<file path>          HTML report file path
    --validate="<json>"             JSON string with validation
      {
        "audits: [
          {"id": "<audit id>", "expect": <boolean>},
          {"id": "<audit id>", "warn": <number 0..1>, "error": <number 0..1>}
        ],
        "categories": [
          {"id": "<category id>", "warn": <number 0..1>, "error": <number 0..1>}
        ],
      }
```

## Lighthouse flags

In addition to listed `lighthouse-ci` configuration flags, it is also possible to pass any native `lighthouse` flags.

To see the full list of available flags, please refer to the official [Google Lighthouse documentation](https://github.com/GoogleChrome/lighthouse#cli-options).

eg.

```sh
# Launches browser, collects artifacts, saves them to disk (in `./test-report/`) and quits
$ lighthouse-ci --gather-mode=test-report https://my.website.com
# skips browser interaction, loads artifacts from disk (in `./test-report/`), runs audits on them, generates report
$ lighthouse-ci --audit-mode=test-report https://my.website.com
```

### Chrome flags

In addition of the lighthouse flags, you can also specify extra chrome flags
comma separated.

eg.

```sh
$ lighthouse-ci --chrome-flags=--cellular-only,--force-ui-direction=rtl https://my.website.com
```

eg.

```sh
$ lighthouse-ci --emulated-form-factor desktop --seo 92 https://my.website.com
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/8806300?v=4" width="100px;"/><br /><sub><b>Andrea Sonny</b></sub>](https://about.me/andreasonny83)<br />[💬](#question-andreasonny83 "Answering Questions") [💻](https://github.com/andreasonny83/lighthouse-ci/commits?author=andreasonny83 "Code") [📖](https://github.com/andreasonny83/lighthouse-ci/commits?author=andreasonny83 "Documentation") | [<img src="https://avatars1.githubusercontent.com/u/1007970?v=4" width="100px;"/><br /><sub><b>Celso Santa Rosa</b></sub>](https://snap-ci.com)<br />[💻](https://github.com/andreasonny83/lighthouse-ci/commits?author=celsosantarosa "Code") | [<img src="https://avatars3.githubusercontent.com/u/3516389?v=4" width="100px;"/><br /><sub><b>Ben Hammond</b></sub>](https://github.com/BenAHammond)<br />[🐛](https://github.com/andreasonny83/lighthouse-ci/issues?q=author%3ABenAHammond "Bug reports") [💻](https://github.com/andreasonny83/lighthouse-ci/commits?author=BenAHammond "Code") | [<img src="https://avatars1.githubusercontent.com/u/12739106?v=4" width="100px;"/><br /><sub><b>Alex Tenepere</b></sub>](https://github.com/alexecus)<br />[🐛](https://github.com/andreasonny83/lighthouse-ci/issues?q=author%3Aalexecus "Bug reports") [💻](https://github.com/andreasonny83/lighthouse-ci/commits?author=alexecus "Code") | [<img src="https://avatars0.githubusercontent.com/u/23330646?v=4" width="100px;"/><br /><sub><b>Connor Markwell</b></sub>](https://github.com/9reeno)<br />[🐛](https://github.com/andreasonny83/lighthouse-ci/issues?q=author%3A9reeno "Bug reports") [💻](https://github.com/andreasonny83/lighthouse-ci/commits?author=9reeno "Code") | [<img src="https://avatars0.githubusercontent.com/u/8846301?v=4" width="100px;"/><br /><sub><b>Michael Griffiths</b></sub>](https://ikigeg.com)<br />[💻](https://github.com/andreasonny83/lighthouse-ci/commits?author=ikigeg "Code") |
| :---: | :---: | :---: | :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

MIT

---

Created with 🦄 by [andreasonny83](https://about.me/andreasonny83)
