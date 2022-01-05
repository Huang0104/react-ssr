/**
 * 代码优化
 */

// 引入需要渲染的组件
import Home from '../share/pages/Home/Home'
// 引入 renderToString
import { renderToString } from 'react-dom/server'
import React from 'react'

export default () => {
  // 使用 rebderToString() 方法将 React 组件转为 HTML
  const content = renderToString(<Home />)
  return `
  <html>
    <head>
      <title>React SSR</title>
    </head>
    <body>
      <div id='root'>${content}</div>
      <script src='bundle.js'></script>
    </body>
  </html>
`
}