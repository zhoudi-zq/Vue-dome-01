<template>
  <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in news" :key="item.id">
					<router-link :to="'/home/newsinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
              <h1>{{ item.title}}</h1>
							<p class='mui-ellipsis'>
                <span>发表时间：{{ item.add_time | dataFormat('YY-MM-DD') }}</span>
                <span>点击：{{ item.click }}次</span>
              </p>
						</div>
					</router-link>
				</li>
				
			</ul>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui'
  export default{
    data(){
      return{
        news:[]
      }
    },
    created(){this.getList()},
    methods:{
      getList(){
        this.$http.get('../../../json/api1.json').then(result=>{
          if(result.body.status === 0){
            this.news = result.body.message
          }else{
            Toast('获取失败')
          }
        })
      }
    }
  }

</script>

<style lang="less" scoped>
  .mui-media-body{
    h1{
      font-size: 16px;
    }
    .mui-ellipsis{
      font-size: 12px;
      color:#226aff;
      display: flex;
      justify-content: space-between;
    }
  }

</style>
