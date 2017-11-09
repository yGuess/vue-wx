<template>
    <div>
        <div id="list-friends">
            <ul class="list-base">
                <li id="A" ref="A" class="letter-title">A</li>
                <li>
                    <router-link :to="{ path: '/personalPage/PersonDetailInfo' }">
                        <div class="icon-base">
                            <img src="../../assets/weixin_resource/icons/a_b.png" alt="icon">
                        </div>
                        <div class="item-base text">
                            <p class="title one-line">会写代码的有钱人和我</p>
                        </div>
                    </router-link>
                </li>
                <li>
                    <div>
                        <div class="icon-base">
                            <img src="../../assets/weixin_resource/icons/a_j.png" alt="icon">
                        </div>
                        <div class="item-base text">
                            <p class="title one-line">会写代码的有钱人和我</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <div class="icon-base">
                            <img src="../../assets/weixin_resource/icons/a_n.png" alt="icon">
                        </div>
                        <div class="item-base text">
                            <p class="title one-line">会写代码的有钱人和我</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <div class="icon-base">
                            <img src="../../assets/weixin_resource/icons/a_h.png" alt="icon">
                        </div>
                        <div class="item-base text">
                            <p class="title one-line">会写代码的有钱人和我</p>
                        </div>
                    </div>
                </li>
                <li id="B" ref="B" class="letter-title">B</li>
                <li>
                    <div>
                        <div class="icon-base">
                            <img src="../../assets/weixin_resource/icons/a_b.png" alt="icon">
                        </div>
                        <div class="item-base text">
                            <p class="title one-line">会写代码的有钱人和我</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <div class="icon-base">
                            <img src="../../assets/weixin_resource/icons/a_j.png" alt="icon">
                        </div>
                        <div class="item-base text">
                            <p class="title one-line">会写代码的有钱人和我</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <div class="icon-base">
                            <img src="../../assets/weixin_resource/icons/a_n.png" alt="icon">
                        </div>
                        <div class="item-base text">
                            <p class="title one-line">会写代码的有钱人和我</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <div class="icon-base">
                            <img src="../../assets/weixin_resource/icons/a_h.png" alt="icon">
                        </div>
                        <div class="item-base text">
                            <p class="title one-line">会写代码的有钱人和我</p>
                        </div>
                    </div>
                </li>
                <li id="C" ref="C" class="letter-title">C</li>
                <li>
                    <div>
                        <div class="icon-base">
                            <img src="../../assets/weixin_resource/icons/a_b.png" alt="icon">
                        </div>
                        <div class="item-base text">
                            <p class="title one-line">会写代码的有钱人和我</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <div class="icon-base">
                            <img src="../../assets/weixin_resource/icons/a_j.png" alt="icon">
                        </div>
                        <div class="item-base text">
                            <p class="title one-line">会写代码的有钱人和我</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <div class="icon-base">
                            <img src="../../assets/weixin_resource/icons/a_n.png" alt="icon">
                        </div>
                        <div class="item-base text">
                            <p class="title one-line">会写代码的有钱人和我</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <div class="icon-base">
                            <img src="../../assets/weixin_resource/icons/a_h.png" alt="icon">
                        </div>
                        <div class="item-base text">
                            <p class="title one-line">会写代码的有钱人和我</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div id="letter-sequence" 
             @click="positioning"
             :style="'transform: translateX('+transFormX+'px)'">
            <a href="#" data-href="#" name="top"><span data-href="#" class="icon-up-1"></span></a>
            <ul>
                <li><a data-href="A">A</a></li>
                <li><a data-href="B">B</a></li>
                <li><a data-href="C">C</a></li>
                <li><a data-href="D">D</a></li>
                <li><a data-href="E">E</a></li>
                <li><a data-href="F">F</a></li>
                <li><a data-href="G">G</a></li>
                <li><a data-href="H">H</a></li>
                <li><a data-href="I">I</a></li>
                <li><a data-href="J">J</a></li>
                <li><a data-href="K">K</a></li>
                <li><a data-href="L">L</a></li>
                <li><a data-href="M">M</a></li>
                <li><a data-href="N">N</a></li>
                <li><a data-href="O">O</a></li>
                <li><a data-href="P">P</a></li>
                <li><a data-href="Q">Q</a></li>
                <li><a data-href="R">R</a></li>
                <li><a data-href="S">S</a></li>
                <li><a data-href="T">T</a></li>
                <li><a data-href="U">U</a></li>
                <li><a data-href="V">V</a></li>
                <li><a data-href="W">W</a></li>
                <li><a data-href="X">X</a></li>
                <li><a data-href="V">Y</a></li>
                <li><a data-href="W">Z</a></li>
                <li><a data-href="\"></a></li>
            </ul>
        </div>
    </div>
</template>

<script>
// import letterSequence from '../components/letterSequence.vue';

export default {
    name: 'listContacts',
    props: {
        transFormX: {
            type: [Number , String],
            default: 0,
            required: false
        }
    },
    data(){
        return {
            parent: ''
        }
    },
    methods:{
        positioning(evt){
            let _href = evt.target.dataset.href;
            if(_href == '#'){
                this.parent.scrollTop = 0;
                return;
            } 
            this.parent.scrollTop = this.$refs[_href].offsetTop;
        }
    },
    mounted: function(){
        this.parent = this.$parent.$refs.contacts;
    }
    // components: {
    //     letterSequence
    // }
}
</script>

<style scoped>
.letter-title{
    font-size: 14px;
    color:#999;
    padding: 0.15rem 0.4rem;
    background-color: rgba(144, 144, 144, .15);
}
#letter-sequence{
    position: fixed;
    z-index: 9999;
    top: 0;
    right: 0;
    bottom: 0;
    width: 0.8rem;
    font-size: 12px;
}
#letter-sequence:active{
    background-color: rgba(144, 144, 144, .2);
}
#letter-sequence a,
#letter-sequence a span
{
    color: #666;
    padding: 3px;
    text-align: center;
    display: block;
}
</style>