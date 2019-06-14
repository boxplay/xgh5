<template>
  <div class="main" v-show="imgList">
		<!-- 完整信息图片 -->
		<div class="hdld">
			<img :src="imgList.xgPlayTitle" alt="">
		</div>
		<!-- 完整信息图片结束 -->
    <!-- 轮播图开始 -->
    <div>
      <swiper :options="swiperOption">
				<swiper-slide><img width="100%" src="http://img.someet.cc/Fhe5L1DZvhVvUndWeN-tZ_K8r4WS"></swiper-slide>
				<swiper-slide><img width="100%" src="http://img.someet.cc/Fhe5L1DZvhVvUndWeN-tZ_K8r4WS"></swiper-slide>
				<swiper-slide><img width="100%" src="http://img.someet.cc/Fhe5L1DZvhVvUndWeN-tZ_K8r4WS"></swiper-slide>
				<swiper-slide><img width="100%" src="http://img.someet.cc/Fhe5L1DZvhVvUndWeN-tZ_K8r4WS"></swiper-slide>
				<swiper-slide><img width="100%" src="http://img.someet.cc/Fhe5L1DZvhVvUndWeN-tZ_K8r4WS"></swiper-slide>
				<swiper-slide><img width="100%" src="http://img.someet.cc/Fhe5L1DZvhVvUndWeN-tZ_K8r4WS"></swiper-slide>
      </swiper> 
    </div>
		<!-- 信息展示 -->
		<div class="hdld">
			<img :src="imgList.xgPlayDesc" alt="">
		</div>
		<!-- 信息展示 -->
    <!-- 轮播图结束 -->
    <div class="hdld">
				活动亮点
    </div>
		<!-- 活动亮点开始 -->
			<div class="hdld-list">
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
		<div class="hdld">
			<img :src="imgList.xgPlayHdldBack" alt="">
		</div>
		<!-- 信息展示 -->
		<!-- 邮轮亮点开始 -->
		<div class="hdld">
				游轮亮点
		</div>
		<div class="ylld">
			<div class="ylld-list" v-for="item in imgList.xgPlayYlld">
				<img :src="item" alt="">
			</div>
		</div>
		<!-- 邮轮亮点结束 -->
		<!-- 信息展示 -->
		<div class="hdld">
			<img :src="imgList.xgPlayYlldBack" alt="">
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
					<tr v-for="item in DayList[DayIndex].space">
						<td>{{item.space}}</td>
						<td>{{item.act[0]}}</td>
						<td>{{item.act[1]}}</td>
					</tr>
					
				</table>
			</div>
		</div>
		<!-- 活动日程 -->
		<!-- 信息展示 -->
		<div class="hdld">
			<img :src="imgList.xgPlayHdrcBack" alt="">
		</div>
		<!-- 信息展示 -->
		<!-- 规则和日程 -->
		<div class="hdgl">
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
		<div class="hdld">
			创作人阵容
		</div>
		<div class='people'>
			<div class="people-box" v-for="item in imgList.xgPlayCz">
				<div class="people-box-pad">
					<img :src="item" alt="">
				</div>
			</div>
		</div>
		<!-- 创作人阵容 -->
		<!-- 合作商bannner -->
		<div>
			<img width="100%" :src="imgList.xgPlayHzBanner">
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
		<div>
			<img width="100%" :src="imgList.xgPlayHzLogo">
		</div>
		<!-- 合作伙伴 -->
		<!-- 信息展示 -->
		<div class="hdld">
			<img :src="imgList.xgPlayHzLogoBack" alt="">
		</div>
		<!-- 信息展示 -->
		<!-- 联系方式 -->
		<div class="hdld">
			微信头条西瓜号 合作方联系方式
		</div>
		<!-- 联系方式 -->
		<!-- 预约抢票 -->
		<div class='goTicket'>
			<span style='margin-top:0.6rem;'>预约</span><span>抢票</span>
		</div>
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
					 console.log(index)
					 this.DayIndex = index
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
				 this.$axios.get('/static/day.json').then((response)=>{
					 console.log(response.data)
					 this.DayList = response.data
				 })
				 this.$axios.get('/static/img.json').then((response)=>{
				 					 console.log(response.data)
				 					 this.imgList = response.data
				 })
				 
			 }
    }
</script>
<style scoped>
	
	@import '../index/assets/css/index.css'
	
</style>