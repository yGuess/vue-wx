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
    position: fixed;
    width: 100%;
    line-height: 18px;
    background-color: #666;
    padding: 0.4rem;
    color: #fff;
    font-size: 18px;
}
.title{
    font-weight: 500;
}
</style>
