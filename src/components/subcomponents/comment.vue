<template>
    <div class="cmt-container">
      <h3>发表评论</h3>
      <hr>
      <textarea placeholder="请输入要评论的内容（最多吐槽120字）" maxlength="120" v-model="msg"></textarea>
      <div class="cmt-list">
        <div class="cmt-item"  v-for="(item,i) in cmtlist" :key="item.user_name">
        <div class="cmt-title" >
          第{{i+1}}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{item.add_time | dataFormat}}
        </div>
          <div class="cmt-body">
            {{item.content === undefined ? '此用户很懒，啥都没说.' : item.content}}
          </div>
        </div>
      </div>
      <mt-button type="primary" size="large" @click="postCmoment">发表评论</mt-button>
      <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  data(){
    return{
      cmtlist:[],//用来接收评论数据的数组
      pageIndex:1,
      msg:""
    }
  },
  created(){
    this.getCmtList();
  },
  methods:{
    getMore(){
      this.pageIndex++;
      this.getCmtList()
    },
    postCmoment(){
      if(this.msg.trim().length === 0){
       return Toast("评论内容不能为空")
      }
      return Toast("没有Api，还不能发表评论")
      // this.$http.post("../../json/post.json"+this.$route.params.id,{content:this.msg}).then(result=>{
      //   if(result.body.status === 0){
      //     var cmt = {
      //       user_name:"匿名用户",
      //       add_time:Date.now(),
      //       content:this.msg.trim()
      //     }
      //     this.cmtlist.unshift(cmt);
      //     this.msg="";
      //   }
      // })
    },
    getCmtList(){
      this.$http.get("../../json/cmtlist"+this.pageIndex+".json").then(result=>{
        if(result.body.status === 0){
          // console.log(result.body.message[5].content);
        this.cmtlist =this.cmtlist.concat(result.body.message) 
          // Toast("获取评论成功")
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .cmt-container{
    h3{
      font-size: 18px;
      font-weight: bold;
    }
    textarea{
      font-size: 14px;
      height: 85px;
      margin: 0;
    }
    .cmt-list{
      margin: 5px 0;
      .cmt-item{
        font-size: 13px;
        .cmt-title{
          line-height: 30px;
          background-color: #ccc;
        }
        .cmt-body{
          line-height: 35px;
          text-indent: 2em;
        }
      }
    }
  }
</style>
