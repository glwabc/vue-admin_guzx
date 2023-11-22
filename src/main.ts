/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-05-17 14:32:02
 * @LastEditors: Huccct
 * @LastEditTime: 2023-05-22 22:08:06
 */
import { createApp } from 'vue'
import App from '@/App.vue'
// svg插件需要配置代码
import 'virtual:svg-icons-register'
// 引入自定义插件对象：注册整个项目全局组件
import globalComponent from '@/components/index'
import 'element-plus/theme-chalk/el-notification.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
// 引入全局样式
import '@/styles/index.scss'
import router from './router'
import pinia from './store'
import './permission'
import { isHasButton } from './directive/has'

const app = createApp(App) // 获取应用实例对象
isHasButton(app)
app.use(globalComponent)
app.use(router)
app.use(pinia)
app.mount('#app') // 将应用挂载到挂载点上
// createApp(App).mount('#app')  // 写法二

// ## 三、项目集成
// ### 3.1集成element-plus
// 硅谷甄选运营平台,UI组件库采用的element-plus，因此需要集成element-plus插件！！！
// 官网地址:https://element-plus.gitee.io/zh-CN/
// ```
// pnpm install element-plus @element-plus/icons-vue
// ```
// Element Plus 用法
// !!!! 完整引入
// 如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。
// **入口文件main.ts全局安装element-plus,element-plus默认支持语言英语设置为中文**
// ```
// import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css'
// //@ts-ignore忽略当前文件ts类型的检测，否则有红色提示(打包会失败)
// import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// app.use(ElementPlus, {
//     locale: zhCn
// })
// ```
// **Element Plus全局组件类型声明**
// 如果您使用 Volar，请在 tsconfig.json 中通过 compilerOptions.type 指定全局组件类型。
// ```
// // tsconfig.json
// {
//   "compilerOptions": {
//     // ...
//     "types": ["element-plus/global"]
//   }
// }
// ```
// 配置完毕可以测试element-plus组件与图标的使用.
//
// !!!! 按需导入#
// 您需要使用额外的插件来导入要使用的组件。

// 自动导入   推荐#
// 首先你需要安装unplugin-vue-components 和 unplugin-auto-import这两款插件

// npm install -D unplugin-vue-components unplugin-auto-import
// 然后把下列代码插入到你的 Vite 或 Webpack 的配置文件中
// // vite.config.ts
// import { defineConfig } from 'vite'
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// export default defineConfig({
//   // ...
//   plugins: [
//     // ...
//     AutoImport({
//       resolvers: [ElementPlusResolver()],
//     }),
//     Components({
//       resolvers: [ElementPlusResolver()],
//     }),
//   ],
// })

// ### 3.3环境变量的配置
// **项目开发过程中，至少会经历开发环境、测试环境和生产环境(即正式环境)三个阶段。不同阶段请求的状态
// (如接口地址等)不尽相同，若手动切换接口地址是相当繁琐且易出错的。于是环境变量配置的需求就应运而生，
// 我们只需做简单的配置，把环境状态切换的工作交给代码。**

// 开发环境（development）
// 顾名思义，开发使用的环境，每位开发人员在自己的dev分支上干活，开发到一定程度，同事会合并代码，进行联调。

// 测试环境（testing）
// 测试同事干活的环境啦，一般会由测试同事自己来部署，然后在此环境进行测试

// 生产环境（production）
// 生产环境是指正式提供对外服务的，一般会关掉错误报告，打开错误日志。(正式提供给客户使用的环境。)

// 注意:一般情况下，一个环境对应一台服务器,也有的公司开发与测试环境是一台服务器！！！

// 项目根目录分别添加 开发、生产和测试环境的文件!
// ```
// .env.development
// .env.production
// .env.test
// ```
// 文件内容
// 略
// 配置运行命令：package.json
//     "build:test": "vue-tsc && vite build --mode test",
//     "build:pro": "vue-tsc && vite build --mode production",

// 通过import.meta.env获取环境变量
// 例如：console.log(import.meta.env)
