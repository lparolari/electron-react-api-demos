# Electron React API Demos

![Test](https://github.com/lparolari/electron-react-api-demos/workflows/Test/badge.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> [Demo download 🚀](https://github.com/lparolari/electron-react-api-demos/releases/latest)

Electron React API Demos is a simple application written in
[Electron.js](https://www.electronjs.org/) +
[React.js](https://reactjs.org/) with
[TypeScript](https://www.typescriptlang.org/) that shows by examples
some of the main features from Electron.js framework.

> If you want to **learn** more please refer to the
> [documentation](docs/README.md) (written in italian). You will find
> a comprehensive guide through the demo and the Electron.js
> framework.

## Table of Contents

- [Feeatures](#features)
- [Documentation](#documentation)
- [Usage](#usage)
- [Build & Install](#build--install)
- [Contributions](#contributions)
- [Author](#author)
- [Lincese](#license)

## Features

- **Cross-platform with Electron.js**. Electron.js is a cross-platform
  framework for building desktop apps. Basically, it wraps a web
  application in an executable environment among many operating
  system.

- **UI with React.js**. React.js is a JavaScript library for building
  user interfaces. It empowers the creation of UIs in a declarative
  manner and tackles the complexity with by building components.

- **Type safety with TypeScript**. All the source code is written in
  TypeScript which ensures readability and, of course, type safety.

- **Demo by examples**. The demo is a self-contained tutorial by
  examples that shows firsly how to use Electron.js API by
  implementing many Electron.js widgets and secondly how to integrate
  all this stuff in a real-word scenario with React.js.

- **Electron.js widgets**. Many Electron.js widgets are implemented in
  this demo. See the following table.

Implemented widgets

|     | Widget                       | Category      |
| --- | ---------------------------- | ------------- |
| ✅  | Framed window                | Windows       |
| ✅  | Frameless window             | Windows       |
| ✅  | Managed window               | Windows       |
| ✅  | Events window                | Windows       |
| ✅  | Application menu             | Menu          |
| ✅  | Context menu                 | Menu          |
| ✅  | File manager                 | Native UI     |
| ✅  | External resources           | Native UI     |
| ✅  | Basic/advanced notifications | Native UI     |
| ✅  | Tray                         | Native UI     |
| ✅  | Async messages               | Communication |
| ✅  | System/app info              | System        |
| ✅  | Copy & paste                 | System        |
| ✅  | Screenshot                   | Media         |

## [Documentation](docs/README.md)

The project is documented through a report available in
[pdf](https://github.com/lparolari/electron-react-api-demos/releases/latest/download/docs.pdf)
format or [online](docs/README.md) on GitHub.

The documentation covers three high-level topics:

- [Electron.js features](docs/README.md#electronjs);

- [Demo & implemented widgets](docs/README.md#demo);

- [My opinion about the framework](docs/README.md#conclusione).

## [Download](https://github.com/lparolari/electron-react-api-demos/releases/latest)

Download the binaries for your operative system from
[release](https://github.com/lparolari/electron-react-api-demos/releases/latest)
page.

## Usage

1. Clone the repository

```bash
git clone git@github.com:lparolari/electron-react-api-demos.git
cd electron-react-api-demos
```

2. Install dependencies

```bash
yarn
```

3. Run the application

```bash
yarn start        # development

yarn build        # production
yarn start:prod
```

## Build & Install

**Intall precompiled package**

Download the app from
[releases](https://github.com/lparolari/electron-react-api-demos/releases/latest)
page.

**Build locally**

You can build binaries by running `yarn package`. Many flavors of this
commands ara avaiable, see the list below.

1. Windows

```bash
yarn package-win
```

Builds a package for Windows (x64) system. Provides a `.exe` file.

2. MacOS

```bash
yarn package-mac
```

Builds a package for MacOS system. Provides a `.dmg` file. Please note
that this was not tested.

3. Linux

```bash
yarn package-linux
```

Builds a `.deb` and `.AppImage` binaries for Linux platforms. Note:
you can add also `.rpm` target in `package.json` but it is disabled by
default as it required many other dependencies on the local machine.

**Build with Docker**

The following comman allows to easily build an Electron.js application
from Linux for Windows without installing any dependency. Further
information on building binaries with docker are available at
[electron.build/multi-platform-build#docker](electron.build/multi-platform-build#docker)

```bash
docker run --rm -ti \
    --env-file <(env | grep -iE 'DEBUG|NODE_|ELECTRON_|YARN_|NPM_|CI|CIRCLE|TRAVIS_TAG|TRAVIS|TRAVIS_REPO_|TRAVIS_BUILD_|TRAVIS_BRANCH|TRAVIS_PULL_REQUEST_|APPVEYOR_|CSC_|GH_|GITHUB_|BT_|AWS_|STRIP|BUILD_') \
    --env ELECTRON_CACHE="/root/.cache/electron" \
    --env ELECTRON_BUILDER_CACHE="/root/.cache/electron-builder" \
    -v ${PWD}:/project \
    -v ${PWD##*/}-node-modules:/project/node_modules \
    -v ~/.cache/electron:/root/.cache/electron \
    -v ~/.cache/electron-builder:/root/.cache/electron-builder \
    electronuserland/builder:wine /bin/bash -c "yarn && yarn package-win"
```

## Contributions

Every pull-request is welcome!

## Author

> Luca Parolari, 1236601, luca.parolari@studenti.unipd.it \
> Corso di Mobile Programming & Multimedia \
> Dipartimento di Matematica \
> Università degli Studi di Padova

Luca Parolari

- Email: [luca.parolari23@gmail.com](mailto:luca.parolari23@gmail.com)
- GitHub: [@lparolari](https://github.com/lparolari)
- Telegram: [@lparolari](https://t.me/lparolari)

## License

This project is MIT licensed. See [LICENSE](LICENSE) file.
