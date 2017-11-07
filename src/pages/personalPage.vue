<template>
    <div id="personalPage">
        <yHeader :h-cont="hCont"></yHeader>
        <div class="list-personal-info">
            <ul>
                <li>
                    <a href="#" class="clearfix avatar">
                        <p class="fl">头像</p>
                        <img class="fr" src="../../assets/weixin_resource/my_avatar.jpg" alt="avatar">
                    </a>
                </li>
                <li>
                    <a href="#" class="clearfix">
                        <p class="fl">昵称</p>
                        <span class="fr">YouGuess</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="clearfix">
                        <p class="fl">WeChat ID</p>
                        <span class="fr">你猜</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="clearfix my-arcode">
                        <p class="fl">我的QR Code</p>
                        <img class="fr" src="../../assets/weixin_resource/icons/a_f.png" alt="my_qrcode">
                    </a>
                </li>
                <li>
                    <router-link :to="{path: '/personalPage/morePersonalPage'}" class="clearfix">
                        <p class="fl">更多</p>
                        <!-- <span class="fr">YouGuess</span> -->
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'personalPage',
    data(){
        return {
            hCont: {
                back: true,
                title: '个人资讯'
            }
        }
    }
}
</script>

<style scoped>
.list-personal-info{
    padding-top: 1.65rem;
}
.list-personal-info li{
    padding: 0 0.4rem;
    background-color: #fff;
}
.list-personal-info li:active{
    background-color: rgba(0, 0, 0, .2);
}
.list-personal-info li a{
    color: #333;
    display: block;
    font-size: 16px;
    padding: 0.4rem 0;
    border-bottom: 0.5px solid #ddd;
}
.list-personal-info a.avatar{
    padding: 0.2rem 0;
    line-height: 1.2rem;
}
.list-personal-info li a span{
    color: #999;
}
.list-personal-info a.avatar img{
    width: 1.2rem;
    height: 1.2rem;
    vertical-align: middle;
}
.list-personal-info a.my-arcode img{
    width: 0.6rem;
    height: 0.6rem;
    vertical-align: middle
}
</style>
