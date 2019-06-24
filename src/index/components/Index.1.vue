<template>
	<div>
		<div v-if="complete==false" class='loadingPage'>
			<h2>Loading</h2>
		</div>
		<div class="main" ref='main' v-if="complete==true">
			<div class="imgBox">
				<!-- 头图 -->
				<div class="imgBoxImg" style="position: relative;" v-show="imgList.xgPlayTitle.isShow">
					<img :src="imgList.xgPlayTitle.val[0]" alt="" width="100%" @load="imgLoad">
					<div class="slideBox">
						<div class="slideBoxList">
							<div class="chevron" style="position: absolute;"></div>
							<div class="chevron"></div>
							<div class="chevron"></div>
							<div class="chevron"></div>
						</div>
					</div>
				</div>
				<!-- 头图结束 -->
				<!-- 顶部悬浮框 如果明天换图则去掉style-->
				<div id='topMennuFormobBox' style="margin-top:-4%;">
					<div ref='blankBox' id='blankBox' v-show="menuTop">
						
					</div>
					<div id="topMennuFormob" :class="menuTop?'fixedMenu':'relativeMenu'" style="max-width: 1980px;">
						<div style="width: 100%;position: relative;">
							<img id='imgHeight' v-show="goWhere == 'who'" src="https://xgh5.someet.cc/who.png" alt="" width="100%" ref='imgHeight'>
							<img v-show="goWhere == 'where'" src="https://xgh5.someet.cc/where.png" alt="" width="100%">
							<img v-show="goWhere == 'what'" src="https://xgh5.someet.cc/what.png" alt="" width="100%">
							<div class="menu-list-mob" style="position: absolute;opacity: 0;">
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
				</div>
				<!-- 顶部悬浮框结束 -->
				<!-- 15秒了解视屏 如果明天换图则去掉style-->
				<div class="imgBoxImg relativeBox" style="margin-top: -11%;" v-show="imgList.xgPlayVideoTop.isShow && Imgcomplete==true">
					<img :src="imgList.xgPlayVideoTop.img" alt="" width="100%">
					<div class="videoBox1">
						<!-- <iframe :src="imgList.xgPlayVideoTop.val[0]" frameborder="0" allowfullscreen="true">
							
						</iframe> -->
						<video-player  class="video-player vjs-custom-skin"
						ref="videoPlayerTop"
						:playsinline="true"
						:options="imgList.xgPlayVideoTop.options"
						@play="CplayerPlay($event,'top')"
						@pause="CplayerPause($event,'top')"
						></video-player>
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
				<div id='who' style="position: relative;" class="imgBoxImg" v-show="imgList.xgPlayWho.isShow">
					<img :src="imgList.xgPlayWho.val[0]" alt="" width="100%">
					<!-- 打榜规则 -->
					<router-link to="/rule">
						<div class="ruleBox">
							
						</div>
					</router-link>
					<!-- 打榜规则结束 -->
				</div>
				<!-- who -->
				<!-- banner -->
				<div class="imgBoxImg" v-show="imgList.xgPlayBanner.isShow">
					<!-- <img :src="imgList.xgPlayBanner.val[0]" alt="" width="100%"> -->
					<div class="swiper1" style="" v-if="imgList.xgPlaySwiper" v-show="imgList.xgPlaySwiper.isShow">
						<swiper style="height: 100%;" :options="swiperOption">
							<swiper-slide class='swiper1-video' v-bind:key="index" v-for="(item,index) in imgList.xgPlaySwiper.val">
								<img :src="item" alt="" width="100%">
							</swiper-slide>
						</swiper> 
					</div>
				</div>
				<!-- banner -->
				<!-- video-swiper -->
				<div id='videoBottom' class="imgBoxImg relativeBox" v-show="imgList.xgPlayMedias.isShow  && Imgcomplete==true">
					<img src="https://img.someet.cc/video.jpg" alt="" width="100%">
					<div class="swiper2" style="" v-if="complete == true" v-show="imgList.xgPlayMedias.isShow">
						<swiper ref='videoSwiper' style="height: 100%;" :options="swiperOptionForMedia">
							<swiper-slide class='swiper1-video'>
								<!-- <iframe :src="item" frameborder="0" allowfullscreen="true">
								</iframe> -->
								<video-player class="video-player vjs-custom-skin"
								ref="videoPlayerBottom0"
								:playsinline="true"
								:options="imgList.xgPlayMedias.options[0]"
								@play="CplayerPlay($event,'swiper')"
								@pause="CplayerPause($event,'swiper')"
								></video-player>
							</swiper-slide>
							<swiper-slide class='swiper1-video'>
								<!-- <iframe :src="item" frameborder="0" allowfullscreen="true">
								</iframe> -->
								<video-player class="video-player vjs-custom-skin"
								ref="videoPlayerBottom1"
								:playsinline="true"
								:options="imgList.xgPlayMedias.options[1]"
								@play="CplayerPlay($event,'swiper')"
								@pause="CplayerPause($event,'swiper')"
								></video-player>
							</swiper-slide>
							<swiper-slide class='swiper1-video'>
								<!-- <iframe :src="item" frameborder="0" allowfullscreen="true">
								</iframe> -->
								<video-player class="video-player vjs-custom-skin"
								ref="videoPlayerBottom2"
								:playsinline="true"
								:options="imgList.xgPlayMedias.options[2]"
								@play="CplayerPlay($event,'swiper')"
								@pause="CplayerPause($event,'swiper')"
								></video-player>
							</swiper-slide>
						</swiper> 
					</div>
				</div>
				<!-- video-swiper -->
				<!-- footer -->
				<div id='bannerAndLogo' style='margin-top: -2px;' class="imgBoxImg" v-show="imgList.xgPlayHzLogo.isShow">
					<img :src="imgList.xgPlayHzLogo.val[0]" alt="" width="100%">
				</div>
				<!-- footer -->
				<!-- 预约抢票 -->
				<div id='goTicket' @click="goTicket" class='goTicket' v-show='Imgcomplete==true'>
				<!-- <span style='margin-top:0.6rem;'>预约</span><span>抢票</span> -->
					<img src="https://xgh5.someet.cc/goTicket.png" width="100%" alt="">
				</div>
				<!-- 预约抢票 -->
			</div>
		</div>
	</div>
