<template>
  <div>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in LunboList" :key="item.id">
          <img :src='item["img_url"]' alt="">
        </mt-swipe-item>
      </mt-swipe>	
  </div>
</template>
<script>
    import { Toast } from 'mint-ui'
export default {
  data(){
    return{
      // LunboList:[] //保存轮播图数组
    }
  },
  props:[
    "LunboList"
  ],
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
  }
}
</script>
<style lang="less" scoped>
  .mint-swipe {
      height: 200px;
      .mint-swipe-item {
        &:nth-child(1){
          background-color: red;
        }
        &:nth-child(2){
          background-color: blue;
        }
        &:nth-child(3){
          background-color: green;
        }
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
</style>
