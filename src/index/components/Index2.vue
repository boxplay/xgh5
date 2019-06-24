<template>
	<div>
		<div v-if="complete==false" class='loadingPage'>
			<h2>Loading</h2>
		</div>
		<div class="main" ref='main' style="max-width: 1280px;" v-if="complete==true">
			<img src="https://xgh5.someet.cc/pc.jpeg" alt="" width="100%">
		</div>
	</div>
</template>
<script>
 //    import { swiper, swiperSlide } from "vue-awesome-swiper"
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
				// var videoTop = document.querySelector('#what').offsetTop
				// if(scrollTop > videoTop){
				// 	this.playerTop.pause()
				// }
				// if(this.imgList.xgPlayMedias.isShow){
				// 	var videoBottom = document.querySelector('#videoBottom').clientHeight + document.querySelector('#bannerAndLogo').clientHeight
				// 	var pauseTop = document.querySelector('#videoBottom').offsetTop - document.querySelector('#videoBottom').clientHeight
				// 	if(scrollTop < (pauseTop - videoBottom)){
				// 		//停止下面的播放器
				// 		this.player0.pause();
				// 		this.player1.pause();
				// 		this.player2.pause();
				// 	}
				// }
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
			// swiper,
			// swiperSlide,
			// videoPlayer
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
			// window.addEventListener('scroll', this.handleScroll)
		},
		destroyed () {
		  // window.removeEventListener('scroll', this.handleScroll)
		},
    }
</script>
<style scoped>
	
	.main{
		width: 100%;
		max-width: 1280px;
		margin: 0 auto;
	}
	
</style>