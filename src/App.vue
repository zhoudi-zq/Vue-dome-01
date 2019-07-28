<template>
    <div class="app-container">
        
        <mt-header fixed title="黑马程序员Vue项目"></mt-header>
				<router-view></router-view>
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " href="#tabbar" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" href="#tabbar-with-chat" to="/member">
				<span class="mui-icon mui-icon-contact"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" href="#tabbar-with-contact" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" href="#tabbar-with-map" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>

    </div>
</template>


<script>
   
</script>

<style  scoped>
    .app-container{
        margin-top: 40px;
    }
</style>


