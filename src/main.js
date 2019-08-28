import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)
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
var car = JSON.parse(localStorage.getItem('car') || '[]')
var store = new Vuex.Store({
    state: {
        car:car
    },
    mutations: {
        addToCar(state, goodsInfos){
            //点击加入购物车，把商品信息保存到store 中的 car 上
            //分析：
            //1.    如果购物车中，之前就已经有了这个对应的商品了，那么只要更新数量即可，否则把这条goodsinfo push到car数组中
            var flag = false;
            state.car.some(item => {
                if(item.id == goodsInfos.id){
                   
                    item.count += Number(goodsInfos.count);
                    item.optional = item.kucun-item.count;
                    item.img_url = goodsInfos.img_url;
                    item.title = goodsInfos.title;
                    flag = true;
                    return true;
                }
            });
            // 如果最终循环完毕 得到的 falg 还是false 则把商品的数据直接push到 car中
            if(!flag){
                state.car.push(goodsInfos)
            }
        
            //当更新car 之后 把car数组存储到本地localstorage 中
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        updateShopCar(state,goodsInfos){
            state.car.some(item=>{
                if(item.id == goodsInfos.id){
                    item.count = parseInt(goodsInfos.count);
                    console.log(item.count)
                    item.optional=item.kucun-item.count
                };
                localStorage.setItem('car',JSON.stringify(state.car))
            })
        },
        removeFromCar(state,id){
            state.car.some((item,i)=> {
                if (item.id == id){
                    state.car.splice(i,1);
                    return true;
                };
               
            });
            localStorage.setItem('car',JSON.stringify(state.car))
        }
        
    },
    watch: {
        'this.$refs.numbox.value' : function(newVal){
        console.log(newVal)
      }
    },
    getters: {
        getAllCount(state){
            var c = 0;
            state.car.forEach(item => {
                if(item.selected){
                    c += item.count
                }
            });
            return c;
        },
        getAllCountPrice(state){
            var c = 0;
            state.car.forEach(item => {
                if(item.selected){
                    c += item.count*item.price
                }
            });
            return c;
        },
        getKuCun(state){
            var o = {};
            state.car.forEach(item => {
                o[item.id] = item.kucun;
            });
            return o;
        },
        getOptional(state){
            var o = {};
            state.car.forEach(item => {
                o[item.id] = item.optional;
            });
            return o;
        },
        getCount(state){
            var o = {};
            state.car.forEach(item => {
                o[item.id] = item.count;
            });
            return o;
      }
    }
})
var vm = new Vue({
    el:'#app',
    data:{
        msg:'123'
    },
    render:c => c(app),
    router ,//将路由对象挂载到vm上
    store   //将vuex创建的 store 挂载到vm 实例上
})