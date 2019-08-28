<template>
        <!-- 加入购物车小球 -->
  <div class="goodsinfo-container"> 
    <transition 
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter" >
        <div class="ball" v-show="flag" ref="ball">
        </div>
    </transition>
    <!-- 商品轮播图区域 -->
    <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<swipe :LunboList="LunboList" :isfull="false"></swipe>
				</div>
			</div>
		</div>

      <!-- 商品购买区域 -->
			<div class="mui-card">
				<div class="mui-card-header">{{ goodsinfo.title }}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p><span>市场价：<del>￥{{ goodsinfo.market_price }}</del>&nbsp;&nbsp;</span>销售价：<span class="now-price">￥{{ goodsinfo.sell_price }}</span></p>
            <p class="num">购买数量&nbsp;:&nbsp;&nbsp;<numbox v-model="selectedCount" :numMaxCount="numMax" :numboxId="this.id" @getCount="getCount"></numbox></p>
            <p>
              <mt-button type="primary" size="small">立即购买</mt-button>
              <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
            </p>
					</div>
				</div>
			</div>

      <!--  -->
      <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
              <p>商品货号：{{ goodsinfo.goods_no }}</p>
              <p>库存情况：{{numMax}}</p>
              <p>上架时间：{{ goodsinfo.add_time | dataFormat }}</p>
              <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goTuWenInfo(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="gotaolunInfo(id)">商品讨论</mt-button>
              </div>
					</div>
				</div>
			</div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
import swipe from '../subcomponents/swipe.vue'
import numbox from '../subcomponents/numbox.vue'
// import func from '../../../vue-temp/vue-editor-bridge';
export default{
  data(){
    return{
      LunboList:[],
      goodsinfo:{},
      id:this.$route.params.id,
      flag:false,
      selectedCount:1
    }
    },
    created(){
      this.getLunbotu(),
      this.getGoodsInfo()
    },
  methods:{
    getLunbotu(){//获取轮播图数据的方法
      this.$http.get('../../../js/goodsphoto.json').then(result=>{
        if(result.body.status === 0){
          //成功了
          this.LunboList = result.body.message;
          // Toast("获取加载轮播图成功")
        }else{
          //失败了
            Toast("获取加载轮播图失败")
        };
      })
    },
    getGoodsInfo(){
      this.$http.get('../../../js/getgoodsinfo.json').then(result=>{
        if(result.body.status === 0){
          // console.log(result.body.message[this.$route.params.id]);
          this.goodsinfo = result.body.message[this.id]
        }
      })
    },
    goTuWenInfo(id){
      this.$router.push({name:"goodstuwen",params:{ id }})
    },
    gotaolunInfo(id){
      this.$router.push({name:"goodstaolun",params:{ id }})
    },
    getCount(count){
      this.selectedCount = count;
      console.log(count);
    },
    addToShopCar(){
      this.flag=!this.flag;
      let goodsInfos = {
        id:this.id,
        title:this.goodsinfo.title,
        count:this.selectedCount,
        price:this.goodsinfo.sell_price,
        img_url:this.goodsinfo.img_url,
        kucun:this.goodsinfo.kucun,
        selectedCount:this.selectedCount,
        selected:true
        };
      this.$store.commit('addToCar',goodsInfos);
    },
    beforeEnter(el){
      el.style.transform = "translate(0, 0)";
    },
    enter(el,done){
      el.offsetWidth;
      // 获取小球的位置
      const ballPosition = this.$refs.ball.getBoundingClientRect(); 
      const badgePosition = document.getElementById("badge").getBoundingClientRect();
      let x = badgePosition.left - ballPosition.left;
      let y = badgePosition.top - ballPosition.top;
      el.style.transform = `translate(${x}px, ${y}px)`;
      el.style.transition = "all 0.5s cubic-bezier(.4,-0.5,0.5,.68)";
      done();
    },
    afterEnter(el){
      this.flag=! this.flag;
  }
  },
  computed:{
    numMax : function(){
      return this.$store.getters.getKuCun[this.id]-this.$store.getters.getCount[this.id]
    }
  },
  components:{
    swipe,
    numbox
  }
}

</script>

<style lang="less" scoped>
    
    .goodsinfo-container{
      background-color: #eee;
      overflow: hidden;
      // position: relative;
      
      .now-price{
        color:red;
        font-size: 16px;
        font-weight: bold;
      }
      .num{
        display: flex;
        align-items: center;
      
      }
      .mui-card-footer{
        display: block;
        button{
          margin: 13px 0;
        }

      }
      .ball{
        width: 20px;
        height: 20px;
        background-color: red;
        border-radius: 50%;
        position: absolute;
        left: 148px;
        top: 406px;
        z-index: 999;
        // transform:translate(87px,212px);
      }
    }
</style>
