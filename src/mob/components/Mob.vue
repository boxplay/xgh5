<template>
	<div>
		<div v-if="complete==false" class='loadingPage' >
			<div class="xiguaCircle">
				<img src="https://xgh5.someet.cc/loading.jpg" alt="" width="100%;">
			</div>
		</div>
		<div class="mob-main relativeBox mobCss" ref='main' v-if="complete==true">
			<img src="https://xgh5.someet.cc/718-1.jpg" @load="imgLoad" style="display: block;" alt="" width="100%">
			<img src="https://xgh5.someet.cc/718-2.jpg" style="display: block;" alt="" width="100%">
			<img src="https://xgh5.someet.cc/812-3.jpg" style="display: block;" alt="" width="100%">
			<!-- 活动日程开始 -->
			<div class="mob-day-main">
				<div>
					<img src="https://xgh5.someet.cc/812-day.jpg" alt="" width="">
				</div>
				<div class="mob-day-box">
					<div class="mob-day-container">
						<div class="mob-day-container-img">
							<div @click="changeDay(0)">
								<img :src="daySelect == 0?'https://xgh5.someet.cc/day22_red.png':'https://xgh5.someet.cc/day22.png'" width="100%" alt="">
							</div>
							<div  @click="changeDay(1)">
								<img :src="daySelect == 1?'https://xgh5.someet.cc/day23_red.png':'https://xgh5.someet.cc/day23.png'" width="100%" alt="">
							</div>
							<div @click="changeDay(2)">
								<img :src="daySelect == 2?'https://xgh5.someet.cc/day24_red.png':'https://xgh5.someet.cc/day24.png'" width="100%" alt="">
							</div>
							<div @click="changeDay(3)">
								<img :src="daySelect == 3?'https://xgh5.someet.cc/day25_red.png':'https://xgh5.someet.cc/day25.png'" width="100%" alt="">
							</div>
						</div>
					</div>
					<div class="mob-day-content scrollbar-rail" :class="daySelect == 0 || daySelect == 2?'scroll-scrolly_visible':''">
						<img width="100%" src="https://xgh5.someet.cc/act22.png" alt="" v-show="daySelect == 0">
						<img width="100%" src="https://xgh5.someet.cc/act23.png" alt="" v-show="daySelect == 1">
						<img width="100%" src="https://xgh5.someet.cc/act24.jpg" alt="" v-show="daySelect == 2">
						<img width="100%" src="https://xgh5.someet.cc/act25.png" alt="" v-show="daySelect == 3">
					</div>
				</div>
			</div>
			<!-- 活动日程结束 -->
			<img src="https://xgh5.someet.cc/812-4.jpg" style="display: block;" alt="" width="100%">
			
			<div class="mob-slideBox" v-show="Imgcomplete==true">
				<div class="mob-slideBoxList">
					<div class="mob-chevron" style="position: absolute;"></div>
					<div class="mob-chevron"></div>
					<div class="mob-chevron"></div>
					<div class="mob-chevron"></div>
				</div>
			</div>
			<div ref='topMennuFormobBox' id='topMennuFormobBox' v-show="complete==true &&  Imgcomplete==true" style="position: absolute;top: 12.8%">
				<div id="topMennuFormob" :class="menuTop?'mob-fixedMenu':'mob-relativeMenu'" style="max-width: 700px;">
					<div style="width: 100%;position: relative;">
						<img id='imgHeight' v-show="goWhere == 'who'" src="https://xgh5.someet.cc/who.png" alt="" width="100%" ref='imgHeight'>
						<img v-show="goWhere == 'where'" src="https://xgh5.someet.cc/where.png" alt="" width="100%">
						<img v-show="goWhere == 'what'" src="https://xgh5.someet.cc/what.png" alt="" width="100%">
						<div class="mob-menu-list-mob-pc" style="position: absolute;opacity: 0;top:-9%;">
							<span style="width: calc(100% / 3);" @click="goPoint('what')">
								玩什么
							</span>
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
			<div class="mob-imgBoxImg_pc" v-show="imgList.xgPlayVideoTop.isShow && Imgcomplete==true && complete==true">
				<div class="videoBox1" @click="playVideo('top',0)">
					<div class="vPage" id='vPage' style="position: absolute;">
						
					</div>
					<video-player  id='mob-imgBoxImg_pc' class="video-player vjs-custom-skin"
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
			<div class="mob-positionLine" id='mob-what_pc'>
				这是分界线
			</div>
			<!-- 在哪玩 -->
			<div class='mob-positionLine' id='mob-where_pc'>
				这是分界线
			</div>
			<!-- 跟谁玩 -->
			<div class='mob-positionLine' id='mob-who_pc'>
				这是分界线
			</div>
			<!-- 详细规则 -->
			<div class='mob-positionBlock' id='mob-rule_pc' @click="goRule">
				这是分界线
			</div>
			<!-- banner -->
			<div class="mob-banner-div">
				<div class="mob-banner-swiper">
					<!-- https://xgh5.someet.cc/xgposter.jpg -->
					<swiper id='BannerSwiper' ref='BannerSwiper' v-if="complete==true" :options="swiperOptionForBanner">
						<swiper-slide class='swiper1-video'>
							<a href="https://www.toutiao.com/i6721317691421901326/"><img src="https://xgh5.someet.cc/ft_mobile.jpg" width="100%" alt=""></a>
						</swiper-slide>
						<swiper-slide class='swiper1-video'>
							<a href="https://www.ixigua.com/i6719331585704854024/"><img src="https://xgh5.someet.cc/ss.jpg" width="100%" alt=""></a>
						</swiper-slide>
					</swiper>
				</div>
			</div>
			<!-- banner -->
			<!-- video-swiper -->
			<div id='videoBottom' class="imgBoxImg relativeBox" v-show="imgList.xgPlayMedias.isShow  && Imgcomplete==true && complete == true">
				<div class="swiper2" v-if="complete == true" v-show="imgList.xgPlayMedias.isShow">
					<div class="videoBox1" @click="playVideo('bottom',0)">
						<video-player  id='mob-imgBoxImg_pc' class="video-player vjs-custom-skin"
						ref="videoPlayerBottom0"
						:playsinline="true"
						:options="imgList.xgPlayMedias.options[0]"
						></video-player>
					</div>
				</div>
			</div>
			<!-- video-swiper -->
		</div>
		<!-- 预约抢票 -->
		<div id='goTicket' @click="goTicket" class='goTicket' v-show='Imgcomplete==true'>
		<!-- <span style='margin-top:0.6rem;'>预约</span><span>抢票</span> -->
			<img src="https://xgh5.someet.cc/goTicket.png" width="100%" alt="">
		</div>
		<!-- 预约抢票 -->
	</div>
