<template>
  <div class="newsinfo-container" >
    <h3 class="title">{{ newsinfo.title }}</h3>
      <p class="subtitle">
        <span>发表时间：{{ newsinfo.add_time | dataFormat }}</span>
        <span>点击{{ newsinfo.click }}次</span>
      </p>
      <hr>
      <div class="newsinfo-content" v-html="newsinfo.content">
          
      </div>
      <comment></comment>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
import comment from '../subcomponents/comment.vue'
export default {
  data(){
    return{
      id:this.$route.params.id,
      newsinfo:{} //新闻对象
    }
  },
  created(){
    this.getNews();
  },
  methods:{
    getNews(){
      this.$http.get('../../../json/getnews.json').then(result=>{
          if(result.body.status === 0 ){
            this.newsinfo = result.body.message[0];
            // console.log(this.newsinfo)
          }else{
            Toast('失败了')
          }
      })
    }
  },
  components:{
    comment
  }
}
</script>

<style lang="less">
  .newsinfo-container{
    padding: 0 4px;
    .title{
        font-size: 16px;
        text-align: center;
        font-weight: bold;
        color: red;
        margin: 15px 0;
    }
    .subtitle{
      font-size: 13px;
      color: #266aff;
      display: flex;
      justify-content: space-between;
      padding: 0 5px;
    }
    .newsinfo-content{
      text-align: center;
      img{
        width: 100%;

      }
    }
  }
</style>


