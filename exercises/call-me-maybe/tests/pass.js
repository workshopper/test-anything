module.exports = function repeatCallback (n, cb) {
  if (n < 1) return
  cb()
  repeatCallback(n - 1, cb)
}
