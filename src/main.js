import Vue from 'vue';
import VueRouter from 'vue-router';

// 页面
import App from './pages/app.vue';
import IndexPage from './pages/index.vue';

// 组件
import yHeader from './comonents/yHeader.vue';
import tabbar from './comonents/tabbar.vue';

Vue.component('App' , App);
Vue.component('IndexPage' , IndexPage);

Vue.component('yHeader' , yHeader);
Vue.component('tabbar' , tabbar);

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