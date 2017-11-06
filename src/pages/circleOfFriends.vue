<template>
    <div id="circleOfFriends">
        <yHeader :h-cont="hCont">
            <div slot="right" class="fr header-right">
                <span class="icon icon-camera"></span>
            </div>
        </yHeader>
        <div @touchstart="touchStart"
             @touchmove="touchMove"
             @touchend="touchEnd"
             ref="content_cof"
             class="content">
            <div class="huge" >
                <div class="user-info">
                    <span>YouGuess</span>
                    <img class="fr" src="../../assets/weixin_resource/my_avatar.jpg" alt="avatar">
                </div>
            </div>
            <div class="list-friends-share">
                <ul>
                    <li v-for="(n,index) in 4" :key="n">
                        <div class="fl friend-avatar">
                            <img src="../../assets/weixin_resource/my_avatar.jpg" alt="avatar">
                        </div>
                        <div class="share-msg">
                            <p class="friend-name"><a href="">YouGuess</a></p>
                            <div class="share-content">测试内容</div>
                            <div>
                                <span class="msg-time">8分钟</span>
                                <span @click="controlMsgOperate" v-bind:data-index="n-1" class="fr icon-dot-3"></span>
                                <p class="btns" :class="showMsgOperatePos == (n - 1) && showMsgOperate ? 'show' : ''">
                                    <span class="like icon-heart-empty-1">赞</span><span class="commet icon-comment">评论</span>
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <img class="loading" 
             ref="loading"
             src="../../assets/weixin_resource/icons/vb.png" alt="loading_icon">
    </div>
</template>

<script>
export default {
    name: 'circleOfFriends',
    data(){
        return {
            hCont: {
                back: true,
                title: '朋友圈'
            },
            showMsgOperate: false,  // 控制操作开关
            showMsgOperatePos: -1,  // 当前操作的开关位置
            contentContainer: '',   // 内容部分的父节点

            // 拖拽下拉
            isScroll: false,         // 是否在拖动,
            yDistance: 0,            // 垂直方向移动距离
            initPosY: 0,             // 拖拽起点
            degree: 0                // load_icon旋转角度
        }
    },
    methods: {
        controlMsgOperate(evt){
            let _i = evt.target.dataset.index;
            
            if(this.showMsgOperatePos == _i){
                this.showMsgOperatePos = -1;
                this.showMsgOperate = false;
            }else{
                this.showMsgOperatePos = _i;
                this.showMsgOperate = true;
            }
        },
        // 拖拽下拉刷新
        touchStart(evt){
            if(window.scrollY == 0){
                this.initPosY = evt.touches[0].pageY;
                this.isScroll = true;
            }
        },
        touchMove(evt){
            if(!this.isScroll) return;
            evt.preventDefault();

            let distance = evt.touches[0].pageY - this.initPosY;

            if(this.yDistance < 200){
                this.yDistance += distance;

                // diatance / 2R * 2PI * R => distance * PI
                this.degree += distance * Math.PI * 1.5;

                if(this.yDistance < 100) this.load_icon.style.top = this.yDistance + 'px';
                this.load_icon.style.webkitTransform = `rotate(${this.degree}deg)`;
                this.contentContainer.style.webkitTransform = `translateY(${this.yDistance}px)`; 

                this.initPosY += distance;
            }

        },
        touchEnd(){
            this.isScroll = false;
            this.load_icon.classList.add('transition');
            this.contentContainer.classList.add('transition');

            this.contentContainer.style.webkitTransform = 'translateY(0)';

            setTimeout(() => {
                this.load_icon.style.webkitTransform = 'rotate(0)';
            } , 100);

            setTimeout(() => {
                this.load_icon.style.top = 0;
            } , 200);

            setTimeout(() => {
                this.load_icon.classList.remove('transition');
                this.contentContainer.classList.remove('transition');  
                this.degree = 0;
                this.initPosY = 0; 
                this.yDistance = 0;
            } , 300);
        }
    },
    mounted: function(){
        this.contentContainer = this.$refs.content_cof;
        this.load_icon = this.$refs.loading;
    }
}
</script>

<style scoped>
#circleOfFriends{
    background-color: #fff;
}
.icon-camera{
    padding: 0 0.5rem;
}
.content{
    transform: translateY(0);
}
.huge{
    position: relative;
    background: url('../../assets/weixin_resource/cof_bg.jpg') no-repeat;
    background-size: cover;
    background-position: center;
    background-origin: border-box;
    padding-top: 1.25rem;
    margin-bottom: 1rem;
    height: 7.5rem;
}
.user-info{
    position: absolute;
    bottom: -1rem;
    right: 0.4rem;
    z-index: 9999;
    font-size: 16px;
}
.user-info img{
    width: 2.5rem;
    height: 2.5rem;
    outline: 0.5px solid #e1e1e1;
    border: 1px solid #fff;
}
.user-info span{
    display: inline-block;
    margin-right: 0.4rem;
    margin-top: .5rem;
    font-weight: 600;
    color: #fff;
}

.list-friends-share li{
    padding: 0.4rem;
    background-color: #fff;
    border-bottom: 0.5px solid #e1e1e1;
}
.list-friends-share li:last-child{
    border-bottom: none;
}
.friend-avatar{
    width: 1.2rem;
    height: 1.2rem;
}
.friend-avatar img{
    width: 100%;
    height: 100%;
}
.share-msg{
    position: relative;
    padding-left: 1.6rem;
    font-size: 14px;
}
.friend-name{
    margin-bottom: 5px;
}
.friend-name a{
    color: #44606C;
}
.msg-time{
    color: #999;
    font-size: 12px;
}
.icon-dot-3{
    font-size: 18px;
}
.share-content{
    margin-bottom: 10px;
}
.btns{
    background-color: #333;
    overflow: hidden;
    border-radius: 4px;
    position: absolute;
    height: 1.1rem;
    line-height: 1.1rem;
    z-index: 9999;
    right: calc(18px + 0.4rem);
    bottom: -0.4rem;
    width: 0;
    transition: width .1s;
}
.btns.show{
    width: 5.2rem;
}
.btns span{
    display: inline-block;
    text-align: center;
    width: 50%;
    color: #fff;
}
.btns span:active{
    background-color: rgba(0, 0, 0, .2);
}
.btns .icon-comment-1{
    color: #44606C;
}
.btns [class^="icon-"]:before, 
.btns [class*=" icon-"]:before{
    margin-right: 5px;
}

.loading{
    width: 1rem;
    height: 1rem;
    position: fixed;
    top: 0;
    left: 1rem;
}

.transition{
    transition: all .1s linear;
}
</style>
