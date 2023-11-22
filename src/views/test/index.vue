
<script setup lang="ts">

</script>
<template>
    <h1>SVG测试</h1>
    <div>
        <!-- 测试SVG图标使用 -->
        <!-- SVG：图标外层容器节点，内部需要与use标签结合使用 -->
        <svg style="width: 30px;height: 30px;">
            <!-- xlink:href指定用哪一个图标，属性值务必 #icon-图标名字 -->
            <!-- use标签fill属性可以设置图标的颜色 -->
            <use xlink:href="#icon-phone" fill="red"></use>
        </svg>
        <br>
        <svg style="width: 30px;height: 30px;">
            <use xlink:href="#icon-lock" fill="blue"></use>
        </svg>
    </div>
    <h1>SVG-封装全局组件</h1>
    <div>
        <DefPagination></DefPagination>
        <DefSvgIcon name="phone" width="36px" height="36px" color="red"></DefSvgIcon>
    </div>
    <div>
        <h2>测试scss全局变量</h2>
    </div>
</template>
<style lang="scss" scoped>
div {
    h2 {
        color: $color;
    }
}

</style>
