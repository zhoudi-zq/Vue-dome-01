<template>
  <div class="newsinfo-container" >
    <h3 class="title">新闻标题{{ id }}</h3>
      <p class="subtitle">
        <span>发表时间：</span>
        <span>点击0次</span>
      </p>
      <hr>
      <div class="newsinfo-content">

      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      id:this.$route.params.id
    }
  }
}
</script>

<style lang="sass" scoped>
  .newsinfo-container{
    .title{

    }
  }
</style>

