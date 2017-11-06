<template>
    <header id="yHeader">
        <span @click="back" 
              v-show="hCont.back" 
              class="back icon-left-open-1"></span>
        <span class="title">{{hCont.title}}</span>
        <slot name="right"></slot>
        <slot name="plusList"></slot>
    </header>
</template>

<script>
/*
 *  hCont: Object
 *  {
 *      back: boolean, //是否显示返回箭头
 *      title: string
 *  }
 */
export default {
    name: 'yHeader',
    props: {
        hCont: Object
    },
    methods: {
        back(){
            history.back();
        }
    }
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
    background-color: #444;
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
.back{
    border-right: 0.5px solid #333;
    margin-right: 0.2rem;
}
.back:active{
    background-color: rgba(0, 0, 0, .2);
}
.back::before{
    margin-left: 0;
    margin-right: 0.3rem;
}
</style>
