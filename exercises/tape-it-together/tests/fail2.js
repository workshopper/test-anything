module.exports = function (str, allcaps, char) {
  char = char || '*'
  return '~' + char + '~' + str + '~' + char + '~'
}
