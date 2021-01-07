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