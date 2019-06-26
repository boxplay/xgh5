<template>
	<div class="main" ref='main'>
		<div v-if="imgLoad" class='loadingPage'>
			<h2>Loading</h2>
		</div>
		<div class="imgBoxImg normalDiv">
			<div id='ruleBox'>
				<img style="display: block;" src="https://xgh5.someet.cc/rule_back.jpeg" alt="" width="100%">
			</div>
			<div id='ruleBoxWhite'>
				<img style="display: block;" src="https://xgh5.someet.cc/white_back.png" alt="" width="100%">
			</div>
			<div id="ruleBoxImgDiv">
				<img style="display: block;" @load="imageLoaded" src="https://xgh5.someet.cc/rule_text.png" alt="" width="100%">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				imgLoad:true,
			}
		},
		methods:{
			imageLoaded(){
				this.imgLoad = false;
			}
		},
		mounted() {
			var that = this;
			this.$nextTick(function(){
				that.imageLoaded()
			})
			this.$router.afterEach((to, from, next) => {
				window.scrollTo(0, 0)
			})
		}
	}
</script>

<style scoped>
	.main{
		width: 100%;
		max-width: 700px;
		margin: 0 auto;
	}
	#ruleBox{
		position: absolute;
		left:0;
		right:0;
		margin: 0 auto;
	}
	#ruleBoxWhite{
		position: absolute;
		left:0;
		right:0;
		margin: 0 auto;
		margin: 3%;
	}
	#ruleBoxImgDiv{
		position: absolute;
		left:0;
		right:0;
		margin: 0 auto;
		margin: 8%;
	}
</style>
