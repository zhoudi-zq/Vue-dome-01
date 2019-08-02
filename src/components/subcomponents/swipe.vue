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
    
export default {
  data(){
    return{
      // LunboList:[] //保存轮播图数组
    }
  },
  props:[
    "LunboList"
  ],
  methods:{
    
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
