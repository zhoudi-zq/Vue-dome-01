<template>
  <div>
    <div class="mui-numbox" data-numbox-min='1' :data-numbox-max="maxcount">
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" :value="count" @change="countChanged" ref="shopcarnumbox" />
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
			</div>
  </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'
export default {
  data(){
    return{

     }
  },
  props:[
    "id",
    "count",
    "maxcount"
    
  ],
  mounted() {
    //初始化数字选择框组件
    mui(".mui-numbox").numbox();
  },
  methods:{
    countChanged(){
      //每当文本框的数据被修改的时候 立即把最新的数据通过事件调用传递给父组件
      // console.log(this.$refs.numbox.value)
      // this.$emit("getCount",parseInt(this.$refs.numbox.value))
     var goodsinfo = {id:this.id ,count:this.$refs.shopcarnumbox.value}
     this.$store.commit("updateShopCar",goodsinfo)
    }
  },
  watch:{
    maxcount:function(newvalue,oldvalue){
      //调用js api方法
      mui(".mui-numbox").numbox().setOption("max",newvalue)

    }
  }
}
</script>

<style lang="less" scoped>

</style>
