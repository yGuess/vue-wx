<template>
    <div class="container-item" ref="contacts">
        <ul class="list-base">
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
        <div id="list-friends">
            <ul class="list-base">
                <li id="A" class="letter-title">A</li>
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
                <li id="B" class="letter-title">B</li>
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
                <li id="C" class="letter-title">C</li>
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
        <letterSequence :transFormX="transFormX"></letterSequence>
    </div>
</template>

<script>
import letterSequence from '../comonents/letterSequence.vue';

export default {
    name: 'contacts',
    data(){
        return {
            transFormX: 0
        }
    },
    mounted: function(){
        this.transFormX = this.$refs.contacts.offsetLeft;
    },
    components: {
        letterSequence
    }
}
</script>

<style scoped>
.letter-title{
    font-size: 14px;
    color: #999;
    padding: 0.15rem 0.4rem;
    background-color: rgba(144, 144, 144, .15);
}
</style>
