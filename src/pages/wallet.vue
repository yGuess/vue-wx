<template>
    <div id="wallet">
        <yHeader :h-cont="hCont">
            <div slot="right" class="fr header-right">
                <span class="icon more icon-dot-3"></span>
            </div>
        </yHeader>
        <div class="wallet-info">
             <ul class="clearfix">
                <li>
                    <img src="../../assets/weixin_resource/icons/ane.png" alt="icon">
                    <p>收付款</p>
                </li>
                <li>
                    <img src="../../assets/weixin_resource/icons/an8.png" alt="icon">
                    <p>余额</p>
                    <p class="balance">￥2.11</p>
                </li>
                <li>
                    <img src="../../assets/weixin_resource/icons/ani.png" alt="icon">
                    <p>金融卡</p>
                </li>
            </ul>           
        </div>
        <div class="other-services">
            <p class="title">你猜服务</p>
            <ul class="list-services clearfix">
                <li>
                    <img src="../../assets/weixin_resource/icons/afe.png" alt="icon">
                    <p>信用卡还款</p>
                </li>
                <li>
                    <img src="../../assets/weixin_resource/icons/afe.png" alt="icon">
                    <p>手机话费充值</p>
                </li>
                <li>
                    <img src="../../assets/weixin_resource/icons/afe.png" alt="icon">
                    <p>理财通</p>
                </li>
                <li>
                    <img src="../../assets/weixin_resource/icons/afe.png" alt="icon">
                    <p>信用卡还款</p>
                </li>
                <li>
                    <img src="../../assets/weixin_resource/icons/afe.png" alt="icon">
                    <p>手机话费充值</p>
                </li>
                <li>
                    <img src="../../assets/weixin_resource/icons/afe.png" alt="icon">
                    <p>理财通</p>
                </li>
                <li>
                    <img src="../../assets/weixin_resource/icons/afe.png" alt="icon">
                    <p>理财通</p>
                </li>
            </ul>
        </div>
        <div class="other-services">
            <p class="title">dsf服务</p>
            <ul class="list-services clearfix">
                <li>
                    <img src="../../assets/weixin_resource/icons/afe.png" alt="icon">
                    <p>信用卡还款</p>
                </li>
                <li>
                    <img src="../../assets/weixin_resource/icons/afe.png" alt="icon">
                    <p>手机话费充值</p>
                </li>
                <li>
                    <img src="../../assets/weixin_resource/icons/afe.png" alt="icon">
                    <p>理财通</p>
                </li>
                <li>
                    <img src="../../assets/weixin_resource/icons/afe.png" alt="icon">
                    <p>信用卡还款</p>
                </li>
                <li>
                    <img src="../../assets/weixin_resource/icons/afe.png" alt="icon">
                    <p>手机话费充值</p>
                </li>
                <li>
                    <img src="../../assets/weixin_resource/icons/afe.png" alt="icon">
                    <p>理财通</p>
                </li>
                <li>
                    <img src="../../assets/weixin_resource/icons/afe.png" alt="icon">
                    <p>理财通</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'wallet',
    data(){
        return {
            hCont: {
                back: true,
                title: '钱包'
            }
        }
    }
}
</script>

<style scoped>
.wallet-info{
    padding-top: 1.2rem;
    background-color: #999;
    color: #fff;
}
.wallet-info li{
    float: left;
    width: 33.333333%;
    height: 2.8rem;
    padding: 0.5rem 0;
    text-align: center;
    font-size: 16px;
}
.wallet-info li:active{
    background-color: rgba(0, 0, 0, .1);
}
.wallet-info li img{
    width: 1.5rem;
    height: 1.5rem;
}
.wallet-info li .balance{
    margin-top: 5px;
    color: lightgray;
    font-size: 14px;
}

.other-services .title{
    background-color: #eee;
    padding: 0.4rem 0.4rem 0.3rem;
    color: #666;
    font-size: 14px;
}
.list-services{
    font-size: 14px;
    background-color: #fff;
}
.list-services li{
    float: left;
    border-right: 0.5px solid #e1e1e1;
    border-bottom: 0.5px solid #e1e1e1;
    width: 33.333333%;
    text-align: center;
    padding: 0.6rem 0;
    box-sizing: border-box;
}
.list-services li:active{
    background-color: rgba(0, 0, 0, .2);
}
.list-services li img{
    width: 1rem;
    height: 1rem;
    margin-bottom: 0.1rem;   
}

.more::before{
    transform: rotateZ(-90deg);
}
</style>
