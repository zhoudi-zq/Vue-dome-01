
import Vue from 'vue';

//导入MUI的样式


import VueRouter from 'vue-router';
Vue.use(VueRouter);
// Vue.http.options.root = ""//设置请求根路经
// Vue.http.options.emulateJSON = true; //全局设置post时候表单数据格式
import router from './router.js';

import VueResource from 'vue-resource'
Vue.use(VueResource)
import moment from 'moment'
Vue.filter('dataFormat',function(dataStr,pattern = "YY-MM-DD HH:mm:ss"){
   return moment(dataStr).format(pattern)
})

import 'mint-ui/lib/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import './css/app.css'
import './lib/mui/css/mui.css'

// import './lib/mui/js/webviewGroup.js'
import './lib/mui/css/icons-extra.css'

// import { Header,Swipe,SwipeItem,Button,Lazyload } from 'mint-ui'

// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Header.name,Header)
// Vue.component(Button.name,Button)
// Vue.use(Lazyload) //懒加载必须全部导入 按需导入不生效
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)


import app from './App.vue'





var vm = new Vue({
    el:'#app',
    data:{
        msg:'123'
    },
    render:c => c(app),
    router //将路由对象挂载到vm上
})