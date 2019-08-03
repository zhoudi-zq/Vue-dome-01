
import VueRouter from 'vue-router'

import home from './components/tabbar/home.vue'
import member from './components/tabbar/member.vue'
import shopcar from './components/tabbar/shopcar.vue'
import search from './components/tabbar/search.vue'
import newlist from './components/news/newlist.vue'
import newsinfo from './components/news/newsinfo.vue'
import photolist from './components/photos/photolist.vue'
import photoinfo from './components/photos/photoinfo.vue'
import shangpingoumai from './components/shoping/shangpingoumai.vue'
import goodsinfo from './components/shoping/goodsinfo.vue'
import goodstuwen from './components/shoping/goodstuwen.vue'
import goodstaolun from './components/shoping/goodstaolun.vue'
var router = new VueRouter({
    routes:[
            {  path:'/',redirect:'/home' },
            {  path:'/home',component:home },
            {  path:'/member',component:member },
            {  path:'/shopcar',component:shopcar },
            {  path:'/search',component:search },
            {  path:'/home/newlist',component:newlist },
            {  path:'/home/newsinfo/:id',component:newsinfo },
            {  path:'/home/photolist',component:photolist },
            {  path:'/home/photoinfo',component:photoinfo },
            {  path:'/home/shangpingoumai' ,component:shangpingoumai },
            {  path:'/home/goodsinfo/:id',component:goodsinfo},
            {  path:'/home/goodstuwen/:id',component:goodstuwen,name:"goodstuwen"},
            {  path:'/home/goodstaolun/:id',component:goodstaolun,name:"goodstaolun"}
        ],
        linkActiveClass:'mui-active' //覆盖默认的 link-active-class 这个类
    })
export default router;