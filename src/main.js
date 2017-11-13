import Vue from 'vue';
import VueRouter from 'vue-router';

// 页面
import App from './pages/app.vue';
import IndexPage from './pages/index.vue';
import Contacts from './pages/contacts.vue';
import Wallet from './pages/wallet.vue';
import CircleOfFriends from './pages/circleOfFriends.vue';
import ListContacts from './pages/listContacts.vue';
import PersonalPage from './pages/personalPage.vue';
import MorePersonalPage from './pages/morePersonalPage.vue';
import OfficialAccount from './pages/officialAccount.vue';
import ChatPage from './pages/chatPage.vue';
import ChatInfo from './pages/ChatInfo.vue';
import PersonDetailInfo from './pages/personDetailInfo.vue';
import FriendRecoInfo from './pages/friendRecoInfo.vue';
import NewFriend from './pages/newFriend.vue';

// 组件
import yHeader from './comonents/yHeader.vue';
import tabbar from './comonents/tabbar.vue';
import tabContainer from './comonents/tabContainer.vue';

Vue.component('App' , App);
Vue.component('IndexPage' , IndexPage);
Vue.component('Contacts' , Contacts);
Vue.component('Wallet' , Wallet);
Vue.component('CircleOfFriends' , CircleOfFriends);
Vue.component('PersonalPage' , PersonalPage);
Vue.component('MorePersonalPage' , MorePersonalPage);
Vue.component('OfficialAccount' , OfficialAccount);
Vue.component('ChatPage' , ChatPage);
Vue.component('ChatInfo' , ChatInfo);
Vue.component('PersonDetailInfo' , PersonDetailInfo);
Vue.component('FriendRecoInfo' , FriendRecoInfo);
Vue.component('NewFriend' , NewFriend);

Vue.component('yHeader' , yHeader);
Vue.component('tabbar' , tabbar);
Vue.component('tabContainer' , tabContainer);

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: IndexPage       
        },
        {
            path: '/wallet',
            name: 'wallet',
            component: Wallet  
        },
        {
            path: '/circleOfFriends',
            name: 'circleOfFriends',
            component: CircleOfFriends  
        },
        {
            path: '/personalPage',
            name: 'personalPage',
            component: PersonalPage  
        },
        {
            path: '/personalPage/morePersonalPage',
            name: 'morePersonalPage',
            component: MorePersonalPage  
        },
        {
            path: '/personalPage/PersonDetailInfo',
            name: 'PersonDetailInfo',
            component: PersonDetailInfo  
        },
        {
            path: '/officialAccount',
            name: 'officialAccount',
            component: OfficialAccount  
        },
        {
            path: '/chat',
            name: 'chat',
            component: ChatPage  
        },
        {
            path: '/chat/chatInfo',
            name: 'chatInfo',
            component: ChatInfo
        },
        {
            path: '/friendRecoInfo',
            name: 'friendRecoInfo',
            component: FriendRecoInfo
        },
        {
            path: '/newFriend',
            name: 'newFriend',
            component: NewFriend
        }
    ]
});

const main = new Vue({
    el: '#app',
    render: h => h(App),
    router
});