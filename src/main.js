import Vue from 'vue';
import VueRouter from 'vue-router';

// 页面
import App from './pages/app.vue';
import IndexPage from './pages/index.vue';
import contacts from './pages/contacts.vue';

// 组件
import yHeader from './comonents/yHeader.vue';
import tabbar from './comonents/tabbar.vue';
import tabContainer from './comonents/tabContainer.vue';

Vue.component('App' , App);
Vue.component('IndexPage' , IndexPage);
Vue.component('contacts' , contacts);

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
        }
    ]
});

const main = new Vue({
    el: '#app',
    render: h => h(App),
    router
});