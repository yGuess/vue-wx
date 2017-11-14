<template>
    <div id="initPage">
        <div class="wrap-btns">
            <button @click="signin" class="btn btn-primary">登入</button>
            <button @click="signup" class="btn">注册</button>
        </div>
        <p class="lang">语言</p>
    </div>
</template>

<script>
export default {
    name: 'initPage',
    methods:{
        signup(){
            this.$router.replace({
                path: '/signup'
            });
        },
        signin(){
            this.$router.replace({
                path: '/signin'
            });
        }
    }
}
</script>

<style scoped>
#initPage{
    height: 100%;
    background: url('../../assets/weixin_resource/splash.png') no-repeat;
    background-size: cover;
}
.wrap-btns{
    width: 100%;
    box-sizing: border-box;
    position: absolute;
    bottom: 0.5rem;
    padding: 0 0.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
}
.wrap-btns button{
    background-color: #fff;
    padding: 0.3rem 1.1rem 0.29rem;
    border-radius: 2px;
    border-color: #fff;
}
.btn-primary{
    background-color: #21B100!important;
    color: #fff!important;
    border-color: #21B100!important;
}
.lang{
    text-align: right;
    font-size: 14px;
    padding: 0.4rem 0.3rem;
    color: #fff;
    letter-spacing: 1px;
}
</style>
