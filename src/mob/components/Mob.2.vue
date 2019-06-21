<template>
	<div class="main" v-if="complete==true">
		<div class="imgBox">
			<img src="https://img.someet.cc/xg.png" width="100%" alt="">
			<div class="videoBox1">
				<iframe src="https://i.snssdk.com/videofe/xigua/detail?group_id=6661814481565254158" frameborder="0">
					
				</iframe>
			</div>
			<!-- <div class="swiper1" style="bottom:7.55%;">
				<swiper  ref='swiperForMedia' :options="swiperOptionForMedia">
					<swiper-slide class='swiper1-video'>
						<iframe src="https://i.snssdk.com/videofe/xigua/detail?group_id=6661814481565254158" frameborder="0">
							
						</iframe>
					</swiper-slide>
				</swiper>
			</div> -->
			<div class="swiper2" style="" v-if="imgList.xgPlayMedias" v-show="imgList.xgPlayMedias.isShow">
				<swiper style="height: 100%;" :options="swiperOptionForMedia">
					<swiper-slide class='swiper1-video' v-bind:key="index" v-for="(item,index) in imgList.xgPlayMedias.val">
						<iframe :src="item" frameborder="0">
							
						</iframe>
					</swiper-slide>
				</swiper> 
			</div>
			<div class="swiper1" v-if="imgList.xgPlayHzBanner" v-show="imgList.xgPlayHzBanner.isShow">
				<img src="https://img.someet.cc/xx.png" alt="" width="100%">
			</div>
			<!-- 轮播图开始 -->
			<!-- <div class="swiper1" v-if="imgList.xgPlaySwiper" v-show="imgList.xgPlaySwiper.isShow">
				<swiper :options="swiperOption">
					<swiper-slide v-bind:key="index" v-for="(item,index) in imgList.xgPlaySwiper.val"><img width="100%" :src="item"></swiper-slide>
				</swiper> 
			</div> -->
			<!-- 轮播图结束 -->
			<!-- 顶部悬浮框 -->
			<div id='topMennuFormobBox'>
				<div id="topMennuFormob" :class="menuTop?'fixedMenu':'relativeMenu'" style="max-width: 700px;">
					<div class="menu-list-mob">
						<span style="width: calc(100% / 3);" @click="goPoint('what')">
							玩什么
						</span style="width: calc(100% / 3);">
						<span style="width: calc(100% / 3);" @click="goPoint('where')">
							在哪玩
						</span>
						<span style="width: calc(100% / 3);"  @click="goPoint('who')">
							跟谁玩
						</span>
					</div>
				</div>
			</div>
			<!-- 顶部悬浮框结束 -->
			<!-- 玩什么锚点 -->
			<div id='what' style="width: 100%;position: absolute;top: 20%;height: 20px;background-color: black;opacity: 0;"></div>
			<!-- 玩什么锚点结束 -->
			<!-- 在哪玩开始 -->
			<div id='where' style="width: 100%;position: absolute;top: 42.5%;height: 20px;background-color: deeppink;opacity: 0;"></div>
			<!-- 在哪玩结束 -->
			<!-- 跟谁玩开始 -->
			<div id='who' style="width: 100%;position: absolute;top: 75.2%;height: 20px;background-color: greenyellow;opacity: 0;"></div>
			<!-- 跟谁玩结束 -->
		</div>
	</div>
</template>

<script>
    import { swiper, swiperSlide } from "vue-awesome-swiper"
		import { videoPlayer } from 'vue-video-player'
		import 'swiper/dist/css/swiper.css'
		import 'video.js/dist/video-js.css'
		import 'vue-video-player/src/custom-theme.css'
		// import '../assets/css/index.css'
    export default {
      name: 'Index',
      data () {
        return {
			complete:true,
			DayIndex:1,
			DayList:[],//活动日程
			imgList:[],//页面图片集合
			swiperOption: {//swiper3
			  autoplay: true,
			  speed: 1000,
			},
			swiperOptionForMedia:{
				autoplay: true,
				speed: 1000,
			},
			menuTop:false,
			index:1,
			offsetTop:0
        }
      },
		methods:{
			CplayerPlay(player) {
					this.swiper.autoplay.stop()
			},
			CplayerPause(player){
					
			},
			changeDay(index){
				 this.DayIndex = index
				 console.log(this.DayList[index])
			},
			handleScroll(){
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				let offsetTop = document.querySelector('#topMennuFormobBox').offsetTop
				scrollTop > offsetTop ? this.menuTop = true : this.menuTop = false
			},
			goPoint(type){
				var ele
				if(type == 'what'){
					ele = document.querySelector('#what')
				}else if(type == 'where'){
					ele = document.querySelector('#where')
				}else if(type == 'who'){
					ele = document.querySelector('#who')
				}
				let offsetTop = ele.offsetTop - 100
				this.offsetTop = offsetTop
				var that = this
				// this.index = setInterval(that.scrollEvent,8)
				
				if(this._isMobile()){
					console.log('手机端')
					this.scrollEvent(type)
				}else{
					console.log('PC端')
					this.index = setInterval(that.scrollEvent,8)
				}
			},
			scrollEvent(type){
				if(this._isMobile()){
					if(type == 'what'){
						var anchor = document.getElementById('what');
						anchor.scrollIntoView(true)
					}else if(type == 'where'){
						var anchor = document.getElementById('where');
						anchor.scrollIntoView(true)
					}else if(type == 'who'){
						var anchor = document.getElementById('who');
						anchor.scrollIntoView(true)
					}
				}else{
					// console.log('PC端')	
					var top = document.documentElement.scrollTop
					if(top < this.offsetTop){
						if(typeof(document.documentElement.scrollTop) != undefined){
							document.documentElement.scrollTop +=100
						}else if(typeof(document.body.scrollTop) != undefined){
							document.body.scrollTop +=100
						}else if(typeof(window.pageYOffset) != undefined){
							window.pageYOffset +=100
						}
					}else{
						clearInterval(this.index)
					}
				}
				
				
			},
			_isMobile() {
				 let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
				 return flag;
			}
		},
		components:{ 
			swiper,
			swiperSlide,
			videoPlayer
		},
		computed: {
			player() {
				return this.$refs.videoPlayer.player
			},
			swiper() {
				return this.$refs.swiperForMedia.swiper
			}
		 },
		 mounted(){
			 var that = this
			 this.$axios.get('/static/day.json').then((response)=>{
				 that.DayList = response.data
			 })
			 this.$axios.get('/static/img.json').then((response)=>{
			 	 that.imgList = response.data
			 	 that.complete = true;
			 })
			 //监听页面滚动
			 window.addEventListener('scroll', this.handleScroll)
			 
		},
		destroyed () {
		  window.removeEventListener('scroll', this.handleScroll)
		},
    }
</script>
<style scoped>
	
	@import '../assets/css/index.css'
	
</style>