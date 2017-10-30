<template>
    <div id="tabbar">
        <div class="tabbar-item" :class="selected == 0 ? 'active' : ''" data-pos="0" @click="bindSwitchTab(0)">
            <img :src="'../../assets/weixin_resource/tabbar/ala' + (selected == 0 ? '_press' : '') + '.png'" alt="">
            <p>WeChat</p>
        </div>
        <div class="tabbar-item" :class="selected == 1 ? 'active' : ''" data-pos="1" @click="bindSwitchTab(1)">
            <img :src="'../../assets/weixin_resource/tabbar/alb' + (selected == 1 ? '_press' : '') + '.png'" alt="">
            <p>通讯录</p>
        </div>
        <div class="tabbar-item" :class="selected == 2 ? 'active' : ''" data-pos="2" @click="bindSwitchTab(2)">
            <img :src="'../../assets/weixin_resource/tabbar/alc' + (selected == 2 ? '_press' : '') + '.png'" alt="">
            <p>发现</p>
        </div>
        <div class="tabbar-item" :class="selected == 3 ? 'active' : ''" data-pos="3" @click="bindSwitchTab(3)">
            <img :src="'../../assets/weixin_resource/tabbar/ald' + (selected == 3 ? '_press' : '') + '.png'" alt="">
            <p>我的设定</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'tabbar',
    data(){
        return {
            selected: 0
        }
    },
    methods: {
        bindSwitchTab: function(pos){
            this.selected = pos;
        }
    }
}
</script>

<style scoped>
#tabbar{
      width: 100%;
      display: flex;
      padding: 0.2rem 0;
      border-top: 0.5px solid #ccc;
      background-color: #fff;
      justify-content: space-around; 
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 9999;
 }
 .tabbar-item{
      text-align: center;
      width: auto;
      font-size: 14px;
      color: #9A9A9A;
 }
 .tabbar-item.active{
     color: #45C01A;
 }
 .tabbar-item img{
     vertical-align: middle;
     width: 0.8rem;
     height: auto;
     margin-bottom: 4px;
 }
</style>
