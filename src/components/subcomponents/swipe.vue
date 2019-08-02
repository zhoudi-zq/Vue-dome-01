<template>
  <div>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in LunboList" :key="item.id"  >
          <img :src='item["img_url"]' alt="" :class="{full:isfull}">
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
    "LunboList",
    "isfull"
  ],
  methods:{
    
  }
}
</script>
<style lang="less" scoped>
  .mint-swipe {
      height: 200px;
      .mint-swipe-item {
        text-align: center;
        // &:nth-child(1){
        //   background-color: red;
        // }
        // &:nth-child(2){
        //   background-color: blue;
        // }
        // &:nth-child(3){
        //   background-color: green;
        // }
        img{
          height: 100%;
        }
      }
    }
    .full{
          width: 100%;
        }
</style>
