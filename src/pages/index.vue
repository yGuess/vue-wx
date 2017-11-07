<template>
    <div id="IndexPage">
        <yHeader :h-cont="hCont">
            <div slot="right" class="fr header-right">
                <!-- <span class="icon-search"></span>
                <span class="icon-plus"></span> -->
                <img class="icon-search" src="../../assets/weixin_resource/icons/a_2.png" alt="search">
                <img @click="showPlusList = !showPlusList" class="icon-plus" src="../../assets/weixin_resource/icons/a9m.png" alt="add">
                <!-- <span class="more icon-dot-3"></span> -->
            </div>
            <ul slot="plusList" class="plusList" :class="showPlusList ? 'show' : ''">
                <li>
                    <img src="../../assets/weixin_resource/icons/an2.png" alt="icon">建立聊天室
                </li>
                <li>
                    <img src="../../assets/weixin_resource/icons/amd.png" alt="icon">新增朋友
                </li>
                <li>
                    <img src="../../assets/weixin_resource/icons/ani.png" alt="icon">扫描QR Code
                </li>
                <li>
                    <img src="../../assets/weixin_resource/icons/aka.png" alt="icon">收付款
                </li>
                <li>
                    <img src="../../assets/weixin_resource/icons/amx.png" alt="icon">帮助与意见反馈
                </li>
            </ul>
        </yHeader>
        <tabContainer :selected="selected" ref="">
            <div class="container-item">
                <ul class="list-chat">
                    <li class="clearfix" v-for="n in 9" :key="n">
                        <router-link :to="{path: '/chat'}">
                            <div class="fl icon-chat">
                                <img src="../../assets/weixin_resource/icon.png" alt="头像">
                            </div>
                            <div class="item-chat info-chat">
                                <p class="title one-line">会写代码的有钱人和我<span class="fr">下午1:23</span></p>
                                <p class="content one-line">牛奶: 别人配主机看到六核十二线程</p>
                            </div>                        
                        </router-link>
                    </li>
                </ul>
            </div>
            <contacts></contacts>
            <div class="container-item">
                <ul class="list-base find">
                    <li class="mb0_4 mt0_4">
                        <router-link :to="{path: '/circleOfFriends'}">
                            <div class="icon-base">
                                <img src="../../assets/weixin_resource/icons/afe.png" alt="icon">
                            </div>
                            <div class="item-base text">
                                <p class="title one-line">朋友圈</p>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <div>
                            <div class="icon-base">
                                <img src="../../assets/weixin_resource/icons/afg.png" alt="icon">
                            </div>
                            <div class="item-base text">
                                <p class="title one-line">扫描QR Code</p>
                            </div>
                        </div>
                    </li>
                    <li class="mb0_4">
                        <div>
                            <div class="icon-base">
                                <img src="../../assets/weixin_resource/icons/afh.png" alt="icon">
                            </div>
                            <div class="item-base text">
                                <p class="title one-line">摇一摇</p>
                            </div>
                        </div>
                    </li>
                    <li class="mb0_4">
                        <div>
                            <div class="icon-base">
                                <img src="../../assets/weixin_resource/icons/ak6.png" alt="icon">
                            </div>
                            <div class="item-base text">
                                <p class="title one-line">游戏</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="icon-base">
                                <img src="../../assets/weixin_resource/icons/ak6.png" alt="icon">
                            </div>
                            <div class="item-base text">
                                <p class="title one-line">小程序</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="container-item">
                <router-link :to="{path: '/personalPage'}" class="personal">
                    <div class="personal-avatar">
                        <img src="../../assets/weixin_resource/my_avatar.jpg" alt="avatar">
                    </div>
                    <div class="personal-info">
                        <p class="nickname one-line">会写代码的有钱人和我</p>
                        <p class="wx-id">WeChat ID: Cry_and_Sing</p>
                    </div>
                    <img class="min-qrcode fr" src="../../assets/weixin_resource/icons/a_f.png" alt="qrcode">
                </router-link>
                <ul class="list-base setting">
                    <li class="mb0_4">
                        <router-link class="nav-url" :to="{path: '/wallet'}">
                            <div class="icon-base">
                                <img src="../../assets/weixin_resource/icons/aka.png" alt="icon">
                            </div>
                            <div class="item-base text">
                                <p class="title one-line">钱包</p>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <a>
                            <div class="icon-base">
                                <img src="../../assets/weixin_resource/icons/akc.png" alt="icon">
                            </div>
                            <div class="item-base text">
                                <p class="title one-line">会写代码的有钱人和我</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a>
                            <div class="icon-base">
                                <img src="../../assets/weixin_resource/icons/ak_.png" alt="icon">
                            </div>
                            <div class="item-base text">
                                <p class="title one-line">会写代码的有钱人和我</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a>
                            <div class="icon-base">
                                <img src="../../assets/weixin_resource/icons/akb.png" alt="icon">
                            </div>
                            <div class="item-base text">
                                <p class="title one-line">会写代码的有钱人和我</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a>
                            <div class="icon-base">
                                <img src="../../assets/weixin_resource/icons/ak2.png" alt="icon">
                            </div>
                            <div class="item-base text">
                                <p class="title one-line">会写代码的有钱人和我</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a>
                            <div class="icon-base">
                                <img src="../../assets/weixin_resource/icons/akd.png" alt="icon">
                            </div>
                            <div class="item-base text">
                                <p class="title one-line">会写代码的有钱人和我</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </tabContainer>
        <tabbar :selected="selected"></tabbar>
    </div>
</template>

<script>
export default {
    name: 'IndexPage',
    data(){
        return {
            selected: 0,
            tabContainerWidth: 0,
            showPlusList: false,
            hCont:{
                title: 'WeChat'
            }
        }
    }
}
</script>

<style scoped>
#IndexPage{
    height: 100%;
    background-color: rgb(240, 240, 240);
}
.header-right{
    height: 100%;
}
.icon-search::before,
.icon-plus::before{
    content: '';
}
.icon-plus{
    padding-left: 0.4rem;
    padding-right: 0.4rem;
}
.icon-search{
    padding-left: 0.2rem;
    padding-right: 0.2rem;
}

.plusList{
    width: 0;
    height: 0;
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, .2);
    background-color: #333;
    box-sizing: border-box;
    position: fixed;
    z-index: 9998;
    top: 1.25rem;
    right: 0.4rem;
    font-size: 14px;
    color: #fff;
    overflow: hidden;
    transition: all .2s;
}
.plusList.show{
    width: 5rem;
    height: 6.5rem;
}
.plusList li{
    padding: 0 0.3rem;
    height: 1.3rem;
    border-bottom: 0.5px solid #222;
}
.plusList li:last-child{
    border-bottom: none;
}
.plusList img{
    width: 0.8rem;
    height: 0.8rem;
    padding: 0;
    vertical-align: middle;
    margin-right: 0.3rem;
}

.mb0_4{
    margin-bottom: 0.4rem;
}
.mt0_4{
    margin-top: 0.4rem;
}

.nav-url,
.personal{
    margin: 0;
    display: block;
    color: #000;
    margin: 0.4rem 0;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
}
.nav-url:active,
.personal:active{
    background-color: rgba(0, 0, 0, .2);
}

</style>
