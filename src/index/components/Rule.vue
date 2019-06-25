<template>
	<div class="main" ref='main'>
		<div v-if="imgLoad" class='loadingPage'>
			<h2>Loading</h2>
		</div>
		<div class="imgBoxImg normalDiv">
			<div id="ruleBoxImgDiv">
				<img style="display: block;" @load="imageLoaded" src="https://xgh5.someet.cc/rule_pc.jpg" alt="" width="100%">
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
		min-width: 700px;
		margin: 0 auto;
	}
</style>
