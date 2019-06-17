<template>
	<div>
		<el-form-item>
			<div v-if="img && typeof(img) == 'string'">
				<div class='imgListBox'>
					<img :src="img" alt="">
					<div class="imgListBox-img">
						<span>
							<input type="text" v-model="img" class="imgInput">
						</span>
						<span @click="handleFileRemove(img,0,uploadType)" >
							删除
						</span>
					</div>
				</div>
			</div>
			<div v-if="img && (typeof(img) == 'array' || typeof(img) == 'object') ">
				<div class='imgListBox' v-for="(item,index) in img">
					<img :src="item" alt="">
					<div class="imgListBox-img">
						<span>
							<!-- {{item}} -->
							<input type="text" v-model="img[index]" class="imgInput">
						</span>
						<span @click="handleFileRemove(item,index,uploadType)" >
							删除
						</span>
					</div>
				</div>
			</div>
			<el-upload ref='xgPlayTitleUpload' class="upload-demo" action="/upload" :data="{'type':uploadType}"
			 :show-file-list="false" :on-success="uploadImage" :on-remove="handleFileRemove" list-type="picture">
			  <el-button size="small" type="primary">点击上传</el-button>
			</el-upload>
		</el-form-item>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				img:this.imgList
			}
		},
		props:{
			imgList:[String,Object,Array],
			uploadType:String
		},
		methods:{
			handleFileRemove(file,index,type){
				this.$emit('handleFileRemove',file,index,type)
			},
			uploadImage(response, file, fileList){
			
				this.$emit('uploadImage',response,file,fileList)
			}
		},
		mounted() {
		},
		watch:{
			imgList(val){
				this.img = val
			}
		}
		
	}
</script>

<style scoped>
	.imgListBox-img{
		height: 3rem;
	    /* line-height: 4rem; */
	    position: absolute;
	    bottom: -2rem;
	    width: 99%;
	    text-align: center;
	    color: rba(52,137,255);
	}
	.imgListBox-img span{
		display: block;
		overflow: hidden;
		border:1px solid black;
		height: 1.5rem;
		line-height:1.5rem ;
	}
	.imgListBox{
		width:8rem;display: inline-block;margin: 0.2rem;
		position: relative;
		margin-bottom: 3rem;
	}
	.uploadList{
		padding-top: 20px;
	}
	.imgInput{
		width: 100%;
		border:none;
		height: 100%;
		padding-left: 5px;
	}
</style>
