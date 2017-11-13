<template>
    <div class="container-item" ref="contacts">
        <ul class="list-base">
            <li>
                <router-link :to="{ path: '/friendRecoInfo'}">
                    <div class="icon-base">
                        <img src="../../assets/weixin_resource/icons/a_b.png" alt="icon">
                    </div>
                    <div class="item-base text">
                        <p class="title one-line">推荐信息</p>
                    </div>
                </router-link>
            </li>
            <li>
                <div>
                    <div class="icon-base">
                        <img src="../../assets/weixin_resource/icons/a_j.png" alt="icon">
                    </div>
                    <div class="item-base text">
                        <p class="title one-line">聊天室</p>
                    </div>
                </div>
            </li>
            <li>
                <div>
                    <div class="icon-base">
                        <img src="../../assets/weixin_resource/icons/a_n.png" alt="icon">
                    </div>
                    <div class="item-base text">
                        <p class="title one-line">标签</p>
                    </div>
                </div>
            </li>
            <li>
                <router-link :to="{path: '/officialAccount'}">
                    <div class="icon-base">
                        <img src="../../assets/weixin_resource/icons/a_h.png" alt="icon">
                    </div>
                    <div class="item-base text">
                        <p class="title one-line">官方账号</p>
                    </div>
                </router-link>
            </li>
        </ul>
        <ListContacts :transFormX="transFormX"></ListContacts>
    </div>
</template>

<script>
import ListContacts from './listContacts.vue';

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
        ListContacts
    }
}
</script>

<style scoped>
</style>
