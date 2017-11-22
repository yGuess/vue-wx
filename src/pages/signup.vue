<template>
    <div id="signup">
        <yHeader :h-cont="hCont">
            <div slot="right" class="fr header-right">
               <span class="more icon-dot-3"></span>
            </div>
        </yHeader>
        <div class="form signin">
            <div class="form-item nickname">
                <label for="">
                    <span class="fl">昵称</span>
                    <input v-model="nickname" type="text" placeholder="例如: 你猜">
                </label>
                <!-- <img src="" alt=""> -->
            </div>
            <div class="form-item">
                <label for="">
                    <span class="fl">手机号码</span>
                    <input v-model="phone" type="text" placeholder="请填写手机号码">
                </label>
            </div>
            <div class="form-item">
                <label for="">
                    <span class="fl">密码</span>
                    <input v-model="psd" type="password" placeholder="请填写密码">
                </label>
            </div>
        </div>

        <a class="other-way"></a>
        <div class="wrpa-btn">
            <button class="btn" 
                    @click="bindSubmitForm"
                    :disabled="!(psd.length>=6 && nickname && phone.length==11)">下一步</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'signup',
    data(){
        return {
            hCont: {
                back: true,
                title: '注册'
            },
            nickname: '',
            phone: '',
            psd: ''
        }
    },
    methods: {
        bindSubmitForm(){
            let info = {
                nickname: this.nickname,
                phone: this.phone,
                psd: this.psd
            };
            this.$http
                .post('/users/signup' , info)
                .then((res) => {
                    console.log(res);
                    if(typeof res.body !== 'object') return;

                    localStorage.setItem('userInfo' , JSON.stringify(res.body));
                    this.$router.replace({
                        path: '/',
                        query: {
                            isLogin: true
                        }
                    });
                });
        }
    }
}
</script>

<style scoped>
/* #signup .nickname input{
    
}
#signup .form{
    padding-top: 2.05rem;
} */

header{
    background-color: #fff;
    color: #333;
}
.form{
    padding: 1.65rem 0.4rem 0.4rem;
    background-color: #fff;
}
h4{
    font-weight: 500;
}
.form-item{
    font-size: 15px;
    height: 1.2rem;
    line-height: 1.2rem;
    border-bottom: 0.5px solid #e1e1e1;
}
.form-item.active{
    border-color: #21B100;
}
.form-item span{
    display: inline-block;
    height: 100%;
    width: 2rem;
}
.form-item input{
    padding: 0 2px 0 0.3rem;
    width: 6rem;
    border: none;
}
.form-item input:focus{
    outline: none;
}

.other-way{
    font-size: 14px;
    padding: 0.4rem 0.5rem;
    display: block;
}
.wrpa-btn{
    margin: 0 0.4rem;
}
.wrpa-btn button{
    width: 100%;
    color: #fff;
    font-size: 16px;
    padding: 0.3rem 0;
    background-color: #21B100;
}
.wrpa-btn button[disabled]{
    opacity: 0.5;
}

</style>
