const dateFormat = () => {
  return new Date().toLocaleDateString()
}

const priceFormat = () => {
  return '100.00'
}

module.exports = {
  dateFormat,
  priceFormat
}