<template>

    <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='maxcount' style="height:23px;">
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number"  ref="numbox" :value="this.id" />
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
			</div>

</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'
export default {
  data(){
    return{
      val:0
     }
  },
  props:[
    "maxcount",
    "id"
  ],
  mounted() {
    //初始化数字选择框组件
    mui(".mui-numbox").numbox();
  },
  created(){
  },
  methods:{
    countChanged(){
      
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
