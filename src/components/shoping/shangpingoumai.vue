<template>
  <div class="goods-list">
      <router-link class="goods-item" :to="'/home/goodsinfo/'+0" tag="div">
        <img src="https://f10.baidu.com/it/u=2808071685,548568636&fm=72" alt="">
        <h1>HUAWEI Mate 20</h1>
        <div class="info">
          <p class="price"><span class="new">￥2199</span><span class="old">￥2899</span></p>
          <p class="sell"><span>热卖中</span><span>剩60件</span></p>
        </div>
      </router-link>
      <router-link class="goods-item" :to="'/home/goodsinfo/'+1" tag="div">
        <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=394841827,3228350768&fm=15&gp=0.jpg" alt="">
        <h1>HUAWEI Mate 20</h1>
        <div class="info">
          <p class="price"><span class="new">￥2199</span><span class="old">￥2899</span></p>
          <p class="sell"><span>热卖中</span><span>剩60件</span></p>
        </div>
      </router-link>
      <router-link class="goods-item" :to="'/home/goodsinfo/'+2" tag="div">
        <img src="https://f10.baidu.com/it/u=2808071685,548568636&fm=72" alt="">
        <h1>HUAWEI Mate 20  HUAWEI Mate 20</h1>
        <div class="info">
          <p class="price"><span class="new">￥2199</span><span class="old">￥2899</span></p>
          <p class="sell"><span>热卖中</span><span>剩60件</span></p>
        </div>
      </router-link>
      <router-link class="goods-item" :to="'/home/goodsinfo/'+3" tag="div">
        <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=394841827,3228350768&fm=15&gp=0.jpg" alt="">
        <h1>HUAWEI Mate 20 HUAWEI Mate 20</h1>
        <div class="info">
          <p class="price"><span class="new">￥2199</span><span class="old">￥2899</span></p>
          <p class="sell"><span>热卖中</span><span>剩60件</span></p>
        </div>
      </router-link>
      <router-link class="goods-item" :to="'/home/goodsinfo/'+4" tag="div">
        <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=394841827,3228350768&fm=15&gp=0.jpg" alt="">
        <h1>HUAWEI Mate 20</h1>
        <div class="info">
          <p class="price"><span class="new">￥2199</span><span class="old">￥2899</span></p>
          <p class="sell"><span>热卖中</span><span>剩60件</span></p>
        </div>
      </router-link>
    
      
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
  .goods-list{
    padding: 5px;
    display:flex; 
    flex-wrap: wrap;
    justify-content: space-between;
    .goods-item{
      width: 49%;
      height: 49%;
      border: 1px solid #ccc;
      margin: 3px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 350px;
      box-shadow: 0 0 6px #ccc;
      img{
        width: 100%;
        height: 200px;
      }
      h1{

        font-size: 16px;
        font-weight: bold;
        text-align: center;
        overflow: hidden;
        padding: 2px;
      }
      .info{
        background-color: #ccc;
        .price{
          margin: 4px 0;
         .new{
           font-size: 16px;
           color: red;
           font-weight: bold;
           padding: 0 3px;
           margin-right: 10px;
         }
         .old{
           font-size: 12px;
           text-decoration: line-through;
         }
        }
        .sell{
          margin: 4px 0;
          display: flex;
          padding:2px 5px;
          justify-content: space-between;
        }
      }
    }
  }
</style>
