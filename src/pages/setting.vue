<template>
    <div id="setting">
        <yHeader :h-cont="hCont"></yHeader>
        <div class="list-set">
            <div class="item-set">
                <a>新讯息通知</a>
            </div>
            <div class="item-set">
                <a>勿扰模式</a>
            </div>
            <div class="item-set">
                <a>聊天</a>
            </div>
            <div class="item-set">
                <a>隐私</a>
            </div>
            <div class="item-set">
                <a>一般</a>
            </div>
            <div class="item-set mb0_4">
                <a>账户与安全</a>
            </div>
            <div class="item-set">
                <a>关于WeChat</a>
            </div>
            <div class="item-set mb0_4">
                <a>帮助与意见反馈</a>
            </div>
            <div class="item-set mb0_4">
                <a>插件</a>
            </div>
            <div class="item-set">
                <a @click="exit">退出</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'setting',
    data(){
        return {
            hCont: {
                title: '设定',
                back: true
            }
        }
    },
    methods:{
        exit(){
            this.$router.replace( { path: '/'} );
        }
    }
}
</script>

<style scoped>
.list-set{
    padding-top: 1.65rem;
}
.item-set{
    background-color: #fff;
    padding: 0 0.4rem;
}
.item-set:active{
    background-color: rgba(0, 0, 0, .1);
}
.item-set a{
    display: block;
    padding: 0.4rem 0;
    font-size: 14px;
    border-bottom: 0.5px solid #e1e1e1;
}
.mb0_4{
    margin-bottom: 0.4rem;
}
.mt0_4{
    margin-top: 0.4rem;
}

</style>
