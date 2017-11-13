<template>
    <div id="friendRecommendInfo">
        <yHeader :h-cont="hCont">
            <div slot="right" class="fr header-right">
                <span class="icon">新增朋友</span>
            </div>
        </yHeader>
        <div class="search-bar">
            <div class="imitate-search-bar">
                <span class="icon icon-search"></span>WeChat ID/手机号码
            </div>
        </div>
        <div class="list-recommedInfo">
            <p class="title">朋友推荐信息</p>
            <ul class="list-info">
                <li>
                    <a class="clearfix">
                        <div class="item-icon fl">
                            <img src="../../assets/weixin_resource/my_avatar.jpg" alt="avatar">
                        </div>
                        <div class="item-right fr">
                            <button class="btn">接受</button>
                        </div>
                        <div class="item-body">
                            <p class="one-line">小林子</p>
                            <p class="one-line">王者里面的朋友，通过一下</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a class="clearfix">
                        <div class="item-icon fl">
                            <img src="../../assets/weixin_resource/my_avatar.jpg" alt="avatar">
                        </div>
                        <div class="item-right fr">
                            <span class="result">接受</span>
                        </div>
                        <div class="item-body">
                            <p class="one-line">小林子</p>
                            <p class="one-line">王者里面的朋友，通过一下</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    name: 'friendRecoInfo',
    data(){
        return {
            hCont: {
                back: true,
                title: '朋友推荐信息'
            }
        }
    }
}
</script>

<style scoped>
.header-right{
    font-size: 14px;   
}
.header-right span{
    padding: 0 0.4rem;
}

.search-bar{
    border-top: 1.45rem solid transparent;
    margin-bottom: 0.4rem;
    padding: 0.2rem 0.4rem;
    font-size: 14px;
    color: #999;
    background-color: #fff;
}
.search-bar span.icon{
    padding-right: 0;
    font-size: 22px;
    color: #888;
}
.imitate-search-bar{
    padding: 0.1rem 0;
    border-bottom: 0.5px solid #e1e1e1;
}

.list-recommedInfo .title{
    font-size: 12px;
    color: #999;
    padding: 0 0.4rem 0.2rem;
}
.list-recommedInfo .list-info li{
    font-size: 16px;
    color: #ccc;
    padding: 0.2rem 0.4rem;
    background-color: #fff;
}
.list-recommedInfo .list-info li:active{
    background-color: rgba(0, 0, 0, .2);
}
.list-recommedInfo .list-info .item-icon{
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 0.4rem;
}
.list-recommedInfo .list-info .item-icon img{
    width: 100%;
    height: 100%;
}
.list-recommedInfo .list-info .item-body p:first-child{
    color: #333;
    margin: 0.1rem 0;
}
.list-recommedInfo .list-info .item-body p:last-child{
    font-size: 13px;
}
.list-recommedInfo .list-info .item-right .btn{
    padding: 0.2rem 0.4rem;
    font-size: 13px;
    color: #fff;
    border-radius: 2px;
    background-color: #3FB838;
    border: 0.5px solid #3FB838;
    margin-top: calc(0.6rem - 15px);
}
.list-recommedInfo .list-info .item-right .result{
    display: inline-block;
    font-size: 12px;
    color: #999;
    margin-top: calc(0.6rem - 6px);
}
</style>
