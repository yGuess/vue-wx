<template>
    <div id="personalPage">
        <yHeader :h-cont="hCont"></yHeader>
        <div class="list-personal-info">
            <ul>
                <li>
                    <a href="#" class="clearfix">
                        <p class="fl">性别</p>
                        <span class="fr">男</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="clearfix">
                        <p class="fl">地区</p>
                        <span class="fr">浙江 杭州</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="clearfix">
                        <p class="fl">个性签名</p>
                        <span class="fr">身若围城</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'personalPage',
    data(){
        return {
            hCont: {
                back: true,
                title: '更多资讯'
            }
        }
    }
}
</script>

<style scoped>
.list-personal-info{
    padding-top: 1.65rem;
}
.list-personal-info li{
    padding: 0 0.4rem;
    background-color: #fff;
}
.list-personal-info li:active{
    background-color: rgba(0, 0, 0, .2);
}
.list-personal-info li a{
    color: #333;
    display: block;
    font-size: 16px;
    padding: 0.4rem 0;
    border-bottom: 0.5px solid #ddd;
}
.list-personal-info li a span{
    color: #999;
}
</style>
