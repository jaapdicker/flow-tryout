## REACT BASIC STARTER KIT

#### Webpack

- development with react-hot-loader
- production with uglify
- production node server

#### Redux
- react-redux
- redux
- redux-logger
- redux-devtools

#### Babel

#### Linters
- eslint (.eslintrc + .eslintignore)
- flow (.flowconfig)
_______

###### Notable things:
- when adding a new package, add it too in libs/libdefs.js like this:

```declare module 'PACKAGE-NAME' { declare var exports: any; }```

- maps inside `./src` are automatically recognized by eslint/flow, just use the name of the dir


Startings:
- dev: `npm start`
- build production node server: `npm run build:server`
- build production bundle: `npm run build:client`
- start production server: `npm run start:dist`
# Label A Assignment
