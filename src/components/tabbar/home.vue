<template>
  <div class="mui-table-view-cell mui-collapse">
						<a class="mui-navigate-right" href="#">图片轮播</a>
						<div class="mui-collapse-content">
							<div id="slider" class="mui-slider">
								<div class="mui-slider-group mui-slider-loop">
									<!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
									<div class="mui-slider-item mui-slider-item-duplicate">
										<a href="#">
											<img src="/src/images/最爱的人.jpg">
										</a>
									</div>
									<!-- 第一张 -->
									<div class="mui-slider-item">
										<a href="#">
											<img src="/src/images/最爱的人.jpg">
										</a>
									</div>
									<!-- 第二张 -->
									<div class="mui-slider-item">
										<a href="#">
											<img src="/src/images/最爱的人.jpg">
										</a>
									</div>
									<!-- 第三张 -->
									<div class="mui-slider-item">
										<a href="#">
											<img src="/src/images/最爱的人.jpg">
										</a>
									</div>
									<!-- 第四张 -->
									<div class="/src/images/最爱的人.jpg">
										<a href="#">
											<img src="../images/yuantiao.jpg">
										</a>
									</div>
									<!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
									<div class="mui-slider-item mui-slider-item-duplicate">
										<a href="#">
											<img src="/src/images/最爱的人.jpg">
										</a>
									</div>
								</div>
								<div class="mui-slider-indicator">
									<div class="mui-indicator mui-active"></div>
									<div class="mui-indicator"></div>
									<div class="mui-indicator"></div>
									<div class="mui-indicator"></div>
								</div>
							</div>
						</div>
					</div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>

</style>



