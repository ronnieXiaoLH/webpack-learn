const marked = require('marked')
const hljs = require('highlight.js')

// loader 返回 buffer 或 javascript string
module.exports = function (content) {
  // 设置 code 高亮
  marked.setOptions({
    highlight: function (code, lang) {
      return hljs.highlight(lang, code).value
    }
  })
  const htmlContent = marked(content)
  // console.log(htmlContent)
  var innerContent = "`" + htmlContent + '`'
  const moduleCode = `var code = ${innerContent}; export default code;`

  // console.log(moduleCode)

  return moduleCode
}