### LiveDemo
https://nikami.github.io/react-hw/

### Installation

React-HW requires [Node.js](https://nodejs.org/) v10.14.1+ to run.

#### Install the dependencies. 
```sh
$ npm install -d
```

#### WARNING: For node-sass you need to install [Python](https://www.python.org/downloads/) and node-gyp

```sh
$ npm i node-gyp -g
```

#### If you have problems with pre-commit hook. Try to install lint-staged globally.

```sh
$ npm i lint-staged -g
```

#### Start dev server on predefined address: http://localhost:3000

```sh
$ npm start
```

#### For build. Bundle in dist folder.

```sh
$ npm build
```

#### For Jest Tests

```sh
$ npm test
$ npm test:watch
$ npm test:coverage
```

#### For e2e Tests

Make sure you have Java(_Runtime Environment JRE_) installed

You can check by typing
`
java -version
`
into your terminal and you should see your version number if you have Java installed.

> How do I install Java? https://www.java.com/en/download/help/download_options.xml
> pick your Operating System and follow the instructions

Then run e2e script:

```sh
$ npm e2e
```

#### For linting

```sh
$ npm eslint
$ npm stylelint
```

### Todos

 - Include CSS Modules?
