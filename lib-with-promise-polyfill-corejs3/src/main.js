let output = 1

// inject Promise polyfill from corejs3 without 'finally'
Promise.resolve().then(function () {
  output = 2
})

export {
  output
}