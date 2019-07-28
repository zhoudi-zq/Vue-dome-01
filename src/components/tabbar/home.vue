<template>
  <div >
      <mt-swipe :auto="4000">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe>					
	</div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    // getLunbotu(){//获取轮播图数据的方法
    //   this.$http.get('../../../js/api.json')
    // }
  }
}
</script>

<style lang="scss" scoped>
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
      }
    }
    
</style>



