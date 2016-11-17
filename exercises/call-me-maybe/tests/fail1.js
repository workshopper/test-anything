module.exports = function repeatCallback (n, cb) {
  if (n < 0) return
  cb()
  repeatCallback(n - 1, cb)
}
