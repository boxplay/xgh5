<template>
	<div class="backend-box" v-if="complete ==true">
		<div class="backend-box-left">
			<el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<switchTem :status="imgList.xgPlayTitle.isShow" :t="'标题图片'" @changeShow="changeStatus" :type="'xgPlayTitle'"></switchTem>
				<upload ref='xgPlayTitle' :imgList="imgList.xgPlayTitle.val" :isShow="imgList.xgPlayTitle.isShow" :uploadType="'xgPlayTitle'" @handleFileRemove="handleFileRemove" @uploadImage="uploadImage"></upload>
				<hr>
				<switchTem :status="imgList.xgPlaySwiper.isShow" :t="'Banner'" @changeShow="changeStatus" :type="'xgPlaySwiper'"></switchTem>
				<upload ref='xgPlaySwiper' :imgList="imgList.xgPlaySwiper.val" :isShow="imgList.xgPlaySwiper.isShow" :uploadType="'xgPlaySwiper'" @handleFileRemove="handleFileRemove" @uploadImage="uploadImage"></upload>
				<hr>
				<!-- 上传副标题图片 -->
				<switchTem :status="imgList.xgPlayDesc.isShow" :t="'副标题图片'" @changeShow="changeStatus" :type="'xgPlayDesc'"></switchTem>
				<upload ref='xgPlayDesc' :imgList="imgList.xgPlayDesc.val" :isShow="imgList.xgPlayDesc.isShow" :uploadType="'xgPlayDesc'" @handleFileRemove="handleFileRemove" @uploadImage="uploadImage"></upload>
				<hr>
				<!-- 上传活动亮点 -->
				<switchTem :status="imgList.xgPlayHdld.isShow" :t="'活动亮点图'" @changeShow="changeStatus" :type="'xgPlayHdld'"></switchTem>
				<upload ref='xgPlayHdld' :imgList="imgList.xgPlayHdld.val" :isShow="imgList.xgPlayHdld.isShow" :uploadType="'xgPlayHdld'" @handleFileRemove="handleFileRemove" @uploadImage="uploadImage"></upload>
				<hr>
				<!-- 上传活动亮点说明图 -->
				<switchTem :status="imgList.xgPlayHdldBack.isShow" :t="'活动亮点玩法图'" @changeShow="changeStatus" :type="'xgPlayHdldBack'"></switchTem>
				<upload ref='xgPlayHdldBack' :imgList="imgList.xgPlayHdldBack.val" :isShow="imgList.xgPlayHdldBack.isShow" :uploadType="'xgPlayHdldBack'" @handleFileRemove="handleFileRemove" @uploadImage="uploadImage"></upload>
				<hr>
				<!-- 上传邮轮亮点 -->
				<switchTem :status="imgList.xgPlayYlld.isShow" :t="'邮轮亮点'" @changeShow="changeStatus" :type="'xgPlayYlld'"></switchTem>
				<upload ref='' :imgList="imgList.xgPlayYlld.val" :isShow="imgList.xgPlayYlld.isShow" :uploadType="'xgPlayYlld'" @handleFileRemove="handleFileRemove" @uploadImage="uploadImage"></upload>
				<hr>
				<!-- 上传邮轮亮点说明图 -->
				<switchTem :status="imgList.xgPlayYlldBack.isShow" :t="'游轮亮点说明'" @changeShow="changeStatus" :type="'xgPlayYlldBack'"></switchTem>
				<upload ref='xgPlayYlldBack' :imgList="imgList.xgPlayYlldBack.val" :isShow="imgList.xgPlayYlldBack.isShow" :uploadType="'xgPlayYlldBack'" @handleFileRemove="handleFileRemove" @uploadImage="uploadImage"></upload>
				<hr>
				<!-- 上传活动日程说明图 -->
				<switchTem :status="imgList.xgPlayHdrcBack.isShow" :t="'活动日程说明'" @changeShow="changeStatus" :type="'xgPlayHdrcBack'"></switchTem>
				<upload ref='xgPlayHdrcBack' :imgList="imgList.xgPlayHdrcBack.val" :isShow="imgList.xgPlayHdrcBack.isShow" :uploadType="'xgPlayHdrcBack'" @handleFileRemove="handleFileRemove" @uploadImage="uploadImage"></upload>
				<hr>
				<!-- 上传活动股则 -->
				<switchTem :status="imgList.xgPlayHdgz.isShow" :t="'活动规则说明'" @changeShow="changeStatus" :type="'xgPlayHdgz'"></switchTem>
				<upload ref='xgPlayHdgz' :imgList="imgList.xgPlayHdgz.val" :isShow="imgList.xgPlayHdgz.isShow" :uploadType="'xgPlayHdgz'" @handleFileRemove="handleFileRemove" @uploadImage="uploadImage"></upload>
				<hr>
				<!-- 上传创作者阵容图 -->
				<switchTem :status="imgList.xgPlayCz.isShow" :t="'创作者阵容'" @changeShow="changeStatus" :type="'xgPlayCz'"></switchTem>
				<upload ref='xgPlayCz' :imgList="imgList.xgPlayCz.val" :isShow="imgList.xgPlayCz.isShow" :uploadType="'xgPlayCz'" @handleFileRemove="handleFileRemove" @uploadImage="uploadImage"></upload>
				<hr>
				<!-- 上传合作商bannner -->
				<switchTem :status="imgList.xgPlayHzBanner.isShow" :t="'合作商Banner'" @changeShow="changeStatus" :type="'xgPlayHzBanner'"></switchTem>
				<upload ref='xgPlayHzBanner' :imgList="imgList.xgPlayHzBanner.val" :isShow="imgList.xgPlayHzBanner.isShow" :uploadType="'xgPlayHzBanner'" @handleFileRemove="handleFileRemove" @uploadImage="uploadImage"></upload>
				<hr>
				<!-- 上传视频 -->
				
				<!-- 上传logo -->
				<switchTem :status="imgList.xgPlayHzLogo.isShow" :t="'合作商logo'" @changeShow="changeStatus" :type="'xgPlayHzLogo'"></switchTem>
				<upload ref='xgPlayHzLogo' :imgList="imgList.xgPlayHzLogo.val" :isShow="imgList.xgPlayHzLogo.isShow" :uploadType="'xgPlayHzLogo'" @handleFileRemove="handleFileRemove" @uploadImage="uploadImage"></upload>
				<hr>
				<!-- 上传合作伙伴说明 -->
				<switchTem :status="imgList.xgPlayHzLogoBack.isShow" :t="'合作商logo说明'" @changeShow="changeStatus" :type="'xgPlayHzLogoBack'"></switchTem>
				<upload ref='xgPlayHzLogoBack' :imgList="imgList.xgPlayHzLogoBack.val" :isShow="imgList.xgPlayHzLogoBack.isShow" :uploadType="'xgPlayHzLogoBack'" @handleFileRemove="handleFileRemove" @uploadImage="uploadImage"></upload>
				<hr>
				<br>
				<br>
				<el-form-item>
					<el-button type="primary" @click="submitForm('ruleForm')">立即保存</el-button>
				</el-form-item>
			</el-form>
		</div>
		<div class="backend-box-right">
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
		<div class="hdld" v-show="imgList.xgPlayYlld.isShow">
			<div v-for="(item,index) in imgList.xgPlayYlld.val" v-bind:key="index">
				<img :src="item" alt="">
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
	</div>
