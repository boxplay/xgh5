<template>
	<div class="main" ref='main'>
		<div class="imgBoxImg normalDiv">
			<div id='ruleBox'>
				<img src="https://xgh5.someet.cc/rule_back.jpeg" alt="" width="100%">
			</div>
			<div id='ruleBoxWhite'>
				<img src="https://xgh5.someet.cc/white_back.png" alt="" width="100%">
			</div>
			<div id="ruleBoxImgDiv">
				<img src="https://xgh5.someet.cc/rule_text.png" alt="" width="100%">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		}
	}
</script>

<style>
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
