
import Vue from 'vue';

//导入MUI的样式


import VueRouter from 'vue-router';
Vue.use(VueRouter);
import router from './router.js';

import 'mint-ui/lib/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import './css/app.css'
import './lib/mui/css/mui.css'
// import './lib/mui/js/mui.js'
import './lib/mui/css/icons-extra.css'

import { Header,Swipe,SwipeItem } from 'mint-ui'

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Header.name,Header)

import app from './App.vue'





var vm = new Vue({
    el:'#app',
    data:{
        msg:'123'
    },
    render:c => c(app),
    router //将路由对象挂载到vm上
})