</template>

<script>
    import { swiper, swiperSlide } from "vue-awesome-swiper";
	import { videoPlayer } from 'vue-video-player'
	import 'swiper/dist/css/swiper.css'
	import 'video.js/dist/video-js.css'
	import 'vue-video-player/src/custom-theme.css'
	import upload from '@/components/upload'
	import switchTem from '@/components/switchTem'
	import qs from 'qs'
    export default {
      name: 'Index',
      data () {
        return {
			complete:false,
			DayIndex:1,
			DayList:{

			},//活动日程
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
			imgList:{
				"xgPlayTitle":{
					"val":[],
					"isShow":1
				},
				"xgPlaySwiper":{
					"val":[],
					"isShow":1
				},
				"xgPlayDesc":{
					"val":[],
					"isShow":1
				},
				"xgPlayHdgz":{
					"val":[],
					"isShow":1
				},
				"xgPlayHdld":{
					"val":[],
					"isShow":1
				},
				"xgPlayHdldBack":{
					"val":[],
					"isShow":1
				},
				"xgPlayYlld":{
					"val":[],
					"isShow":1
				},
				"xgPlayYlldBack":{
					"val":[],
					"isShow":1
				},
				"xgPlayHdrcBack":{
					"val":[],
					"isShow":1
				},
				"xgPlayHzhbBack":{
					"val":[],
					"isShow":1
				},
				"xgPlayCz":{
					"val":[],
					"isShow":1
				},
				"xgPlayHzBanner":{
					"val":[],
					"isShow":1
				},
				"xgPlayMedias":{
					"val":[],
					"isShow":1
				},
				"xgPlayHzLogo":{
					"val":[],
					"isShow":1
				},
				"xgPlayHzLogoBack":{
					"val":[],
					"isShow":1
				}
				
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
			},
			changeStatus(val,type){
				if(type == 'xgPlayTitle'){
					this.imgList.xgPlayTitle.isShow = val
				}else if(type == 'xgPlayDesc'){
					this.imgList.xgPlayDesc.isShow = val
				}else if(type == 'xgPlayHdgz'){
					this.imgList.xgPlayHdgz.isShow = val
				}else if(type == 'xgPlayHdgzBack'){
					this.imgList.xgPlayHdgzBack.isShow = val
				}else if(type == 'xgPlayHdldBack'){
					this.imgList.xgPlayHdldBack.isShow = val
				}else if(type == 'xgPlayHdld'){
					this.imgList.xgPlayHdld.isShow = val
				}else if(type == 'xgPlayYlld'){
					this.imgList.xgPlayYlld.isShow = val
				}else if(type == 'xgPlayYlldBack'){
					this.imgList.xgPlayYlldBack.isShow = val
				}else if(type == 'xgPlayHdrcBack'){
					this.imgList.xgPlayHdrcBack.isShow = val
				}else if(type == 'xgPlayHdgz'){
					this.imgList.xgPlayHdgz.isShow = val
				}else if(type == 'xgPlayCz'){
					this.imgList.xgPlayCz.isShow = val
				}else if(type == 'xgPlayHzBanner'){
					this.imgList.xgPlayHzBanner.isShow = val
				}else if(type == 'xgPlayHzLogo'){
					this.imgList.xgPlayHzLogo.isShow = val
				}else if(type == 'xgPlayHzLogoBack'){
					console.log(type,val);
					this.imgList.xgPlayHzLogoBack.isShow = val
					console.log('1111----'+this.imgList.xgPlayHzLogoBack.isShow)
				}else if(type == 'xgPlaySwiper'){
					this.imgList.xgPlaySwiper.isShow = val
				}
			},
			handleFileRemove(file, index,type) {
				console.log('parent')
				if(type == 'xgPlayTitle'){
					this.imgList.xgPlayTitle.val.splice(0,1)
					console.log(this.imgList.xgPlayTitle.val)
				}else if(type == 'xgPlayDesc'){
					this.imgList.xgPlayDesc.val.splice(0,1)
				}else if(type == 'xgPlayHdgz'){
					this.imgList.xgPlayHdgz.val.splice(0,1)
				}else if(type == 'xgPlayHdgzBack'){
					this.imgList.xgPlayHdgzBack.val.splice(0,1)
				}else if(type == 'xgPlayHdldBack'){
					this.imgList.xgPlayHdldBack.val.splice(0,1)
				}else if(type == 'xgPlayHdld'){
					this.imgList.xgPlayHdld.val.splice(0,1)
				}else if(type == 'xgPlayYlld'){
					this.imgList.xgPlayYlld.val.splice(0,1)
				}else if(type == 'xgPlayYlldBack'){
					this.imgList.xgPlayYlldBack.val.splice(0,1)
				}else if(type == 'xgPlayHdrcBack'){
					this.imgList.xgPlayHdrcBack.val.splice(0,1)
				}else if(type == 'xgPlayHdgz'){
					this.imgList.xgPlayHdgz.val.splice(0,1)
				}else if(type == 'xgPlayCz'){
					this.imgList.xgPlayCz.val.splice(0,1)
				}else if(type == 'xgPlayHzBanner'){
					this.imgList.xgPlayHzBanner.val.splice(0,1)
				}else if(type == 'xgPlayHzLogo'){
					this.imgList.xgPlayHzLogo.val.splice(0,1)
				}else if(type == 'xgPlayHzLogoBack'){
					this.imgList.xgPlayHzLogoBack.val.splice(0,1)
				}else if(type == 'xgPlaySwiper'){
					this.imgList.xgPlaySwiper.val.splice(index,1)
					console.log(this.imgList.xgPlaySwiper.val)
				}
			},
			uploadImage(response, file, fileList){
				var type = response.data.data;
				if(type == 'xgPlayTitle'){
					this.imgList.xgPlayTitle.val[0] = response.data.url;
					this.$refs.xgPlayTitle.img = response.data.url
				}else if(type == 'xgPlayDesc'){
					this.imgList.xgPlayDesc.val[0] = response.data.url;
					this.$refs.xgPlayTitle.img = response.data.url
				}else if(type == 'xgPlayHdgz'){
					this.imgList.xgPlayHdgz.val[0] = response.data.url;
					this.$refs.xgPlayHdgz.img = response.data.url
				}else if(type == 'xgPlayHdgzBack'){
					this.imgList.xgPlayHdgzBack.val[0] = response.data.url;
					this.$refs.xgPlayHdgzBack.img = response.data.url
				}else if(type == 'xgPlayHdldBack'){
					this.imgList.xgPlayHdldBack.val[0] = response.data.url;
					this.$refs.xgPlayHdldBack.img = response.data.url
				}else if(type == 'xgPlayHdld'){
					this.imgList.xgPlayHdld.val[0] = response.data.url;
					this.$refs.xgPlayHdld.img = response.data.url
				}else if(type == 'xgPlayYlld'){
					this.imgList.xgPlayYlld.val[0] = response.data.url;
					this.$refs.xgPlayYlld.img = response.data.url
				}else if(type == 'xgPlayYlldBack'){
					this.imgList.xgPlayYlldBack.val[0] = response.data.url;
					this.$refs.xgPlayYlldBack.img = response.data.url
				}else if(type == 'xgPlayHdrcBack'){
					this.imgList.xgPlayHdrcBack.val[0] = response.data.url;
					this.$refs.xgPlayHdrcBack.img = response.data.url
				}else if(type == 'xgPlayHdgz'){
					this.imgList.xgPlayHdgz.val[0] = response.data.url;
					this.$refs.xgPlayHdgz.img = response.data.url
				}else if(type == 'xgPlayCz'){
					this.imgList.xgPlayCz.val[0] = response.data.url;
					this.$refs.xgPlayCz.img = response.data.url
				}else if(type == 'xgPlayHzBanner'){
					this.imgList.xgPlayHzBanner.val[0] = response.data.url;
					this.$refs.xgPlayHzBanner.img = response.data.url
				}else if(type == 'xgPlayHzLogo'){
					this.imgList.xgPlayHzLogo.val[0] = response.data.url;
					this.$refs.xgPlayHzLogo.img = response.data.url
				}else if(type == 'xgPlayHzLogoBack'){
					this.imgList.xgPlayHzLogoBack.val[0] = response.data.url;
					this.$refs.xgPlayHzLogoBack.img = response.data.url
				}else if(type == 'xgPlaySwiper'){
					this.imgList.xgPlaySwiper.val.push(response.data.url)
				}
			},
			submitForm() {
				var that = this
				var data = this.imgList;
				data = qs.stringify(this.imgList)
				this.$axios({
					method: "POST",
					url: '/savedata',
					data: data,
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					}
				}).then(function(res) {
					that.$message('保存成功');
				});
			}
		},
		components:{ 
			swiper,
			swiperSlide,
			videoPlayer,
			upload,
			switchTem
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
			var that = this;
			this.$axios.get('/static/day.json').then((response)=>{
				 that.DayList = response.data
			})
			 this.$axios.get('/static/img.json').then((response)=>{
				 this.imgList = response.data
			 })
			// this.$axios.get('/getdata').then((response)=>{
			// 	 that.imgList = response.data.data
			// 	 console.log(this.imgList.xgPlayTitle.isShow)
			// 	 that.complete = true;
			// })
			 
		}
    }
</script>
<style scoped>
	
	@import '../assets/css/index.css'
	
</style>