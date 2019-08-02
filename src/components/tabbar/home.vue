<template>
  <div >
      <!-- <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in LunboList" :key="item.id">
          <img :src='item["img_url"]' alt="">
        </mt-swipe-item>
      </mt-swipe>	 -->

      <swipe :LunboList="LunboList"></swipe>

      <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newlist">
		                    <img src="../../images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
		                    <img src="../../images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/shangpingoumai">
		                    <img src="../../images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newlist">
		                    <img src="../../images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newlist">
		                    <img src="../../images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newlist">
		                    <img src="../../images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></router-link></li>
		            
		        </ul> 				
	</div>
</template>

<script>
import { Toast } from 'mint-ui'
import swipe from '../subcomponents/swipe.vue'
export default {
  data(){
    return{
      LunboList:[]
    }
    },
    created(){
      this.getLunbotu()
    },
  methods:{
    getLunbotu(){//获取轮播图数据的方法
      this.$http.get('../../../js/api.json').then(result=>{
        if(result.body.status === 0){
          //成功了
          this.LunboList = result.body.message;
          Toast("获取加载轮播图成功")
        }else{
          //失败了
            Toast("获取加载轮播图失败")
        };
      })
    }
  },
  components:{
    swipe
  }
}
// import { Toast } from 'mint-ui'
// export default {
//   data(){
//     return{
//       LunboList:[] //保存轮播图数组
//     }
//   },
//   created(){
//     this.getLunbotu()
//   },
//   methods:{
//     getLunbotu(){//获取轮播图数据的方法
//       this.$http.get('../../../js/api.json').then(result=>{
//         if(result.body.status === 0){
//           //成功了
//           this.LunboList = result.body.message;
//           Toast("获取加载轮播图成功")
//         }else{
//           //失败了
//             Toast("获取加载轮播图失败")
//         };
//       })
//     }
//   }
// }
</script>

<style lang="scss" scoped>
    // .mint-swipe {
    //   height: 200px;
    //   .mint-swipe-item {
    //     &:nth-child(1){
    //       background-color: red;
    //     }
    //     &:nth-child(2){
    //       background-color: blue;
    //     }
    //     &:nth-child(3){
    //       background-color: green;
    //     }
    //     img{
    //       width: 100%;
    //       height: 100%;
    //     }
    //   }
    // }
    .mui-grid-view.mui-grid-9{
      background-color: #fff;
      border: 0;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
      border: 0;
      img{
        width: 60px;
        height: 60px;
      }
      .mui-media-body{
           font-size: 14px;
      }
    }
    
</style>



