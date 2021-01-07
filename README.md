# Reproduction

```bash
cd app-use-corejs2
# cd app-use-corejs3
yarn install
yarn serve
```

Compare the results of IE11 and Chrome

Promise.prototype.finally is not a function in IE11

## other information

### lib-with-promise-polyfill-corejs3
`lib-with-promise-polyfill-corejs3` output a lib with `es.promise` corejs3 polyfill

### app-use-corejs2
`app-use-corejs2` is a application which contains `es6.promise` and `es7.promise.finally` corejs2 polyfill

**main.js**

```js
// ie11
// 1. @vue\babel-preset-app inject 'es6.promise' 'es7.promise.finally' from corejs2

// It does not matter if transpile or not 
import {output} from '!!../../lib-with-promise-polyfill-corejs3/dist/lib-with-promise-polyfill-corejs3.common.js'
// import {output} from '../../lib-with-promise-polyfill-corejs3/dist/lib-with-promise-polyfill-corejs3.common.js'

// 2.The Promise polyfill injected by 'lib-with-promise-polyfill-corejs3' which doesn't contain 'finally'
// overwrite the global Promise polyfilled by '@vue\babel-preset-app'

// finally is not a function in ie11
// no error if we comment 'import {output} ...' in ie11
Promise.resolve().finally(() => {
  alert('finally call')
  console.log(typeof output)
})
```

### app-use-corejs3
`app-use-corejs3` is application which contains `es.promise` and `es.promise.finally` corejs3 polyfill.