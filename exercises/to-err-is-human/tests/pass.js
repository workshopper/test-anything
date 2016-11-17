module.exports = function (food) {
  if (food === 'chocolate') {
    throw new Error('No, chocolate is dangerous!')
  } else {
    return 'yum'
  }
}
