<template>
<div class="shopcar-container">
      <div class="goods-list">
      <!-- 商品列表项区域 -->
      <div class="mui-card" v-for="(item,i) in goodslist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
              <mt-switch></mt-switch>
              <img :src="item.img_url">
              <div class="info">
                <h1>{{  item.title }}</h1>
                <p>
                  <span class="price">￥{{ item.price }}</span>
                  <shopcarnumbox :id="item.id" :count="$store.getters.getCount[item.id]" :maxcount="$store.getters.getMaxCount[item.id]"></shopcarnumbox>
                  <a href="#" class="del" @click="del(item.id,i)">删除</a>
                </p>
              </div>
              </div>
					</div>
				</div>
			
    <!-- 结算区域 -->
      <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
            <div class="left">
              <p>总计（不含运费）</p>
              <p>已勾选商品 <span class="red">0</span> 件，总价 <span class="red">￥0</span></p>
            </div>
            <div class="right">
               <mt-button type="danger">去结算</mt-button>
            </div>
          </div>
				</div>
			</div>
</div>
</div>
</template>

<script>
import shopcarnumbox from '../subcomponents/shopcarnumbox.vue'
export default {
  data(){
    return{
      goodslist:[]//购物车中所有商品的数据
    };
  },
  created(){
    this.getCarInfo()
  },
  methods:{
    getCarInfo(){
      // 正常项目的流程是通过接口获取数据

      // var idArr =[];//1.获取到store 中所有商品的id 然后拼接出一个用逗号分隔的字符串
      // this.$store.state.car.forEach(item => {
      //   idArr.push(item.id)
      // });
      // //如果购物车中没有商品 则直接返回 不需要请求数据接口 否则会报错
      // if (idArr.length<=0){
      //   return;
      // }
      //   //获取购物车的商品列表
      //   this.$http.get("api/goods/getshopcarlist/" + idArr.join(",")).then(result=>{
      //     if (result.body.status === 0){
      //       this.goodslist = result.body.message;
      //     }
      //   })


      this.goodslist = this.$store.state.car;
      // console.log(this.goodslist);
      // console.log( localStorage.car);
      
    },
    del(id,index){
      this.goodslist.splice(index,1);
      this.$store.commit("delGoods",id)
    }
  },
  components:{
    shopcarnumbox
  }
}
</script>

<style  lang="less" scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;
      .goods-list {
        .mui-card-content-inner{
          display: flex;
          // justify-content: center;
          align-items: center;
             h1{
                font-size: 14px;
                font-weight: bold;
              }
            img{
              width: 60px;
              height: 60px;
            }
            .info{
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            p{
              // height: 20px;
              margin: 0;
              display: flex;
              line-height: 20px;
              justify-content: space-between;
              justify-items:center;
              .price{
                font-weight: bold;
                color: red;
                
              }
            }
            }
           
        }
        .jiesuan{
          display: flex;
          justify-content: space-between;
          align-content: center;
          .red{
            color: red;
            font-weight: bold;
            font-size: 16px;
          }
          .left{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-content: center;
          }
          .right{
            text-align: center;
          }
        }
    }
}
  
</style>