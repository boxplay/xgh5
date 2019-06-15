<template>
	<el-form-item :label="t" prop="name" class='uploadList'>
		<el-col :span="8">
		  <!-- <el-input v-model="imgList.xgPlayTitle.val" placeholder=""></el-input> -->
		</el-col>
		<el-col :span="6" class='isShow'>
		  是否显示：<el-switch :inactive-value="0" :active-value="1" v-model="isShow" @change="changeStatus"></el-switch>
		</el-col>
	</el-form-item>
</template>

<script>
	export default {
		data(){
			return {
				isShow:1
			}
		},
		props:{
			status:[String,Number],
			t:[String],
			type:[String]
		},
		methods:{
			changeStatus(val){
				this.isShow = val
				this.$emit('changeShow',this.isShow,this.type)
			}
		},
		mounted() {
			this.isShow = Number(this.status)
			// console.log(this.t,this.status)
		},
		watch:{
			// status(val){
			// 	this.isShow = val == 'true'?true:false
			// }
		}
		
	}
</script>

<style>
</style>
