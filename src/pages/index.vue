<template>
    <div id="IndexPage">
        <yHeader>
            <div slot="right" class="fr header-right">
                <!-- <span class="icon-search"></span>
                <span class="icon-plus"></span> -->
                <img class="icon-search" src="../../assets/weixin_resource/icons/a_2.png" alt="search">
                <img class="icon-plus" src="../../assets/weixin_resource/icons/a9m.png" alt="add">
            </div>
        </yHeader>
        <tabContainer :selected="selected" ref="">
            <div class="container-item">
                <ul class="list-chat">
                    <li class="clearfix" v-for="n in 9" :key="n">
                        <div class="fl icon-chat">
                            <img src="../../assets/weixin_resource/icon.png" alt="头像">
                        </div>
                        <div class="item-chat info-chat">
                            <p class="title one-line">会写代码的有钱人和我<span class="fr">下午1:23</span></p>
                            <p class="content one-line">牛奶: 别人配主机看到六核十二线程</p>
                        </div>
                    </li>
                </ul>
            </div>
            <contacts></contacts>
            <div class="container-item">
                <ul class="list-base find">
                    <li>
                        <div>
                            <div class="icon-base">
                                <img src="../../assets/weixin_resource/icons/afe.png" alt="icon">
                            </div>
                            <div class="item-base text">
                                <p class="title one-line">会写代码的有钱人和我</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="icon-base">
                                <img src="../../assets/weixin_resource/icons/afg.png" alt="icon">
                            </div>
                            <div class="item-base text">
                                <p class="title one-line">会写代码的有钱人和我</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="icon-base">
                                <img src="../../assets/weixin_resource/icons/afh.png" alt="icon">
                            </div>
                            <div class="item-base text">
                                <p class="title one-line">会写代码的有钱人和我</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="icon-base">
                                <img src="../../assets/weixin_resource/icons/ak6.png" alt="icon">
                            </div>
                            <div class="item-base text">
                                <p class="title one-line">会写代码的有钱人和我</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="container-item">
                <div class="personal">
                    <div class="personal-avatar">
                        <img src="../../assets/weixin_resource/my_avatar.jpg" alt="avatar">
                    </div>
                    <div class="personal-info">
                        <p class="nickname one-line">会写代码的有钱人和我</p>
                        <p class="wx-id">WeChat ID: Cry_and_Sing</p>
                    </div>
                    <img class="min-qrcode fr" src="../../assets/weixin_resource/icons/a_f.png" alt="qrcode">
                </div>
                <ul class="list-base setting">
                    <li>
                        <div>
                            <div class="icon-base">
                                <img src="../../assets/weixin_resource/icons/aka.png" alt="icon">
                            </div>
                            <div class="item-base text">
                                <p class="title one-line">会写代码的有钱人和我</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="icon-base">
                                <img src="../../assets/weixin_resource/icons/akc.png" alt="icon">
                            </div>
                            <div class="item-base text">
                                <p class="title one-line">会写代码的有钱人和我</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="icon-base">
                                <img src="../../assets/weixin_resource/icons/ak_.png" alt="icon">
                            </div>
                            <div class="item-base text">
                                <p class="title one-line">会写代码的有钱人和我</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="icon-base">
                                <img src="../../assets/weixin_resource/icons/akb.png" alt="icon">
                            </div>
                            <div class="item-base text">
                                <p class="title one-line">会写代码的有钱人和我</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="icon-base">
                                <img src="../../assets/weixin_resource/icons/ak2.png" alt="icon">
                            </div>
                            <div class="item-base text">
                                <p class="title one-line">会写代码的有钱人和我</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="icon-base">
                                <img src="../../assets/weixin_resource/icons/akd.png" alt="icon">
                            </div>
                            <div class="item-base text">
                                <p class="title one-line">会写代码的有钱人和我</p>
                            </div>
                        </div>
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
            tabContainerWidth: 0
        }
    }
}
</script>

<style scoped>
#IndexPage{
    height: 100%;
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
</style>
