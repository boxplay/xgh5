<template>
	<div class="main" ref='main' v-if="complete==true">
		<div class="imgBox">
			<!-- 头图 -->
			<div class="imgBoxImg" v-show="imgList.xgPlayTitle.isShow">
				<img :src="imgList.xgPlayTitle.val[0]" alt="" width="100%">
			</div>
			<!-- 头图结束 -->
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
			<!-- 15秒了解视屏 -->
			<div class="imgBoxImg relativeBox" v-show="imgList.xgPlayVideoTop.isShow">
				<img :src="imgList.xgPlayVideoTop.img" alt="" width="100%">
				<div class="videoBox1">
					<iframe :src="imgList.xgPlayVideoTop.val[0]" frameborder="0" allowfullscreen="true">
						
					</iframe>
				</div>
			</div>
			<!-- 15秒了解视频 -->
			<!-- what -->
			<div id='what' class="imgBoxImg" v-show="imgList.xgPlayWhat.isShow">
				<img :src="imgList.xgPlayWhat.val[0]" alt="" width="100%">
			</div>
			<!-- what -->
			<!-- where -->
			<div id='where' class="imgBoxImg" v-show="imgList.xgPlayWhere.isShow">
				<img :src="imgList.xgPlayWhere.val[0]" alt="" width="100%">
			</div>
			<!-- where -->
			<!-- who -->
			<div id='who' class="imgBoxImg" v-show="imgList.xgPlayWho.isShow">
				<img :src="imgList.xgPlayWho.val[0]" alt="" width="100%">
			</div>
			<!-- who -->
			<!-- banner -->
			<div class="imgBoxImg" v-show="imgList.xgPlayBanner.isShow">
				<img :src="imgList.xgPlayBanner.val[0]" alt="" width="100%">
			</div>
			<!-- banner -->
			<!-- video-swiper -->
			<div class="imgBoxImg relativeBox" v-show="imgList.xgPlayMedias.isShow">
				<img src="https://img.someet.cc/video.jpg" alt="" width="100%">
				<div class="swiper2" style="" v-if="imgList.xgPlayMedias" v-show="imgList.xgPlayMedias.isShow">
					<swiper style="height: 100%;" :options="swiperOptionForMedia">
						<swiper-slide class='swiper1-video' v-bind:key="index" v-for="(item,index) in imgList.xgPlayMedias.val">
							<iframe :src="item" frameborder="0" allowfullscreen="true">
								
							</iframe>
						</swiper-slide>
					</swiper> 
				</div>
			</div>
			<!-- video-swiper -->
			<!-- footer -->
			<div class="imgBoxImg" v-show="imgList.xgPlayHzLogo.isShow">
				<img :src="imgList.xgPlayHzLogo.val[0]" alt="" width="100%">
			</div>
			<!-- footer -->
			<!-- 预约抢票 -->
			<div id='goTicket' class='goTicket'>
			<span style='margin-top:0.6rem;'>预约</span><span>抢票</span>
			</div>
			<!-- 预约抢票 -->
		</div>
	</div>
</template>

<script>
    import { swiper, swiperSlide } from "vue-awesome-swiper"
		import { videoPlayer } from 'vue-video-player'
		import 'swiper/dist/css/swiper.css'
    export default {
      name: 'Index',
      data () {
        return {
			complete:false,
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
			offsetTop:0,
			screenWidth:0
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
				var offsetTop = ele.offsetTop
				this.offsetTop = offsetTop - 100
				var that = this
				// this.index = setInterval(that.scrollEvent,8)
				
				if(this._isMobile()){
					console.log('手机端')
					this.scrollEvent(type)
				}else{
					console.log('PC端')
					// this.index = setInterval(that.scrollEvent,8)
					that.scrollEvent(type)
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
					var top = document.documentElement.scrollTop
					window.scrollTo(0,this.offsetTop);
					// if(typeof(document.documentElement.scrollTop) != undefined){
					// 	document.documentElement.scrollTop = this.offsetTop
					// }else if(typeof(document.body.scrollTop) != undefined){
					// 	document.body.scrollTop = this.offsetTop
					// }else if(typeof(window.pageYOffset) != undefined){
					// 	window.pageYOffset = this.offsetTop
					// }
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
				 //定位购票的位置
				this.$nextTick(() => {
					that.screenWidth = this.$refs.main.clientWidth?this.$refs.main.clientWidth:'414'
					var w = this.screenWidth - 20
					document.getElementById('goTicket').style.right = 'calc(50% - '+w/2+'px)'
				})
				window.onresize = () => {
				  return (() => {
					this.$nextTick(() => {
						that.screenWidth = this.$refs.main.clientWidth
						var w = this.screenWidth - 20
						document.getElementById('goTicket').style.right = 'calc(50% - '+w/2+'px)'
					})
				  })()
				}
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