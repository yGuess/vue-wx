<template>
    <header id="yHeader">
        <slot name="back"></slot>
        <span class="title">WeChat</span>
        <slot name="right"></slot>
    </header>
</template>

<script>
export default {
    name: 'yHeader'
}
</script>

<style scope>
header{
    overflow: hidden;
    position: fixed;
    z-index: 9999;
    width: 100%;
    height: 1.25rem;
    line-height: 1.25rem;
    background-color: #666;
    color: #fff;
    font-size: 18px;
    padding-left: 0.4rem;
    box-sizing: border-box;
}
header .title{
    font-weight: 500;
    display: inline-block;
}
header img{
    width: 0.9rem;
    padding: 0.175rem 0;
}
header img:active{
    background-color: rgba(0, 0, 0, .2);
}
</style>
