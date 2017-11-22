import Vue from 'vue';
import VueRouter from 'vue-router';

// 页面
import App from './pages/app.vue';
import InitPage from './pages/launch.vue';
import Signup from './pages/signup.vue';
import Signin from './pages/signin.vue';
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
import Setting from './pages/setting.vue';

// 组件
import yHeader from './comonents/yHeader.vue';
import tabbar from './comonents/tabbar.vue';
import tabContainer from './comonents/tabContainer.vue';

Vue.component('App' , App);
Vue.component('InitPage' , InitPage);
Vue.component('Signup' , Signup);
Vue.component('Signin' , Signin);
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
Vue.component('Setting' , Setting);

Vue.component('yHeader' , yHeader);
Vue.component('tabbar' , tabbar);
Vue.component('tabContainer' , tabContainer);

module.exports = new VueRouter({
    base: '/pages/Lanch',
    routes: [
        {
            path: '/',
            name: 'init',
            component: InitPage       
        },
        {
            path: '/signup',
            name: 'signup',
            component: Signup       
        },
        {
            path: '/signin',
            name: 'signin',
            component: Signin       
        },
        {
            path: '/index',
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
        },
        {
            path: '/setting',
            name: 'setting',
            component: Setting
        }
    ]
});
