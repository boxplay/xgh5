<template>
	<div>
		<div v-if="complete==false" class='loadingPage'>
			<div class="xiguaCircle">
				<img src="https://xgh5.someet.cc/loading.jpg" alt="" width="100%;">
			</div>
		</div>
		<div class="main relativeBox" style="min-width: 700px;margin-top: 5%;" ref='main' v-if="complete==true">
			<img src="https://xgh5.someet.cc/pc.jpeg"  style="display: block;" alt="" width="100%">
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
			<router-link to="/prule">
				<div class='positionBlock' id='rule_pc'>
					这是分界线
				</div>
			</router-link>
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
    // import { swiper, swiperSlide } from "vue-awesome-swiper"
	// import { videoPlayer } from 'vue-video-player'
	// import 'swiper/dist/css/swiper.css'
	// import 'video.js/dist/video-js.css'
	// import 'vue-video-player/src/custom-theme.css'
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
			},
			goTicket(){
				window.location.href = 'https://traveldetail.fliggy.com/item.htm?id=596217589260'
			},
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
			 	that.complete = true;
				 //定位购票的位置
				this.$nextTick(() => {
					that.screenWidth = this.$refs.main.clientWidth?this.$refs.main.clientWidth:'414'
					var w = this.screenWidth - 20
					// document.getElementById('goTicket').style.right = 'calc(50% - '+w/2+'px)'
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
			window.addEventListener('scroll', this.handleScroll)
		},
		destroyed () {
		  window.removeEventListener('scroll', this.handleScroll)
		},
    }
</script>
<style scope>
	
	@import '../assets/css/index.css'
	
</style>
<style scoped>
	.main{
		width: 100%;
		min-width:700px;
		margin: 0 auto;
	}
	.vjs-custom-skin > .video-js .vjs-big-play-button {
	  background-color: rgba(0,0,0,0.45);
	  font-size: 3.5em;
	   /*border-radius: 50%;*/
	  height: 2em !important;
	  line-height: 2em !important;
	  margin-top: -1em !important
	}
</style>