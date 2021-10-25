// import 'style-loader!css-loader!../css/index.css'
import '../css/index.css'
import '../css/component.less'

import bgImg from '../img/1.jpg'

function component () {
  const element = document.createElement('div')
  element.innerHTML = ['hello', 'world'].join(' ')
  element.className = 'content'

  const img = new Image()
  img.src = bgImg
  element.appendChild(img)

  const bgEl = document.createElement('div')
  bgEl.className = 'bg-img'
  element.appendChild(bgEl)

  const iEl = document.createElement('i')
  iEl.className = 'iconfont iconmoney'
  element.appendChild(iEl)

  return element
}

document.body.appendChild(component())