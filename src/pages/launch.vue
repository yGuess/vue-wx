<template>
    <div id="initPage" :class="isLogin ? 'scale' : ''">
        <div class="wrap-btns" v-show="isLogin ? '' : true">
            <button @click="signin" class="btn btn-primary">登入</button>
            <button @click="signup" class="btn">注册</button>
        </div>
        <p v-show="isLogin ? '' : true" class="lang">语言</p>
    </div>
</template>

<script>
export default {
    name: 'initPage',
    data(){
        return {
            isLogin: false
        }
    },
    methods:{
        signup(){
            this.$router.push({
                path: '/signup'
            });
        },
        signin(){
            this.$router.push({
                path: '/signin'
            });
        }
    },
    created: function(){
        this.isLogin = this.$route.query.isLogin;
        if(this.isLogin){
            setTimeout(() => {
                this.$router.replace({
                    path: '/index'
                });
            },1800);
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

.scale{
    animation: scale 2s linear;
}
@keyframes scale{
    from { -webkit-transform: scale(1,1); }
    to   { -webkit-transform: scale(1.3,1.3); }
}
</style>
