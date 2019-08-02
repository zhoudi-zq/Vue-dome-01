<template>
  <div class="photolist-container">
    <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item', item.id==0?'mui-active':'']" v-for="item in photoList" :key="item.id" @click="getPhotos(item.id)">
							{{ item.title	}}
						</a>
					</div>
				</div>

			</div>

  <!-- 图片列表区域 -->
	<div>
			<ul class="photo-list">
				<router-link v-for="item in list" :key="item.url" to="/home/photoinfo" tag="li">
					<img v-lazy="item.url">
					<div class="info">
						<div class="info-title">
							{{ item.title	}}
						</div>
						<div class="info-body">
							{{ item.zhaiyao	}}
						</div>
					</div>
				</router-link>
			</ul>
	</div>
	</div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'


  export default{
    data(){
      return{
				photoList:[],
				list:[]
      }
    },
    mounted(){
        mui('.mui-scroll-wrapper').scroll({
					deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
						});
		},
		created(){
			this.getPhotoList(),
			this.getPhotos(0)
		},
    methods:{
				getPhotoList(){
					this.$http.get("../../js/photolist.json").then(result=>{
						if(result.body.status === 0){
							// console.log(result.body.message)
							
							var quanbu = {
								id:0,
								title:"全部"
							}
							 result.body.message.unshift(quanbu)
							 this.photoList = result.body.message
							
						}else{
							Toast("获取相册列表失败！")
						}
					})
				},
				getPhotos(cateId){
					this.$http.get("../../js/photos"+cateId+".json").then(result=>{
						if(result.body.status === 0){
							console.log(cateId);
							this.list = result.body.message
						}else{
							Toast("获取图片失败")
						}
					},
					result2=>{
						this.list=[];
						// return Toast("获取图片失败");
					})
				}
    }
  }
</script>

<style lang="less" scoped>
*{
	touch-action: pan-y;
}
  .photo-list{
		list-style: none;
		margin: 0;
		padding:10px;
		padding-bottom: 0;
		li{
			background-color: #ccc;
			text-align: center;
			margin-bottom: 10px;
			box-shadow: 0 0 9px #999;
			position: relative;
			color: #fff;
			.info{
				max-height: 85px;
				background: rgba(0, 0, 0, 0.4);
				position: absolute;
				bottom: 0;
				padding: 2px 8px;
				text-align: left;
				overflow: hidden;

				.info-title{
					font-size: 14px;
				}
				.info-body{
					font-size: 13px;
				}
			}
			img{
				width: 100%;
				height: 200px;
				vertical-align: middle;//解决图片三像素的问题
			}
		img[lazy="loading"] {
			width: 40px;
			height: 300px;
			margin:auto;
			}
		}
  }

</style>
