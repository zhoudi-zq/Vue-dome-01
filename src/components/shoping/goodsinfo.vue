<template>
  <div class="goodsinfo-container"> 
    
    <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<swipe :LunboList="LunboList" :isfull="false"></swipe>
					</div>
				</div>
			</div>
			<div class="mui-card">
				<div class="mui-card-header">页眉</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
					</div>
				</div>
				<div class="mui-card-footer">页脚</div>
			</div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
import swipe from '../subcomponents/swipe.vue'
export default {
  data(){
    return{
      LunboList:[]
    }
    },
    created(){
      this.getLunbotu()
    },
  methods:{
    getLunbotu(){//获取轮播图数据的方法
      this.$http.get('../../../js/goodsphoto.json').then(result=>{
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
  },
  components:{
    swipe
  }
}
</script>

<style lang="less" scoped>
    .goodsinfo-container{
      
    }
</style>
