<template>
    <div id="chat">
        <yHeader :h-cont="hCont">
            <router-link slot="right" :to="{ path: '/chat/chatInfo' }">
                <span class="icon-users fr"></span>
            </router-link>
        </yHeader>
        <div id="chat-content">
            <div id="friend" class="chat-item">
                <div class="p-avatar fl">
                    <a>
                        <img src="../../assets/weixin_resource/my_avatar.jpg" alt="avatar">
                    </a>
                </div>
                <div class="chat-item-cont">
                    <div class="chat-people-name">YouGuess</div>
                    <div class="wrap-chat-content diamond">我没挑到喜欢的RGB</div>
                </div>
            </div>
            <div id="me" class="chat-item">
                <div class="p-avatar fr">
                    <a>
                        <img src="../../assets/weixin_resource/my_avatar.jpg" alt="avatar">
                    </a>
                </div>
                <div class="chat-item-cont">
                    <div class="wrap-chat-content diamond">没钱还这么挑？</div>
                </div>               
            </div>
            <div id="friend" class="chat-item">
                <div class="p-avatar fl">
                    <a>
                        <img src="../../assets/weixin_resource/my_avatar.jpg" alt="avatar">
                    </a>
                </div>
                <div class="chat-item-cont">
                    <div class="chat-people-name">YouGuess</div>
                    <div class="wrap-chat-content diamond">闺蜜肯定偏笔记本，不会用太沉的东西</div>
                </div>
            </div>
        </div>
        <footer>
            <div class="will-input">
                <img class="mr0_1" src="../../assets/weixin_resource/icons/af9.png" alt="video_icon">
                <!-- <input id="rich-text" type="text"> -->
                <div id="rich-text" contenteditable="contenteditable"></div>
                <img class="ml0_1" src="../../assets/weixin_resource/icons/sz.png" alt="expression_icon">
                <img class="ml0_2 fr" src="../../assets/weixin_resource/icons/a6b.png" alt="other_icon">
            </div>
            <div class="expressions"></div>
        </footer>
    </div>
</template>

<script>

export default {
    name: 'chat',
    data(){
        return {
            hCont: {
                back: true,
                title: '会写代码的有钱人和我(42)'
            }
        }
    }
}
</script>

<style scoped>
header > a{
    color: #fff;
}
.icon-users{
    padding: 0 0.2rem;
}
.icon-users:active{
    background-color: rgba(0, 0, 0, .2);
}
footer{
    padding: 0.2rem 0.4rem;
    background-color: #fff;
    border-top: 0.5px  solid #e1e1e1;
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}
/* .will-input{
    height: 100%;
} */
.will-input img{
    width: 1rem;
    height: 1rem;
}
.will-input img.mr0_1{
    margin-right: 0.1rem;
}
.will-input img.ml0_1{
    margin-left: 0.1rem;
}
.will-input img.ml0_2{
    margin-left: 0.2rem;
}
#rich-text{
    display: inline-block;
    box-sizing: border-box;
    overflow-y: scroll;
    width: 5.2rem;
    max-width: 5.2rem;
    line-height: 0.6rem;
    font-size: 16px;
    padding: 8px 4px 6px;
    border: none;
    border-bottom: .5px solid #3FB838;
    vertical-align: top;
}
#rich-text:focus{
    outline: none;
}
#rich-text img.icon{
    width: 0.9rem;
    height: 0.9rem;
}

/* chat-content */
#chat-content{
    padding-top: 1.4rem;
}
.chat-item{
    padding: 0.15rem 0.2rem;
}
.p-avatar img{
    width: 1rem;
    height: 1rem;
}
.chat-people-name{
    font-size: 12px;
    color: #999;
    padding: 2px 0;
    margin-bottom: 4px;
}
.wrap-chat-content{
    background-color: #fff;
    display: inline-block;
    position: relative;
    max-width: 5.8rem;
    padding: 0.3rem;
    font-size: 14px;
    border: 0.5px solid #e1e1e1;
    letter-spacing: 0.5px;
    border-radius: 4px;
    word-break: break-all;
}
#friend .chat-item-cont{
    padding-left: 1.3rem; 
}
#me .chat-item-cont{
    padding-right: 1.3rem; 
    text-align: right;
}
#me .wrap-chat-content{
    background-color: #5AE53E;
}
.diamond::before{
    content: '';
    width: 8px;
    height: 8px;
    transform: rotateZ(-45deg);
    position: absolute;
    top: calc(50% - 4px);
}
#friend .diamond::before{
    left: -4px;
    border-top: 0.5px solid #e1e1e1;
    border-left: 0.5px solid #e1e1e1;
    background-color: #fff;
}
#me .diamond::before{
    right: -4px;
    border-right: 0.5px solid #e1e1e1;
    border-bottom: 0.5px solid #e1e1e1;
    background-color: #5AE53E;
}
</style>
