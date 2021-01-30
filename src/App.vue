<template>
  <div id="app">
		<div id='blankText'>
			西瓜 PLAY 视频嘉年华是西瓜视频年度最大规模的品牌活动，通过活动将西瓜视频站内的优质创作人和丰富内容展现给消费者，为创作人提供一个彼此交流共创的自由空间，以及和粉丝了解互动的机会。
今年的「西瓜 PLAY」全面升级为海上邮轮嘉年华，8月22日-8月26日，将满载数千名视频创作人、明星大咖、行业领袖与幸运粉丝在上海起航。
「2019 西瓜PLAY」与首席共创伙伴「福特领界」一起乘着「创作人方舟，领你看世界」！
		</div>
		<keep-alive>
			<router-view />
		</keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
	data(){
		return {
			
		}
	},
	methods:{
		_isMobile(){
			let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
			// localStorage.setItem('isiphone',flag)
			localStorage.setItem('ismobile',flag?1:0)
			return flag;
		}
	}
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#blankText{
	position: absolute;
    z-index: -1;
    width: 1px;
    height: 1px;
    overflow: hidden;
}
.scrollbar-rail > .scroll-element .scroll-bar{
	background-color: red;
}
.scrollbar-rail > .scroll-element.scroll-y .scroll-bar{
	max-height: 40px;
}
</style>
