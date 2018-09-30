const cache = {};
module.exports = function(str) {
  if (!cache.hasOwnProperty(str)) cache[str] = 0;
  cache[str]++;
  return cache;
}