/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-05-17 20:10:16
 * @LastEditors: Huccct
 * @LastEditTime: 2023-05-21 13:57:55
 */
import type { App } from 'vue'
import * as components from './components'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const install = function (app: App) {
  // 注册项目全部的全局组件
  // Object.keys()?????
  Object.entries(components).forEach(([key, value]) => {
    // 注册为全局组件
    app.component(key, value)
  })
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}

export default install
export * from './components'
