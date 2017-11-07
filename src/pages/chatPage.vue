<template>
    <div id="chat">
        <yHeader :h-cont="hCont">
            <span slot="right" class="icon-users fr"></span>
        </yHeader>
        <footer>
            <div class="will-input">
                <img class="mr0_1" src="../../assets/weixin_resource/icons/af9.png" alt="video_icon">
                <input type="text">
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
    height: 1.4rem;
    line-height: 1rem;
}
.will-input{
    height: 100%;
}
.will-input img{
    width: 1rem;
    height: 100%;
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
.will-input input{
    width: 5.2rem;
    height: 90%;
    vertical-align: super;
    box-sizing: border-box;
    font-size: 16px;
    padding: 0 4px;
    border: none;
    border-bottom: .5px solid #3FB838;
}
</style>