</template>

<script>
    import { swiper, swiperSlide } from "vue-awesome-swiper"
	import { videoPlayer } from 'vue-video-player'
	import 'swiper/dist/css/swiper.css'
	import 'video.js/dist/video-js.css'
	import 'vue-video-player/src/custom-theme.css'
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
			playerOptions : [],
			menuTop:false,
			index:1,
			offsetTop:0,
			screenWidth:0,
			Imgcomplete:false,
			goWhere:"what"
        }
      },
		methods:{
			CplayerPlay(player,type) {
				if(type == 'swiper'){
					this.swiper.autoplay.stop()
				}
					
			},
			CplayerPause(player,type){
					
			},
			changeDay(index){
				 this.DayIndex = index
			},
			imgLoad(){
				this.Imgcomplete = true
				var h = document.querySelector('#topMennuFormob').offsetHeight
				document.querySelector('#blankBox').style.height = h +'px'
			},
			handleScroll(){
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				let offsetTop = document.querySelector('#topMennuFormobBox').offsetTop
				scrollTop > offsetTop ? this.menuTop = true : this.menuTop = false
				//获取玩什么的高度
				var whatTop = document.querySelector('#what').offsetTop - 28
				// 获取去哪玩的高度
				var whereTop = document.querySelector('#where').offsetTop - 28
				//获取跟谁玩的高度
				var whoTop = document.querySelector('#who').offsetTop - 28
				if(scrollTop > whatTop && scrollTop < whereTop && this.goWhere != 'what'){
					this.goWhere = 'what'
				}else if(scrollTop > whereTop && scrollTop < whoTop && this.goWhere != 'where'){
					this.goWhere = 'where'
				}else if(scrollTop > whoTop && this.goWhere != 'who'){
					this.goWhere = 'who'
				}
				if(this.imgList.xgPlayMedias.isShow){
					var videoTop = document.querySelector('#what').offsetTop
					var videoBottom = document.querySelector('#videoBottom').clientHeight + document.querySelector('#bannerAndLogo').clientHeight
					var pauseTop = document.querySelector('#videoBottom').offsetTop - document.querySelector('#videoBottom').clientHeight
					if(scrollTop > videoTop){
						this.playerTop.pause()
					}
					if(scrollTop < (pauseTop - videoBottom)){
						//停止下面的播放器
						this.player0.pause();
						this.player1.pause();
						this.player2.pause();
					}
				}
			},
			goTicket(){
				window.location.href = 'https://traveldetail.fliggy.com/item.htm?id=596217589260'
			},
			goPoint(type){
				this.goWhere = type
				var ele
				if(type == 'what'){
					ele = document.querySelector('#what')
				}else if(type == 'where'){
					ele = document.querySelector('#where')
				}else if(type == 'who'){
					ele = document.querySelector('#who')
				}
				var offsetTop = ele.offsetTop
				this.offsetTop = offsetTop - 28
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
			player0() {
				return this.$refs.videoPlayerBottom0.player
			},
			player1() {
				return this.$refs.videoPlayerBottom1.player
			},
			player2() {
				return this.$refs.videoPlayerBottom2.player
			},
			playerTop() {
				return this.$refs.videoPlayerTop.player
			},
			swiper() {
				return this.$refs.videoSwiper.swiper
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
<style>
	.video-js:hover .vjs-big-play-button,.vjs-custom-skin > .video-js .vjs-big-play-button:focus,.vjs-custom-skin > .video-js .vjs-big-play-button:active {
	  background-color: rgba(0,0,0,0.45);
	}
</style>