<template>
    <div id="signin">
        <yHeader :h-cont="hCont">
            <div slot="right" class="fr header-right">
               <span class="more icon-dot-3"></span>
            </div>
        </yHeader>
        <div class="form signin">
            <h4>使用手机号码登入</h4>
            <div class="form-item">
                <label for="">
                    <span class="fl">国家/地区</span>
                    <input type="text">
                </label>
            </div>
            <div class="form-item">
                <label for="">
                    <span class="fl">手机号码</span>
                    <input type="text" placeholder="请填写手机号码">
                </label>
            </div>
        </div>

        <a class="other-way" href="">用WeChat ID/QQ号码/电子邮箱登入</a>
        <div class="wrpa-btn">
            <button class="btn" disabled>下一步</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'signin',
    data(){
        return {
            hCont: {
                back: true,
                title: ''
            }
        }
    }
}
</script>

<style scoped>
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
