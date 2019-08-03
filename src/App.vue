<template>
    <div class="app-container">
        
        <mt-header fixed title="黑马程序员Vue项目">
					<span slot="left" @click="goBack" v-show="Falg">
    					<mt-button icon="back" >返回</mt-button>
  				</span>
				</mt-header>

				<!-- <mt-header fixed title="固定在顶部"></mt-header> -->
				<transition>
						<router-view></router-view>
				</transition>
				
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-myself " href="#tabbar" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-myself" href="#tabbar-with-chat" to="/member">
				<span class="mui-icon mui-icon-contact"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-myself" href="#tabbar-with-contact" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-myself" href="#tabbar-with-map" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>

    </div>
</template>


<script>
   export default{
		 data(){
			 return{
				 Falg:false
			 }
		 },
		 methods:{
			 goBack(){
				 this.$router.go(-1);
			 }
		 },
		 watch:{
			 "$router.path":function(newvalue){
				 if(newvalue === "/home"){
					 this.Falg = false;
				 }else{
					 this.Falg = true;
				 }
			 }
		 }
	 }
</script>
<style lang="less" scoped>

		.v-enter{
	opacity: 0;
	transform: translateX(100%);
}
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}
.v-enter-active,.v-leave-active{
	transition: all 0.5s ease;
	
}
    .app-container{
        margin-top: 40px;
				margin-bottom: 50px;
				overflow-x: hidden;
		}

.mui-bar-tab .mui-tab-item-myself.mui-active {
    color: #007aff;
}

.mui-bar-tab .mui-tab-item-myself {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-myself .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-myself .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
	}


</style>


