module.exports = function (str, allcaps, char) {
  str = 'wat the hell'
  if (allcaps) str = str.toUpperCase()
  char = char || '*'
  return '~' + char + '~' + str + '~' + char + '~'
}