</template>
<script>
	import wxapi from '@/common/js/wechat.js'
    export default {
      name: 'Index',
      data () {
		  var that = this
        return {
			daySelect:0,
			complete:false,
			DayList:[],//活动日程
			imgList:[],//页面图片集合
			swiperOption: {//swiper3
			  autoplay: true,
			  speed: 1000,
			},
			swiperOptionForBanner:{
				autoplay: true,
				speed: 2000,
				loop : true,
			},
			playerOptions : [],
			menuTop:false,
			index:1,
			offsetTop:0,
			screenWidth:0,
			Imgcomplete:false,
			goWhere:"what",
			isPlayTop:0,//是否播放15秒视频,
			videoPlayIndex:''
        }
      },
		methods:{
			stopVideo(){
				this.player0.pause();
			},
			CplayerPlay(player,type) {
				if(type == 'swiper'){
					this.swiper.autoplay.stop()
				}
					
			},
			CplayerPause(player,type){
					
			},
			onPlayerEnded(player){
				this.videoPlayIndex = ''
			},
			playerStateChanged(player){
				console.log('playing')
			},
			playVideo(pos,index){
				console.log('开始播放',index+'-----'+pos)
				if(!this.isPlayTop){
					this.isPlayTop = 1;
					if(pos == 'top'){
						this.playerTop.play();
						this.player0.pause();
					}else if(pos == 'bottom'){
						this.videoPlayIndex = index
						this.playerTop.pause();
						this.swiper.autoplay.stop()
						if(index == 0){
							this.player0.play();
						}
					}
				}else{
					this.isPlayTop = 0
					this.playerTop.pause();
				}	
			},
			//活动日程切换
			changeDay(index){
				 this.daySelect = index
				 console.log(this.daySelect)
			},
			//图片加载完成
			imgLoad(){
				this.Imgcomplete = true
				this.getSwiperHeight();
				this.$nextTick(function(){
					$(document).ready(function(){
					    $('.scrollbar-rail').scrollbar();
					});
				})
			},
			//页面滚动事件
			handleScroll(){
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				var offsetTop = document.querySelector('#topMennuFormobBox').offsetTop
				scrollTop > offsetTop ? this.menuTop = true : this.menuTop = false
				//获取玩什么的高度
				var whatTop = document.querySelector('#mob-what_pc').offsetTop - 28
				// 获取去哪玩的高度
				var whereTop = document.querySelector('#mob-where_pc').offsetTop - 28
				//获取跟谁玩的高度
				var whoTop = document.querySelector('#mob-who_pc').offsetTop - 28
				if(scrollTop > whatTop && scrollTop < whereTop && this.goWhere != 'what'){
					this.goWhere = 'what'
				}else if(scrollTop > whereTop && scrollTop < whoTop && this.goWhere != 'where'){
					this.goWhere = 'where'
				}else if(scrollTop > whoTop && this.goWhere != 'who'){
					this.goWhere = 'who'
				}
				var videoTop = document.querySelector('#mob-what_pc').offsetTop
				if(scrollTop > videoTop){
					this.playerTop.pause()
				}
				if(this.imgList.xgPlayMedias.isShow){
					var videoBottom = document.querySelector('#videoBottom').clientHeight
					var pauseTop = document.querySelector('#videoBottom').offsetTop - document.querySelector('#videoBottom').clientHeight
					if(scrollTop < (pauseTop - videoBottom)){
						//停止下面的播放器
						this.player0.pause();
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
					ele = document.querySelector('#mob-what_pc')
				}else if(type == 'where'){
					ele = document.querySelector('#mob-where_pc')
				}else if(type == 'who'){
					ele = document.querySelector('#mob-who_pc')
				}
				var offsetTop = ele.offsetTop
				this.offsetTop = offsetTop - 28
				var that = this
				
				if(this._isMobile()){
					this.scrollEvent(type)
				}else{
					that.scrollEvent(type)
				}
			},
			goRule(){
				window.location.href='https://d.toutiao.com/k99/'
			},
			scrollEvent(type){//导航栏滚动事件
				if(this._isMobile()){
					console.log(type)
					if(type == 'what'){
						var anchor = document.getElementById('mob-what_pc');
						anchor.scrollIntoView(true)
					}else if(type == 'where'){
						var anchor = document.getElementById('mob-where_pc');
						anchor.scrollIntoView(true)
					}else if(type == 'who'){
						var anchor = document.getElementById('mob-who_pc');
						anchor.scrollIntoView(true)
					}
				}else{
					var top = document.documentElement.scrollTop
					window.scrollTo(0,this.offsetTop);
				}
			},
			_isMobile() {
				 var flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
				 return flag;
			},
			isIOS(){
				return isApp() && navigator.userAgent.indexOf("iOS") > -1
			},
			isInIOS(){
				var u = navigator.userAgent
				return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
			},
			//微信分享
			wxRegCallback () {
			  // 用于微信JS-SDK回调
			  this.wxShareTimeline()
			  this.wxShareAppMessage()
			},
			wxShareTimeline () {
				// 微信自定义分享到朋友圈
				var option = {
					title: '2019西瓜PLAY视频嘉年华', // 分享标题, 请自行替换
					link: window.location.href, // 分享链接，根据自身项目决定是否需要split
					imgUrl: 'https://xgh5.someet.cc/logo-xigua.png' // 分享图标, 请自行替换，需要绝对路径
				}
				// 将配置注入通用方法
				wxapi.ShareTimeline(option)
			},
			wxShareAppMessage () {
			  // 微信自定义分享给朋友
			  var option = {
				title: '2019西瓜PLAY视频嘉年华', // 分享标题, 请自行替换
				desc: '一艘承载数千创作人的神奇方舟，一个用58天建造的海上世界。8.22-8.26 五天四夜邮轮嘉年华之旅等你来！', // 分享描述, 请自行替换
				link: window.location.href, // 分享链接，根据自身项目决定是否需要split
				imgUrl: 'https://xgh5.someet.cc/logo-xigua.png' // 分享图标, 请自行替换，需要绝对路径
			  }
			  // 将配置注入通用方法
			  wxapi.ShareAppMessage(option)
			},
			getSwiperHeight(){
				var that = this;
				that.$nextTick(function(){
					that.screenWidth = that.$refs.main.clientWidth?that.$refs.main.clientWidth:'414'
					var w = that.screenWidth - 20
					document.getElementById('goTicket').style.right = 'calc(50% - '+w/2+'px)'
					window.addEventListener('scroll', that.handleScroll)
					if(that.isInIOS()){
						window.addEventListener('touchmove',that.handleScroll)
					}
					// var h = document.querySelector('#vPage').offsetHeight
					// document.querySelector('#videoSwiper').style.height = h +'px'
				})
			}
		},
		watch:{ 
			 $route(to,from){
				if(to.path == '/rule'){
					window.removeEventListener('scroll', this.handleScroll)
				}
				if(to.path == '/mob'){
					window.addEventListener('scroll', this.handleScroll)
				}
				// console.log(from.path);
			  }
		},
		components:{ 
		},
		computed: {
			player0() {
				return this.$refs.videoPlayerBottom0.player
			},
			playerTop() {
				return this.$refs.videoPlayerTop.player
			}
		 },
		mounted(){
			var that = this
			this.$axios.get('/static/img.json').then(function(response){
			 	that.imgList = response.data
				 //定位购票的位置
				 that.complete = true;
				
			})
			//微信分享
			if(wxapi.isweixin()){
				console.log('微信环境')
				wxapi.wxRegister(this.wxRegCallback)
			}
		},
		beforeDestroy(){
		  window.removeEventListener('scroll', this.handleScroll)
		}

    }
</script>
<style scope>
	.smallWidth{
		width: 100%;
	}
	.videoBox1{
		position: relative;
	}
	.video-vue-box{
		width: 99.6%;
		position: absolute;
		left: 0.3%;
		right: 0;
		bottom: 0;
		top: 0.9%;
		height: 96%;
	}
	.vjs-poster{
		border-radius: 0.3rem;
	}
	.smallVideo{
		width: 99%;
	}
	.videoBackBox img{
		border-radius: 0.3rem;
		display: block;
	}
	.swiper2 video{
		border-radius: 0.3rem;
	}
	.swiper2 .swiper-container .video-js.vjs-16-9, .video-js.vjs-4-3, .video-js.vjs-fluid{
		border-radius: 0.3rem;
	}
	.videoPage{
		background-color: rgba(0,0,0,0.5);
		position:absolute;
		bottom: -2%;
		width: 98.96%;
		height: 2rem;
		text-align: center;
		color:white;
		line-height:2rem ;
		border-bottom-left-radius: 0.3rem;
		border-bottom-right-radius: 0.3rem;
	}
	.videoPageHide{
		/* opacity: 0; */
		display: none;
	}
	.vjs-has-started .vjs-control-bar{
		z-index:201;
	}
	.video-js .vjs-tech{
		height: 102%;
	}
	
	#topMennuFormob{
		z-index:300;
	}
	.swiper-slide{
		width: 72.8%;
	}
	.vPage{
		position: absolute;
	    width: 100%;
	    height: 98%;
	    z-index: 200;
	    opacity: 1;
	}
	#videoBottom{
		position: absolute;
		width: 88%;
		top: 84%;
		left: 6%;
		right: 6%;
	}
	#topMenuForPc{
		width: 100%;
	    /* height: 5%; */
	    background-color: white;
	    position: fixed;
	    top: 0;
	    display: flex;
	    overflow: hidden;
	}
	.goTicket{
		position: fixed;
		right:calc(50% - 320px);
		width: 6rem;
		border-radius: 3rem;
		text-align: center;
		bottom: 7%;
		background-color: rgba(255,255,255,0);
		z-index:400;
	}
	.goTicket img{
		vertical-align: middle;
		border-radius: 2rem;
	}
	
	.mob-menu-list-mob-pc span img{
		width: 90%;
	}
	.mob-menuChildBox{
		display: inline-block;
		box-sizing: border-box;
		height: 100%;
	}
	.mob-child-left{
		width:45%;
		background-color: white;
	}
	.mob-child-right{
		width:40%;
	}
	.mob-child-blank{
		width: 15%;
	}
	.mob-menu-list-mob-pc{
		width: 100%;
		left: 0;
		height: 69%;
		display: flex;
		flex: 1;
		flex-grow: 1;
		/* padding-top: 0.5rem; */
	}
	.mob-menu-list-mob-pc span{
		display: block;
		box-sizing: border-box;
		width: calc(100% / 3);
		height: 100%;
		text-align: center;
		border:none;
		background-color: white;
		border-radius: 10px;
		cursor: pointer;
		z-index:10;
		/* margin-left: 3%; */
		cursor: pointer;
	}
	.mob-positionLine{
		width: 100%;
		height: 2rem;
		position: absolute;
		background-color: white;
		text-align: center;
		line-height:2rem ;
		color:white;
		opacity: 0;
	}
	.mob-positionBlock{
		width: 26%;
		height: 1%;
		position: absolute;
		background-color: white;
		top: 80.2%;
		left: 0.8%;
		right: 0;
		margin: 0 auto;
		color: white;
		opacity: 0;
		text-align: center;
	}
	#mob-what_pc{
		top: 24%;
	}
	#mob-where_pc{
		top:41.1%;
	}
	#mob-who_pc{
		top:72.4%;
	}
	.mob-imgBoxImg_pc{
		width: 87.8%;
		position: absolute;
		top: 14.25%;
		left: -0.6%;
		right: 0;
		margin: 0 auto;
	}
	.mob-relativeMenu{
		position: relative;
		/* margin-top: 0.6rem; */
	}
	.mob-fixedMenu{
		position: fixed;
		top:0.1rem;
	}
	.vjs-custom-skin > .video-js .vjs-big-play-button {
	  background-color: rgba(0,0,0,0.45);
	  font-size: 1.5em;
	   /*border-radius: 50%;*/
	  height: 2em !important;
	  line-height: 2em !important;
	  margin-top: -1em !important
	}
	.mob-slideBox{
		width: 100%;
		top: 12%;
		position: absolute;
		text-align: center;
	}
	.mob-slideBoxList{
		margin:0 auto;
		width: 2.6rem;
	}
	.mob-chevron{
		position: relative;
		width: 2.6rem;
		height: 0.57rem;
		opacity: 1;
		margin-bottom: 0.4rem;
	}
	.mob-chevron:before{
		content: ' ';
		position: absolute;
		top: 0;
		height: 0.5rem;
		width: 1.3rem;
		background-color: rgba(96,64,137,0.5);
		transform: skew(0deg, 30deg);
		left:0;
		border-top-left-radius: 0.5rem;
	    border-bottom-left-radius: 0.2rem;
	}
	.mob-chevron:after{
		content: ' ';
		position: absolute;
		top: 0;
		height: 0.5rem;
		width: 1.3rem;
		background-color: rgba(96,64,137,0.5);
		right: 0;
		transform: skew(0deg, -30deg);
		border-top-right-radius: 0.5rem;
	    border-bottom-right-radius: 0.2rem;
	}
	.mob-chevron:first-child:before,.mob-chevron:first-child:after {
	   background-color: rgba(96,64,137,1);
	   animation: move 0.7s ease-in-out infinite;
	}
	.mob-chevron:first-child{
		top:0;
	}

	@keyframes move {
		25% {
			top: calc(0.57rem * 1);
		}
		50% {
			top: calc(0.57rem * 2);
		}
		75% {
		   top: calc(0.57rem * 3);
		}
		100% {
			top: calc(0.57rem * 4);
		}
	}
	.mob-day-main{
		width: 100%;box-sizing: border-box;
		position: relative;
	}
	.mob-day-main .mob-day-box{
		width: 82%;
		height: 100%;
		box-sizing: border-box;
		box-sizing: border-box;
		margin: 0 auto;
	}
	.mob-day-box{
		position: absolute;
		left:9%;
		right: 9%;
		top:40%;
	}
	.mob-day-box .mob-day-title{
		width: 100%;height: 3rem;background-color: palegreen;text-align: center;
		/* border-radius: 0.6rem 0.6rem 0rem 0rem; */
		overflow-x:hidden; 
	}
	.mob-day-container{
		width: 100%;text-align: center;position: relative;
	}
	.mob-day-container-btn{
		position: absolute;top:0;width: 100%;
	}
	.mob-day-container-img{
		width: 100%;z-index:2;display: flex;height: 100%;
	}
	.mob-day-content{
		overflow: hidden;
		overflow-y: scroll;height: 40%;
		/* border-radius: 0rem 0rem 0.6rem 0.6rem; */
	}
	.mob-banner-div{
		width: 100%;position: absolute;top:81.75%;box-sizing: border-box;
	}
	.mob-banner-swiper{
		width: 89%;margin: 0 auto;box-sizing: border-box;
	}
</style>
<style scoped>
	.mob-main{
		width: 100%;
		max-width: 700px;
		margin: 0 auto;
	}
	.mob-main img{
		display: block;
	}
</style>