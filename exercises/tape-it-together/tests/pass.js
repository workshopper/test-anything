module.exports = function (str, allcaps, char) {
  if (allcaps) str = str.toUpperCase()
  char = char || '*'
  return '~' + char + '~' + str + '~' + char + '~'
}
