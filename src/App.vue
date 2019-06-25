<template>
  <div id="app">
		<div id='blankText'>
			西瓜PLAY视频嘉年华是西瓜视频年度最大规模的线下品牌活动，是国内视频行业最全面、最先锋、最有趣的嘉年华盛会，也是链接行业、创作人与用户的桥梁。
			2019年西瓜PLAY全面升级——海上邮轮嘉年华，8月22日-8月26日，将满载数千名视频创作人、明星大咖、行业领袖在上海起航。
			「2019 西瓜PLAY」与首席共创伙伴「福特领界」一起驾着「创作人方舟，领你看世界」！
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
</style>
