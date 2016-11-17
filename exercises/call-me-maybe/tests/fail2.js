module.exports = function repeatCallback (n, cb) {
  if (n < 2) return
  cb()
  repeatCallback(n - 1, cb)
}
