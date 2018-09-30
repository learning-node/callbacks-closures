module.exports = function(func) {
  return function(...args) {
    return func(func(...args));
  }
}