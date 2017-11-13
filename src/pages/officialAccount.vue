<template>
    <div id="official-account">
        <yHeader :h-cont="hCont">
            <div slot="right" class="fr header-right">
                <img class="icon-search" src="../../assets/weixin_resource/icons/a_2.png" alt="search">
                <img class="icon-plus" src="../../assets/weixin_resource/icons/a9m.png" alt="add">
            </div>
        </yHeader>
        <ListContacts v-bind:icon-to-top="false"></ListContacts>
    </div>
</template>

<script>
import ListContacts from './listContacts.vue';

export default {
    name: 'OfficialAccount',
    data(){
        return {
            hCont: {
                back: true,
                title: '官方账号'
            }
        }
    },
    components: {
        ListContacts
    }
}
</script>

<style scoped>
.icon-plus{
    padding-left: 0.4rem;
    padding-right: 0.4rem;
}
#official-account > div{
    padding-top: 1.25rem;
}
</style>
