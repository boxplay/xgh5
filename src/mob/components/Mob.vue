<template>
	<div class="main" style='height: 768rem;' v-if="complete==true">
		<div>
			<img src="https://img.someet.cc/xgh5.png" alt="" width="100%">
		</div>
	</div>
</template>

<script>
    import { swiper, swiperSlide } from "vue-awesome-swiper";
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
			playerOptions : {
				poster: "https://img.someet.cc/Fg-C6ziVB2wP4dmt0BlxURLR8sMS",
				aspectRatio: '16:9',
				// 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
				sources: [{
					src: 'https://img.someet.cc/1560426452757245.mp4',  // 路径
					type: 'video/mp4'  // 类型
				}]
			},
			menuTop:false
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