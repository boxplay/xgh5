<template>
	<div>
		<div v-if="complete==false" class='loadingPage'>
			<div class="xiguaCircle">
				<img src="https://xgh5.someet.cc/loading.jpg" alt="" width="100%;">
			</div>
		</div>
		<div class="main relativeBox" style="min-width: 1200px;margin-top: 5%;" ref='main' v-if="complete==true">
			<img src="https://xgh5.someet.cc/718.jpg" @load="imgLoad" style="display: block;" alt="" width="100%">
			<!-- 15秒了解视屏 如果明天换图则去掉style-->
			<div class="imgBoxImg_pc" v-show="imgList.xgPlayVideoTop.isShow">
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
			<!-- 玩什么 -->
			<div class="positionLine" id='what_pc'>
				这是分界线
			</div>
			<!-- 在哪玩 -->
			<div class='positionLine' id='where_pc'>
				这是分界线
			</div>
			<!-- 跟谁玩 -->
			<div class='positionLine' id='who_pc'>
				这是分界线
			</div>
			<!-- 详细规则 -->
			<div class='positionBlock' id='rule_pc' @click="goRule">
				这是分界线
			</div>
			<!-- banner -->
			<div class="pc-banner-div">
				<div class="pc-banner-swiper">
					<!-- https://xgh5.someet.cc/xgposter.jpg -->
					<swiper id='BannerSwiper' ref='BannerSwiper' v-if="complete==true" :options="swiperOptionForBanner">
						<swiper-slide class='swiper1-video'>
							<img src="https://xgh5.someet.cc/xgposter.jpg" width="100%" alt="">
						</swiper-slide>
						<swiper-slide class='swiper1-video'>
							<img src="https://xgh5.someet.cc/xgposter.jpg" width="100%" alt="">
						</swiper-slide>
					</swiper>
				</div>
			</div>
			<!-- banner -->
			<!-- 活动日程开始 -->
			<div class="pc-day-main">
				<div class="pc-day-box">
					<div class="pc-day-title">
						活动日程
					</div>
					<div class="pc-day-container">
						<div class="pc-day-container-img">
							<div style="width: calc(100% / 4);box-sizing: border-box;"  @click="changeDay(0)">
								<img :src="daySelect == 0?'https://xgh5.someet.cc/day22_red.png':'https://xgh5.someet.cc/day22.png'" width="100%" alt="">
							</div>
							<div style="width: calc(100% / 4);box-sizing: border-box;"  @click="changeDay(1)">
								<img :src="daySelect == 1?'https://xgh5.someet.cc/day23_red.png':'https://xgh5.someet.cc/day23.png'" width="100%" alt="">
							</div>
							<div style="width: calc(100% / 4);box-sizing: border-box;"  @click="changeDay(2)">
								<img :src="daySelect == 2?'https://xgh5.someet.cc/day24_red.png':'https://xgh5.someet.cc/day24.png'" width="100%" alt="">
							</div>
							<div style="width: calc(100% / 4);box-sizing: border-box;"  @click="changeDay(3)">
								<img :src="daySelect == 3?'https://xgh5.someet.cc/day25_red.png':'https://xgh5.someet.cc/day25.png'" width="100%" alt="">
							</div>
						</div>
					</div>
					<div class="pc-day-content scrollbar-rail">
						<img width="100%" src="https://xgh5.someet.cc/act22.png" alt="" v-show="daySelect == 0">
						<img width="100%" src="https://xgh5.someet.cc/act23.png" alt="" v-show="daySelect == 1">
						<img width="100%" src="https://xgh5.someet.cc/act25.png" alt="" v-show="daySelect == 2">
						<img width="100%" src="https://xgh5.someet.cc/act25.png" alt="" v-show="daySelect == 3">
					</div>
				</div>
			</div>
			<!-- 活动日程结束 -->
			<!-- video-swiper -->
			<div id='videoBottomForPC' class="imgBoxImg relativeBox" v-show="imgList.xgPlayMedias.isShow  && Imgcomplete==true">
				<div class="swiper2" v-if="complete == true" v-show="imgList.xgPlayMedias.isShow">
					<swiper id='videoSwiper' ref='videoSwiper' v-if="imgList.xgPlayMedias.isShow  && swiperInit==true" :options="swiperOptionForMedia">
						<swiper-slide class='swiper1-video'>
							<div class="videoBox1" @click="playVideo('bottom',0)">
								<div class="vPage" id='vPage' style="position: absolute;">
									<!-- 底栏 -->
									<div :class="videoPlayIndex === 0?'videoPage videoPageHide':'videoPage'">
										{{imgList.xgPlayMedias.title[0]}}
									</div>
								</div>
								<div class="videoBackBox">
									<img src="https://xgh5planb.someet.cc/videoBack.png" alt="" width="100%">
								</div>
								<div class="video-vue-box">
									<video-player  id='mob-imgBoxImg_pc' class="video-player vjs-custom-skin smallVideo"
									ref="videoPlayerBottom0"
									:playsinline="true"
									:options="imgList.xgPlayMedias.options[0]"
									@play="CplayerPlay($event,'top')"
									@pause="CplayerPause($event,'top')"
									@ended="onPlayerEnded($event)"
									></video-player>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide class='swiper1-video'>
							<div class="videoBox1" @click="playVideo('bottom',1)">
								<div class="vPage" id='vPage' style="position: absolute;">
									<!-- 底栏 -->
									<div :class="videoPlayIndex === 1?'videoPage videoPageHide':'videoPage'">
										{{imgList.xgPlayMedias.title[1]}}
									</div>
								</div>
								<div class="videoBackBox">
									<img src="https://xgh5planb.someet.cc/videoBack.png" alt="" width="100%">
								</div>
								<div class="video-vue-box">
									<video-player  id='mob-imgBoxImg_pc' class="video-player vjs-custom-skin smallVideo"
									ref="videoPlayerBottom1"
									:playsinline="true"
									:options="imgList.xgPlayMedias.options[1]"
									@play="CplayerPlay($event,'top')"
									@pause="CplayerPause($event,'top')"
									@ended="onPlayerEnded($event)"
									></video-player>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide class='swiper1-video'>
							<div class="videoBox1" @click="playVideo('bottom',2)">
								<div class="vPage" id='vPage' style="position: absolute;">
									<!-- 底栏 -->
									<div :class="videoPlayIndex === 2?'videoPage videoPageHide':'videoPage'">
										{{imgList.xgPlayMedias.title[2]}}
									</div>
								</div>
								<div class="videoBackBox">
									<img src="https://xgh5planb.someet.cc/videoBack.png" alt="" width="100%">
								</div>
								<div class="video-vue-box">
									<video-player  id='mob-imgBoxImg_pc' class="video-player vjs-custom-skin smallVideo"
									ref="videoPlayerBottom2"
									:playsinline="true"
									:options="imgList.xgPlayMedias.options[2]"
									@play="CplayerPlay($event,'top')"
									@pause="CplayerPause($event,'top')"
									@ended="onPlayerEnded($event)"
									></video-player>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide class='swiper1-video'>
							<div class="videoBox1" @click="playVideo('bottom',3)">
								<div class="vPage" id='vPage' style="position: absolute;">
									<!-- 底栏 -->
									<div :class="videoPlayIndex === 3?'videoPage videoPageHide':'videoPage'">
										{{imgList.xgPlayMedias.title[3]}}
									</div>
								</div>
								<div class="videoBackBox">
									<img src="https://xgh5planb.someet.cc/videoBack.png" alt="" width="100%">
								</div>
								<div class="video-vue-box">
									<video-player  id='mob-imgBoxImg_pc' class="video-player vjs-custom-skin smallVideo"
									ref="videoPlayerBottom3"
									:playsinline="true"
									:options="imgList.xgPlayMedias.options[3]"
									@play="CplayerPlay($event,'top')"
									@pause="CplayerPause($event,'top')"
									@ended="onPlayerEnded($event)"
									></video-player>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide class='swiper1-video'>
							<div class="videoBox1" @click="playVideo('bottom',4)">
								<div class="vPage" id='vPage' style="position: absolute;">
									<!-- 底栏 -->
									<div :class="videoPlayIndex === 4?'videoPage videoPageHide':'videoPage'">
										{{imgList.xgPlayMedias.title[4]}}
									</div>
								</div>
								<div class="videoBackBox">
									<img src="https://xgh5planb.someet.cc/videoBack.png" alt="" width="100%">
								</div>
								<div class="video-vue-box">
									<video-player  id='mob-imgBoxImg_pc' class="video-player vjs-custom-skin smallVideo"
									ref="videoPlayerBottom4"
									:playsinline="true"
									:options="imgList.xgPlayMedias.options[4]"
									@play="CplayerPlay($event,'top')"
									@pause="CplayerPause($event,'top')"
									@ended="onPlayerEnded($event)"
									></video-player>
								</div>
							</div>
						</swiper-slide>
					</swiper> 
				</div>
				<div v-show="diySiwperBtnShowleft == true" class="swiper-button-prev diySiwperBtn" style="left:20%;background-image: url(https://xgh5planb.someet.cc/left.svg);min-left: 6rem;"></div>
				<div v-show="diySiwperBtnShowright == true" class="swiper-button-next diySiwperBtn" style="right:20%;background-image: url(https://xgh5planb.someet.cc/right.svg);min-right:6rem;"></div>
			</div>
			<!-- video-swiper -->
		</div>
		<div id='topMenuForPc'>
			<!-- 左侧logo -->
			<div class="menuChildBox child-left">
				<img src="https://xgh5.someet.cc/logo_white.png" alt="" width="100%">	
			</div>
			<div class="menuChildBox child-right">
				<!-- 四个选择项 -->
				<div class="menu-list-mob-pc">
					<span @click="goPoint('what')">
						<img v-show="goWhere!='what'" src="https://xgh5.someet.cc/btn/what_btn.png" alt="" width="100%">
						<img v-show="goWhere=='what'" src="https://xgh5.someet.cc/btn/what_btn_blue.png" alt="" width="100%">
					</span>
					<span @click="goPoint('where')">
						<img v-show="goWhere!='where'" src="https://xgh5.someet.cc/btn/where_btn.png" alt="" width="100%">
						<img v-show="goWhere=='where'" src="https://xgh5.someet.cc/btn/where_btn_blue.png" alt="" width="100%">
					</span>
					<span @click="goPoint('who')">
						<img v-show="goWhere!='who'" src="https://xgh5.someet.cc/btn/who_btn.png" alt="" width="100%">
						<img v-show="goWhere=='who'" src="https://xgh5.someet.cc/btn/who_btn_blue.png" alt="" width="100%">
					</span>
					<span @click="goTicket">
						<img src="https://xgh5.someet.cc/btn/goTicket_btn_blue.png" alt="" width="100%">
					</span>
				</div>
			</div>
			<div class="menuChildBox child-blank">
			</div>
		</div>
	</div>
