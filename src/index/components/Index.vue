<template>
	<div class="main" v-if="complete==true">
		<!-- 顶部悬浮框 -->
		<div class="topMennu">
			<div class="menu-list">
				<span>
					活动亮点
				</span>
				<span>
					邮轮亮点
				</span>
				<span>
					活动日程
				</span>
				<span>
					打榜规则
				</span>
				<span>
					创作人阵容
				</span>
				<span>
					合作伙伴
				</span>
			</div>
			<div class="goTicketTop">
				<span>预约抢票</span>
			</div>
		</div>
		<!-- 顶部悬浮框结束 -->
		<!-- 视频播放 -->
		<div class="xgvideo">
			<iframe src="https://i.snssdk.com/videofe/xigua/detail?group_id=6661814481565254158" frameborder="0">
				
			</iframe>
		</div>
		<!-- 视频播放结束 -->
		<!-- 完整信息图片 -->
		<div class="hdld" v-show="imgList.xgPlayTitle.isShow">
			<img :src="imgList.xgPlayTitle.val[0]" alt="">
		</div>
		<!-- 完整信息图片结束 -->
		<!-- 轮播图开始 -->
		<div v-show="imgList.xgPlaySwiper.isShow">
			<swiper :options="swiperOption">
				<swiper-slide v-bind:key="index" v-for="(item,index) in imgList.xgPlaySwiper.val"><img width="100%" :src="item"></swiper-slide>
			</swiper> 
		</div>
		<!-- 信息展示 -->
		<div class="hdld" v-show="imgList.xgPlayDesc.isShow">
			<img :src="imgList.xgPlayDesc.val[0]" alt="">
		</div>
		<!-- 信息展示 -->
		<!-- 轮播图结束 -->
		<div class="hdld" v-show="imgList.xgPlayHdld.isShow">
			活动亮点
		</div>
		<!-- 活动亮点开始 -->
		<div class="hdld-list" v-show="imgList.xgPlayHdld.isShow">
			<div class="hdld-list-left">
				<div class="hdld-list-left-box">
					<div class="hdld-list-left-box-img">
						<img src="https://img.someet.cc/Fg-3MeOGfal-2u6I4WVP9fb61wCg" alt="">
					</div>
					<div class="hdld-list-left-box-text">
						的哈卡接收到哈开始打卡打瞌睡更好地卡拉时光倒流哈施工队打算给大家阿什顿噶僵尸国度
						大概金黄色的宫颈癌是给大家安徽省打飞机啊看过的行当
					</div>
					<div class="hdld-list-left-box-img">
						<img src="https://img.someet.cc/Fg-3MeOGfal-2u6I4WVP9fb61wCg" alt="">
					</div>
					<div class="hdld-list-left-box-text">
						的哈卡接收到哈开始打卡打瞌睡更好地卡拉时光倒流哈施工队打算给大家阿什顿噶僵尸国度
						大概金黄色的宫颈癌是给大家安徽省打飞机啊看过的行当
					</div>
					<div class="hdld-list-left-box-img">
						<img src="https://img.someet.cc/Fg-3MeOGfal-2u6I4WVP9fb61wCg" alt="">
					</div>
					<div class="hdld-list-left-box-text">
						的哈卡接收到哈开始打卡打瞌睡更好地卡拉时光倒流哈施工队打算给大家阿什顿噶僵尸国度
						大概金黄色的宫颈癌是给大家安徽省打飞机啊看过的行当
					</div>
				</div>
			</div>
			<div class="hdld-list-right">
				<div class="hdld-list-left-box-img">
					<img src="https://img.someet.cc/Fg-3MeOGfal-2u6I4WVP9fb61wCg" alt="">
				</div>
				<div class="hdld-list-left-box-text">
					的哈卡接收到哈开始打卡打瞌睡更好地卡拉时光倒流哈施工队打算给大家阿什顿噶僵尸国度
					大概金黄色的宫颈癌是给大家安徽省打飞机啊看过的行当
				</div>
				<div class="hdld-list-left-box-img">
					<img src="https://img.someet.cc/Fg-3MeOGfal-2u6I4WVP9fb61wCg" alt="">
				</div>
				<div class="hdld-list-left-box-text">
					的哈卡接收到哈开始打卡打瞌睡更好地卡拉时光倒流哈施工队打算给大家阿什顿噶僵尸国度
					大概金黄色的宫颈癌是给大家安徽省打飞机啊看过的行当
				</div>
				<div class="hdld-list-left-box-img">
					<img src="https://img.someet.cc/Fg-3MeOGfal-2u6I4WVP9fb61wCg" alt="">
				</div>
				<div class="hdld-list-left-box-text">
					的哈卡接收到哈开始打卡打瞌睡更好地卡拉时光倒流哈施工队打算给大家阿什顿噶僵尸国度
					大概金黄色的宫颈癌是给大家安徽省打飞机啊看过的行当
				</div>
			</div>
		</div>
		<!-- 活动亮点结束 -->
		<!-- 信息展示 -->
		<div class="hdld" v-show="imgList.xgPlayHdldBack.isShow">
			<img :src="imgList.xgPlayHdldBack.val[0]" alt="">
		</div>
		<!-- 信息展示 -->
		<!-- 邮轮亮点开始 -->
		<div class="hdld" v-show="imgList.xgPlayYlld.isShow">
			游轮亮点
		</div>
		<div class="ylld" v-show="imgList.xgPlayYlld.isShow">
			<div class="ylld-box">
				<div class="ylld-list" v-for="(item,index) in imgList.xgPlayYlld.val" v-bind:key="index">
					<img :src="item" alt="">
				</div>
			</div>
		</div>
		<!-- 邮轮亮点结束 -->
		<!-- 信息展示 -->
		<div class="hdld" v-show="imgList.xgPlayYlldBack.isShow">
			<img :src="imgList.xgPlayYlldBack.val[0]" alt="">
		</div>
		<!-- 信息展示 -->
		<!-- 活动概览开始 -->
		<!-- <div class="hdgl">
				<div class="hdld">
					活动概览
				</div>
				<div class="hdgl-text">
					西瓜play是西瓜视频年度最大规模的线下品牌活动西瓜play是西瓜视频年度最大规模的线下品牌活动
					西瓜play是西瓜视频年度最大规模的线下品牌活动西瓜play是西瓜视频年度最大规模的线下品牌活动
					西瓜play是西瓜视频年度最大规模的线下品牌活动西瓜play是西瓜视频年度最大规模的线下品牌活动
					西瓜play是西瓜视频年度最大规模的线下品牌活动
				</div>
		</div> -->
		<!-- 活动概览结束 -->
		<!-- 活动日程 -->
		<div class="hdgl" v-if="DayList.length > 0">
			<div class="hdld">
				活动日程
			</div>
			<div class="hdrc-day">
					<span :class="DayIndex == 0?'selected-span':''" @click='changeDay(0)'>8.22</span>
					<span :class="DayIndex == 1?'selected-span':''" @click='changeDay(1)'>8.23</span>
					<span :class="DayIndex == 2?'selected-span':''" @click='changeDay(2)'>8.24</span>
					<span :class="DayIndex == 3?'selected-span':''" @click='changeDay(3)'>8.25</span>
					<span :class="DayIndex == 4?'selected-span':''" @click='changeDay(4)'>8.26</span>
				</div>
			<div>
			<table class="hd-table">
				<tr>
					<th>场地</th>
					<th>{{DayList[DayIndex].stime}}</th>
					<th>{{DayList[DayIndex].xtime}}</th>
				</tr>
				<tr v-for="(item,index) in DayList[DayIndex].space" v-bind:key="index">
					<td>{{item.space}}</td>
					<td>{{item.act[0]}}</td>
					<td>{{item.act[1]}}</td>
				</tr>

			</table>
			</div>
		</div>
		<!-- 活动日程 -->
		<!-- 信息展示 -->
		<div class="hdld" v-show="imgList.xgPlayHdrcBack.isShow">
			<img :src="imgList.xgPlayHdrcBack.val[0]" alt="">
		</div>
		<!-- 信息展示 -->
		<!-- 规则和日程 -->
		<div class="hdgl" v-show="imgList.xgPlayHdgz.isShow">
			<div class="hdld">
				活动规则
			</div>
			<div class="hdgl-text">
			<p>
				西瓜play是西瓜视频年度最大规模的线下品牌活动西瓜play是西瓜视频年度最大规模的线下品牌活动
				西瓜play是西瓜视频年度最大规模的线下品牌活动西瓜play是西瓜视频年度最大规模的线下品牌活动
				西瓜play是西瓜视频年度最大规模的线下品牌活动西瓜play是西瓜视频年度最大规模的线下品牌活动
				西瓜play是西瓜视频年度最大规模的线下品牌活动
			</p>
			<img width="100%" src="http://img.someet.cc/Fhe5L1DZvhVvUndWeN-tZ_K8r4WS">
			<p>
				西瓜play是西瓜视频年度最大规模的线下品牌活动西瓜play是西瓜视频年度最大规模的线下品牌活动
				西瓜play是西瓜视频年度最大规模的线下品牌活动西瓜play是西瓜视频年度最大规模的线下品牌活动
				西瓜play是西
			</p>
			<img width="100%" src="http://img.someet.cc/Fhe5L1DZvhVvUndWeN-tZ_K8r4WS">
			</div>
		</div>
		<!-- 规则和日程 -->
		<!-- 创作人阵容 -->
		<div class="hdld" v-show="imgList.xgPlayCz.isShow">
			创作人阵容
		</div>
		<div class='people' v-show="imgList.xgPlayCz.isShow">
			<div class="people-box" v-for="(item,index) in imgList.xgPlayCz.val" v-bind:key="index">
				<div class="people-box-pad">
					<img :src="item" alt="">
				</div>
			</div>
		</div>
		<!-- 创作人阵容 -->
		<!-- 合作商bannner -->
		<div v-show="imgList.xgPlayHzBanner.isShow">
			<img width="100%" :src="imgList.xgPlayHzBanner.val[0]">
		</div>
		<!-- 合作商<banner></banner> -->

		<!-- 轮播视频 -->
		<swiper ref='swiperForMedia' :options="swiperOptionForMedia">
			<swiper-slide>
				<video-player  class="video-player vjs-custom-skin"
				ref="videoPlayer"
				:playsinline="true"
				:options="playerOptions"
				@play="CplayerPlay($event)"
				@pause="CplayerPause($event)"
				></video-player>
			</swiper-slide>
			<swiper-slide>
				<video-player  class="video-player vjs-custom-skin"
				ref="videoPlayer"
				:playsinline="true"
				:options="playerOptions"
				@play="CplayerPlay($event)"
				@pause="CplayerPause($event)"
				></video-player>
			</swiper-slide>
			<swiper-slide>
				<video-player  class="video-player vjs-custom-skin"
				ref="videoPlayer"
				:playsinline="true"
				:options="playerOptions"
				@play="CplayerPlay($event)"
				@pause="CplayerPause($event)"
				></video-player>
			</swiper-slide>

		</swiper>
		<!-- 轮播视频 -->
		<!-- 合作伙伴LOGO -->
		<div v-show="imgList.xgPlayHzLogo.isShow">
			<img width="100%" :src="imgList.xgPlayHzLogo.val[0]">
		</div>
		<!-- 合作伙伴 -->
		<!-- 信息展示 -->
		<div class="hdld" v-show="imgList.xgPlayHzLogoBack.isShow">
			<img :src="imgList.xgPlayHzLogoBack.val[0]" alt="">
		</div>
		<!-- 信息展示 -->
		<!-- 联系方式 -->
		<div class="hdld">
			微信头条西瓜号 合作方联系方式
		</div>
		<!-- 联系方式 -->
		<!-- 预约抢票 -->
		<!-- <div class='goTicket'>
		<span style='margin-top:0.6rem;'>预约</span><span>抢票</span>
		</div> -->
		<!-- 预约抢票 -->
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
			playerOptions : {
				poster: "https://img.someet.cc/Fg-C6ziVB2wP4dmt0BlxURLR8sMS",
				aspectRatio: '16:9',
				// 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
				sources: [{
					src: 'https://img.someet.cc/1560426452757245.mp4',  // 路径
					type: 'video/mp4'  // 类型
				}]
		}
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
			 this.$axios.get('/static/imgforweb.json').then((response)=>{
			 	 that.imgList = response.data
			 	 that.complete = true;
			 })
			 
		 }
    }
</script>
<style scoped>
	
	@import '../assets/css/index.css'
	
</style>