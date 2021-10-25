class AutoUploadPlugin {
  constructor (options) {
    this.options = options
  }

  apply (compiler) {
    compiler.hooks.afterEmit.tapAsync('AutoUploadPlugin', (compilation, callback) => {
      console.log('内容已经上传到服务器了')
      callback()
    })
  }
}

module.exports = AutoUploadPlugin