</template>
<script>
    export default {
      name: 'Index',
      data () {
		  var that = this;
        return {
			diySiwperBtnShowleft:true,
			diySiwperBtnShowright:true,
			complete:false,
			daySelect:0,
			DayList:[],//活动日程
			imgList:[],//页面图片集合
			swiperOption: {//swiper3
			  autoplay: true,
			  speed: 1000,
			},
			swiperOptionForMedia:{
				init:false,
				autoplay: false,
				speed: 1000,
				effect : 'coverflow',
				slidesPerView: 3,
				centeredSlides: true,
				initialSlide: 2,
				loop:false,
				slidesPerView: 'auto',
				slideToClickedSlide: false,
				coverflowEffect: {
					rotate: 0,
					// stretch: -353,
					depth: 300,
					modifier: 2,
					slideShadows : true
				},
				navigation: {
				  nextEl: '.swiper-button-next',
				  prevEl: '.swiper-button-prev',
				},
				on:{
					slideChangeTransitionStart:function(){
						that.diySiwperBtnShowleft = false
						that.diySiwperBtnShowright = false
						 that.stopVideo();
					},
					 slideChangeTransitionEnd:function(){
						 var index = that.swiper.activeIndex 
						 if(index == 0){
							 that.diySiwperBtnShowleft = false
							 that.diySiwperBtnShowright = true
						 }else if(index == 4){
							 that.diySiwperBtnShowleft = true
							 that.diySiwperBtnShowright = false
						 }else{
							 that.diySiwperBtnShowleft = true
							 that.diySiwperBtnShowright = true
						 }
						 
						 
					 }
				}
			},
			playerOptions : [],
			menuTop:false,
			index:1,
			offsetTop:0,
			screenWidth:0,
			Imgcomplete:false,
			goWhere:"what",
			isPlayTop:0,//是否播放15秒视频,
			videoPlayIndex:'',
			swiperInit:false
        }
      },
		methods:{
			stopVideo(){
				this.player0.pause();
				this.player1.pause();
				this.player2.pause();
				this.player3.pause();
				this.player4.pause();
			},
			CplayerPlay(player,type) {
				if(type == 'swiper'){
					this.swiper.autoplay.stop()
				}
					
			},
			onPlayerEnded(player){
				this.videoPlayIndex = ''
			},
			CplayerPause(player,type){
					
			},
			imgLoad(){
				this.Imgcomplete = true
				//获取屏幕宽度
				this.swiper.init()
				// this.swiperOptionForMedia.coverflowEffect.stretch = (this.screenWidth/10) * -1
				this.$nextTick(function(){
					$(document).ready(function(){
					    $('.scrollbar-rail').scrollbar();
					});
				})
			},
			playVideo(pos,index){
				console.log('开始播放',index+'-----'+pos)
				if(!this.isPlayTop){
					this.isPlayTop = 1;
					if(pos == 'top'){
						this.playerTop.play();
						this.player0.pause();
						this.player1.pause();
						this.player2.pause();
						this.player3.pause();
						this.player4.pause();
					}else if(pos == 'bottom'){
						this.videoPlayIndex = index
						this.playerTop.pause();
						this.swiper.autoplay.stop()
						if(index == 0){
							this.player0.play();
							this.player1.pause();
							this.player2.pause();
							this.player3.pause();
							this.player4.pause();
						}else if(index == 1){
							this.player0.pause();
							this.player1.play();
							this.player2.pause();
							this.player3.pause();
							this.player4.pause();
						}else if(index ==2){
							this.player0.pause();
							this.player1.pause();
							this.player2.play();
							this.player3.pause();
							this.player4.pause();
						}else if(index == 3){
							this.player0.pause();
							this.player1.pause();
							this.player2.pause();
							this.player3.play();
							this.player4.pause();
						}else if(index == 4){
							this.player0.pause();
							this.player1.pause();
							this.player2.pause();
							this.player3.pause();
							this.player4.play();
						}
					}
				}else{
					this.videoPlayIndex =''
					this.isPlayTop = 0
					this.playerTop.pause();
					this.player0.pause();
					this.player1.pause();
					this.player2.pause();
					this.player3.pause();
					this.player4.pause();
				}
				
			},
			handleScroll(){
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				// scrollTop > offsetTop ? this.menuTop = true : this.menuTop = false
				//获取玩什么的高度
				var whatTop = document.querySelector('#what_pc').offsetTop - 28
				// 获取去哪玩的高度
				var whereTop = document.querySelector('#where_pc').offsetTop - 28
				//获取跟谁玩的高度
				var whoTop = document.querySelector('#who_pc').offsetTop - 28
				if(scrollTop > whatTop && scrollTop < whereTop && this.goWhere != 'what'){
					this.goWhere = 'what'
				}else if(scrollTop > whereTop && scrollTop < whoTop && this.goWhere != 'where'){
					this.goWhere = 'where'
				}else if(scrollTop > whoTop && this.goWhere != 'who'){
					this.goWhere = 'who'
				}
				var videoTop = document.querySelector('#what_pc').offsetTop
				if(scrollTop > videoTop){
					this.playerTop.pause()
				}
				if(this.imgList.xgPlayMedias.isShow){
					var videoBottom = document.querySelector('#videoBottomForPC').clientHeight
					var pauseTop = document.querySelector('#videoBottomForPC').offsetTop - document.querySelector('#videoBottomForPC').clientHeight
					if(scrollTop < (pauseTop - videoBottomForPC)){
						//停止下面的播放器
						this.player0.pause();
						this.player1.pause();
						this.player2.pause()
						this.player3.pause();
						this.player4.pause();
					}
				}
			},
			//活动日程切换
			changeDay(index){
				 this.daySelect = index
				 console.log(this.daySelect)
			},
			goTicket(){
				window.location.href = 'https://traveldetail.fliggy.com/item.htm?id=596217589260'
			},
			goPoint(type){
				this.goWhere = type
				var ele
				if(type == 'what'){
					ele = document.querySelector('#what_pc')
				}else if(type == 'where'){
					ele = document.querySelector('#where_pc')
				}else if(type == 'who'){
					ele = document.querySelector('#who_pc')
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
			goRule(){
				window.location.href='https://d.toutiao.com/k99/';
			},
			scrollEvent(type){
				if(this._isMobile()){
					if(type == 'what'){
						var anchor = document.getElementById('what_pc');
						anchor.scrollIntoView(true)
					}else if(type == 'where'){
						var anchor = document.getElementById('where_pc');
						anchor.scrollIntoView(true)
					}else if(type == 'who'){
						var anchor = document.getElementById('who_pc');
						anchor.scrollIntoView(true)
					}
				}else{
					var top = document.documentElement.scrollTop
					window.scrollTo(0,this.offsetTop);
				}
			},
			_isMobile() {
				 let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
				 return flag;
			}
		},
		components:{ 
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
			player3() {
				return this.$refs.videoPlayerBottom3.player
			},
			player4() {
				return this.$refs.videoPlayerBottom4.player
			},
			playerTop() {
				return this.$refs.videoPlayerTop.player
			},
			swiper() {
				return this.$refs.videoSwiper.swiper
				// return this.swiperInit == true ? this.$refs.videoSwiper.swiper:false
			}
		 },
		 mounted(){
			var that = this
			this.$axios.get('/static/img.json').then((response)=>{
			 	that.imgList = response.data
				that.complete = true;
				 //定位购票的位置
				that.$nextTick(() => {
					that.screenWidth = that.$refs.main.clientWidth?that.$refs.main.clientWidth:'414'
					that.swiperOptionForMedia.coverflowEffect.stretch = ((this.screenWidth/10) - 50) * -2
					if(that.swiperOptionForMedia.coverflowEffect.stretch > -120) that.swiperOptionForMedia.coverflowEffect.stretch = -120
					that.swiperInit = true;
					
				})
				window.onresize = () => {
				  return (() => {
					this.$nextTick(() => {
						that.screenWidth = that.$refs.main.clientWidth
						var w = that.screenWidth - 20
						// document.getElementById('goTicket').style.right = 'calc(50% - '+w/2+'px)'
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
<style scoped>
	.main{
		width: 100%;
		min-width:1200px;
		margin: 0 auto;
	}
	
</style>