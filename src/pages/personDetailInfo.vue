<template>
    <div id="personDetailInfo">
        <yHeader :h-cont="hCont">
            <div slot="right" class="fr header-right">
                <span class="more icon-dot-3"></span>
            </div>
        </yHeader>

        <div class="content">
            <div class="item username-info mt0_4 mb0_4">
                <a class="clearfix">
                    <div class="fl">
                        <img src="../../assets/weixin_resource/my_avatar.jpg" alt="avatar">
                    </div>
                    <div>
                        <p class="username">你猜 <img src="../../assets/weixin_resource/icons/ag7.png" alt="sex_icon"></p>
                        <p>WeChat ID: YouGuess</p>
                        <p>昵称: 你猜</p>
                    </div>
                </a>
            </div>
            <div class="item">
                <a>
                    <div class="fl">
                        电话号码
                    </div>
                    <div class="info">
                        xxxxxxxxxxxxx
                    </div>
                </a>
            </div>
            <div class="item wrap-photos">
                <a>
                    <div class="fl">
                        个人相簿
                    </div>
                    <div class="info">
                        <img src="../../assets/weixin_resource/my_avatar.jpg" alt="avatar">
                        <img src="../../assets/weixin_resource/my_avatar.jpg" alt="avatar">
                    </div>
                </a>
            </div>
        </div>

        <div class="wrap-btns">
            <button class="btn btn-primary">传讯息</button>
            <button class="btn">新视讯通话</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'personDetailInfo',
    data(){
        return {
            hCont: {
                back: true,
                title: '详细资料'
            }
        }
    }
}
</script>

<style scoped>
.item{
    padding: 0 0.4rem;
    font-size: 16px;
    color: #333;
    background-color: #fff;
}
.item:active{
    background-color: rgba(0, 0, 0, .2);
}
.item > a{
    display: block;
    padding: 0.4rem 0;
    border-bottom: 0.5px solid #e1e1e1;
}
.item > a > .fl{
    width: 2.5rem;
}
.item img{
    width: 1.6rem;
    height: 1.6rem;
}
.content{
    padding-top: 1.25rem;
}
.username img{
    width: 0.5rem;
    height: 0.5rem;
}
.username-info > a{
    font-size: 14px;
    color: #999;
    border-bottom: none;
}
.username{
    font-size: 16px;
    color: #333;
    line-height: 24px;
    padding-top: 2px;
}
.username img{
    vertical-align: text-bottom;
}
.username + p{
    margin-bottom: 2px;    
}
.info{
    color: #999;
    font-size: 15px;
}
.wrap-photos a > .fl{
    height: 1.6rem;
    line-height: 1.6rem;
}
.mt0_4{
    margin-top: 0.4rem;
}
.mb0_4{
    margin-bottom: 0.4rem;
}
.wrap-btns{
    padding: 0.4rem 0.4rem 0;
}
.wrap-btns .btn{
    width: 100%;
    line-height: 1.2rem;
    font-size: 18px;
    margin-bottom: 0.4rem;
    background-color: #fff;
}
.wrap-btns .btn-primary{
    background-color: #3FB838;
    color: #fff;
}
.icon-dot-3{
    display: inline-block;
    height: 100%;
}
</style>
