module.exports = {
  presets: [
    ['@babel/preset-env', {
      // false
      // usage
      // entry
      useBuiltIns: 'usage',
      corejs: 3
    }],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ]
}
