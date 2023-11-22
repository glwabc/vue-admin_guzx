<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-05-17 19:59:04
 * @LastEditors: Huccct
 * @LastEditTime: 2023-05-17 20:09:32
-->
<script setup lang="ts">
// 接受父组件传递过来的参数
defineProps({
  // xlink:href属性值前缀
  prefix: {
    type: String,
    default: '#icon-',
  },
  // 提供使用的图标名字
  name: String,
  // 接受父组件指定的颜色
  color: {
    type: String,
    default: '',
  },
  // 接受父组件传递过来的图标宽度
  width: {
    type: String,
    default: '16px',
  },
  // 接受父组件传递过来的图标高度
  height: {
    type: String,
    default: '16px',
  },
})
</script>
<template>
  <svg :style="{ width, height }">
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>
<style lang="scss" scoped></style>

<!-- 
### SVG图标配置
在开发项目的时候经常会用到svg矢量图,而且我们使用SVG以后，页面上加载的不再是图片资源,
这对页面性能来说是个很大的提升，而且我们SVG文件比img要小的很多，放在项目中几乎不占用资源。
**安装SVG依赖插件**
```
pnpm install vite-plugin-svg-icons -D
```
**在`vite.config.ts`中配置插件**
```
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
export default () => {
  return {
    plugins: [
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]',
      }),
    ],
  }
}
```
**入口文件导入**  main.ts
```
import 'virtual:svg-icons-register'
``` 
-->