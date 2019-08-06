<template>

    <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='maxcount' style="height:23px;">
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					
          <input id="test" class="mui-input-numbox" type="number" :value="count" />
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
			</div>

</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'
import func from '../../../vue-temp/vue-editor-bridge';
export default {
  data(){
    return{
      val:0
     }
  },
  props:[
    "maxcount",
    "count"
  ],
  mounted() {
    //初始化数字选择框组件
    mui(".mui-numbox").numbox();
  },
  created(){
  },
  methods:{
   
  },
  watch:{
    maxcount:function(){

    }
  }

}

</script>

<style lang="less" scoped>

</style>
