<template>
  <div class="photoinfo-container">
    <h3>图片详情</h3>
    <p><span>发表时间：2015-04-18 12：18:50</span><span>点击：0次</span></p>
  <hr>
  <div class="img-container">
    <img :src="item.src" v-for="item in photoinfos" :key="item.id">
    
  </div>
  <comment></comment>
  </div>
</template>

<script>
import comment from "../subcomponents/comment.vue"
export default {
  data(){
    return{
      photoinfos:[],
      id:this.$route.params.id
    }
  },
  created(){
    this.getPhotoInfo()
  },
  methods:{
    getPhotoInfo(){
      this.$http.get("../../../json/photoinfo.json").then(result=>{
        if(result.body.status === 0){
         this.photoinfos = result.body.message
        }
      })
    }
  },
  components:{
    comment
  }
}
</script>

<style lang="less" scoped>
  .photoinfo-container{
    h3{
      text-align: center;
      font-size: 18px;
      color: #266aff;
      font-weight: bold;
      padding: 10px;
    }
    p{
      padding:5px 10px;
      display: flex;
      justify-content: space-between;
    }
    .img-container{
      display: flex;
      flex-wrap: wrap;
      padding: 0 28px;
      justify-content: space-between;
      img{
        width: 150px;
        height: 150px;
        margin: 10px 0;
      }
    }
  }
</style>
