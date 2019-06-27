<template>
	<div>
		<div v-if="complete==false" class='loadingPage'>
			<div class="xiguaCircle">
				<img src="https://xgh5.someet.cc/loading.jpg" alt="" width="100%;">
			</div>
		</div>
		<div class="mob-main relativeBox mobCss" ref='main' v-if="complete==true">
			<img src="https://xgh5.someet.cc/mob.jpg" @load="imgLoad" style="display: block;" alt="" width="100%"><!-- 顶部悬浮框 如果明天换图则去掉style-->
			<div class="mob-slideBox" v-show="Imgcomplete==true">
				<div class="mob-slideBoxList">
					<div class="mob-chevron" style="position: absolute;"></div>
					<div class="mob-chevron"></div>
					<div class="mob-chevron"></div>
					<div class="mob-chevron"></div>
				</div>
			</div>
			<div ref='topMennuFormobBox' id='topMennuFormobBox' style="position: absolute;top: 14%">
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
			<div class="mob-imgBoxImg_pc" v-show="imgList.xgPlayVideoTop.isShow && Imgcomplete==true">
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
    // import { swiper, swiperSlide } from "vue-awesome-swiper"
	// import { videoPlayer } from 'vue-video-player'
	// import 'swiper/dist/css/swiper.css'
	// import 'video.js/dist/video-js.css'
	// import 'vue-video-player/src/custom-theme.css'
	import wxapi from '@/common/js/wechat.js'
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
			},
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
					var videoBottom = document.querySelector('#videoBottom').clientHeight + document.querySelector('#bannerAndLogo').clientHeight
					var pauseTop = document.querySelector('#videoBottom').offsetTop - document.querySelector('#videoBottom').clientHeight
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
					ele = document.querySelector('#mob-what_pc')
				}else if(type == 'where'){
					ele = document.querySelector('#mob-where_pc')
				}else if(type == 'who'){
					ele = document.querySelector('#mob-who_pc')
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
				this.$router.push('/rule')
			},
			scrollEvent(type){
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
				 let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
				 return flag;
			},
			//微信分享
			wxRegCallback () {
			  // 用于微信JS-SDK回调
			  this.wxShareTimeline()
			  this.wxShareAppMessage()
			},
			wxShareTimeline () {
				// 微信自定义分享到朋友圈
				let option = {
					title: '2019西瓜PLAY视频嘉年华', // 分享标题, 请自行替换
					link: window.location.href, // 分享链接，根据自身项目决定是否需要split
					imgUrl: 'https://xgh5.someet.cc/logo-xigua.png' // 分享图标, 请自行替换，需要绝对路径
				}
				// 将配置注入通用方法
				wxapi.ShareTimeline(option)
			},
			wxShareAppMessage () {
			  // 微信自定义分享给朋友
			  let option = {
				title: '2019西瓜PLAY视频嘉年华', // 分享标题, 请自行替换
				desc: '一艘承载数千创作人的神奇方舟，一个用58天建造的海上世界。8.22-8.26 五天四夜邮轮嘉年华之旅等你来！', // 分享描述, 请自行替换
				link: window.location.href, // 分享链接，根据自身项目决定是否需要split
				imgUrl: 'https://xgh5.someet.cc/logo-xigua.png' // 分享图标, 请自行替换，需要绝对路径
			  }
			  // 将配置注入通用方法
			  wxapi.ShareAppMessage(option)
			},
			goTicket(){
				window.location.href = 'https://traveldetail.fliggy.com/item.htm?id=596217589260'
			},
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
			this.$axios.get('/static/img.json').then((response)=>{
			 	that.imgList = response.data
				 //定位购票的位置
				 that.complete = true;
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
						// document.getElementById('goTicket').style.right = 'calc(50% - '+w/2+'px)'
					})
				  })()
				}
			})
			 //监听页面滚动
			this.$nextTick(function(){
				window.addEventListener('scroll', this.handleScroll)
			})
			//微信分享
			if(wxapi.isweixin()){
				console.log('微信环境')
				wxapi.wxRegister(this.wxRegCallback)
			}
		},
			beforeDestroy () {
			  window.removeEventListener('scroll', this.handleScroll)
			},
    }
</script>
<style scope>
	#topMennuFormob{
		z-index:300;
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
		height: 0.6%;
		position: absolute;
		background-color: white;
		top: 84.3%;
		left: 0.8%;
		right: 0;
		margin: 0 auto;
		color: white;
		opacity: 0;
		text-align: center;
	}
	#mob-what_pc{
		top: 28%;
	}
	#mob-where_pc{
		top:47.5%;
	}
	#mob-who_pc{
		top:75.5%;
	}
	.mob-imgBoxImg_pc{
		width: 87.8%;
		position: absolute;
		top: 16.5%;
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
		top: 13%;
		position: absolute;
		text-align: center;
		/* background: -webkit-linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.6));
		background: -o-linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.6));
		background: -moz-linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.6));
		background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.6)); */
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
</style>
<style scoped>
	.mob-main{
		width: 100%;
		max-width: 700px;
		margin: 0 auto;
	}
</style>