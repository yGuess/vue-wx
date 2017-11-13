<template>
    <div id="newFriend">
        <yHeader :h-cont="hCont"></yHeader>
        <div class="search-bar">
            <div class="imitate-search-bar">
                <span class="icon icon-search"></span>WeChat ID/手机号码
            </div>
        </div>
        <div class="myInfo">
            我的WeChat ID：Cry_and_Sing 
            <img src="../../assets/weixin_resource/icons/a_f.png" alt="qrcode">
        </div>
        <div class="features">
            <ul>
                <li>
                    <a class="clearfix">
                        <div class="item-icon fl">
                            <img src="../../assets/weixin_resource/icons/a_k.png" alt="icon">
                        </div>
                        <div class="item-body">
                            <p>朋友探测器</p>
                            <p>快速新增身边的人为朋友</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a class="clearfix">
                        <div class="item-icon fl">
                            <img src="../../assets/weixin_resource/icons/a_j.png" alt="icon">
                        </div>
                        <div class="item-body">
                            <p>朋友探测器</p>
                            <p>快速新增身边的人为朋友</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a class="clearfix">
                        <div class="item-icon fl">
                            <img src="../../assets/weixin_resource/icons/a_i.png" alt="icon">
                        </div>
                        <div class="item-body">
                            <p>朋友探测器</p>
                            <p>快速新增身边的人为朋友</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a class="clearfix">
                        <div class="item-icon fl">
                            <img src="../../assets/weixin_resource/icons/aqr.png" alt="icon">
                        </div>
                        <div class="item-body">
                            <p>朋友探测器</p>
                            <p>快速新增身边的人为朋友</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a class="clearfix">
                        <div class="item-icon fl">
                            <img src="../../assets/weixin_resource/icons/a_h.png" alt="icon">
                        </div>
                        <div class="item-body">
                            <p>朋友探测器</p>
                            <p>快速新增身边的人为朋友</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'newFriend',
    data(){
        return {
            hCont:{
                back: true,
                title: '新增朋友'
            }
        }
    }
}
</script>

<style scoped>
.search-bar{
    border-top: 1.45rem solid transparent;
    padding: 0.2rem 0.4rem;
    font-size: 14px;
    color: #999;
    background-color: #fff;
}
.search-bar span.icon{
    font-size: 22px;
    color: #3FB838;
}
.imitate-search-bar{
    padding: 0.1rem 0;
    border-bottom: 0.5px solid #3FB838;
}

.myInfo{
    margin-bottom: 0.4rem;
    padding: 0.2rem 0;
    text-align: center;
    font-size: 13px;
    color: #666;
}
.myInfo img{
    width: 0.6rem;
    height: 0.6rem;
    margin-left: 5px;
    vertical-align: middle;
}

.features{
    background-color: #fff;
}
.features li{
    padding: 0 0.4rem;
}
.features li:active{
    background-color: rgba(0, 0, 0, .1);
}
.features li a{
    display: block;
    padding: 0.4rem 0;
    border-bottom: 0.5px solid #e1e1e1;
}
.features .item-icon{
    width: 1rem;
    height: 1rem;
    margin-right: 0.4rem;
}
.features .item-icon img{
    width: 100%;
    height: 100%;
}
.features .item-body{
    font-size: 12px;
    color: #999;
}
.features .item-body p:first-child{
    font-size: 15px;
    color: #333;
    margin-bottom: calc((1rem - 27px)/2);
}
</style>
