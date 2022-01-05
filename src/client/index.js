/**
 * 为客户端添加附加事件
 */
import React from 'react'
import ReactDOM from 'react-dom'
// import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import routers from '../share/routers'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import store from './createStore'

// 使用 hydrate 对组件进行添加附加事件，可以对已经存在的组件进行复用，不用重新渲染
// 第一个参数是需要渲染的组件
// 第二个参数是要渲染到哪里去
// hydrate(<Home />, document.getElementById('root'))
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      {renderRoutes(routers)}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'))