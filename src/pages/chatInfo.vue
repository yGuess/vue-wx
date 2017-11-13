<template>
    <div id="chatInfo">
        <yHeader :h-cont="hCont"></yHeader>
        <div class="list-friends">
            <ul class="clearfix">
                <li>
                    <img src="../../assets/weixin_resource/my_avatar.jpg" alt="avatar">
                    <p>你猜</p>
                </li>
                <li>
                    <img src="../../assets/weixin_resource/my_avatar.jpg" alt="avatar">
                    <p>你猜</p>
                </li> 
                <li>
                    <img src="../../assets/weixin_resource/my_avatar.jpg" alt="avatar">
                    <p>你猜</p>
                </li>
                <li>
                    <img src="../../assets/weixin_resource/my_avatar.jpg" alt="avatar">
                    <p>你猜</p>
                </li>
                <li>
                    <img src="../../assets/weixin_resource/my_avatar.jpg" alt="avatar">
                    <p>你猜</p>
                </li>
                <li>
                    <img src="../../assets/weixin_resource/my_avatar.jpg" alt="avatar">
                    <p>你猜</p>
                </li> 
                <li>
                    <img src="../../assets/weixin_resource/my_avatar.jpg" alt="avatar">
                    <p>你猜</p>
                </li>
                <li>
                    <img src="../../assets/weixin_resource/my_avatar.jpg" alt="avatar">
                    <p>你猜</p>
                </li>     
                <li>
                    <p class="plus"></p>
                </li>
            </ul>
        </div>
        <div class="item">
            <ul>
                <li>
                    <a>
                        <span>聊天室名称</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="item">
            <ul>
                <li>
                    <a>
                        <span>聊天室名称</span>
                        <div @click="switch_state = !switch_state" 
                             :class="switch_state ? 'active' : ''"
                             class="fr y_switch"></div>
                    </a>
                </li>
            </ul>
        </div>

        <div class="wrap-btn">
            <button class="btn">删除并退出</button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'chatInfo',
    data(){
        return {
            hCont: {
                back: true,
                title: '聊天讯息(42)'
            },
            switch_state: false
        }
    },
    methods:{
        bindSwitchState(){

        }
    }
}
</script>

<style scoped>
#chatInfo > div{
    margin-bottom: 0.4rem;
}
.list-friends{
    padding: 1.65rem 0.4rem 0;
    background-color: #fff;
}
.list-friends ul li{
    float: left;
    text-align: center;
    font-size: 14px;
    margin-right: 0.4rem;
    margin-bottom: 0.4rem;  
}
.list-friends ul li:nth-child(5n+5){
    margin-right: 0;
}
.list-friends ul li img{
    width: 1.52rem;
    height: 1.52rem;
}
.list-friends ul li p{
    padding: 2px 0;
}
.plus{
    width: 1.52rem;
    height: 1.52rem;
    border: 0.5px solid #ccc;
    position: relative;
    box-sizing: border-box;
}
.plus::before{
    content: '';
    position: absolute;
    top: 20%;
    left: calc(50% - 1px);
    width: 2px;
    height: 60%;
    background-color: #bbb;
}
.plus::after{
    content: '';
    position: absolute;
    top: calc(50% - 1px);
    left: 20%;
    width: 60%;
    height: 2px;
    background-color: #bbb;
}
.plus:active{
    border-color: #999;
}
.plus:active::before,
.plus:active::after{
    background-color: #999;
}

.item{
    background-color: #fff;
}
.item li{
    height: 1.2rem;
    line-height: 1.2rem;
}
.item li:active{
    background-color: rgba(0, 0, 0, .2);
}
.item li a{
    display: block;
    color: #333;
    font-size: 16px;
    padding: 0 0.4rem;
    border-bottom: 0.5px solid #ccc;
}
.item li:last-child a{
    border-bottom: none;
}

.wrap-btn{
    padding: 0 0.4rem;
    margin-bottom: 0.8rem;
}
.wrap-btn button{
    width: 100%;
    height: 1.1rem;
    line-height: 1.1rem;
    font-size: 16px;
    color: #fff;
    background-color: red;
}

.y_switch{
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    width: 1.1rem;
    height: 0.6rem;
    padding: 2px;
    margin-top: 0.3rem;
    border-radius: 0.38rem/0.36rem;
    background-color: #999;
}
.y_switch::before{
    content: '';
    position: absolute;
    z-index: 999;
    top: 2px;
    left: 2px;
    height: calc(0.6rem - 4px);
    width: calc(0.6rem - 4px);
    border-radius: 50%;
    background-color: #fff;
    transition: left .1s linear;
}
.y_switch.active{
    background-color: #3FB838;
}
.y_switch.active::before{
    left: calc(0.5rem + 2px);
}
</style>
