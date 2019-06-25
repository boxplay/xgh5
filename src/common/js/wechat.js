/**
* 微信js-sdk
* 参考文档：https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115
*/
import wx from 'weixin-js-sdk'
import axios from 'axios'
const wxApi = {
	isweixin () {
		const ua = window.navigator.userAgent.toLowerCase()
		if (ua.match(/MicroMessenger/i) == 'micromessenger') {
			return true
		}
	},
	/**
	* [wxRegister 微信Api初始化]
	* @param  {Function} callback [ready回调函数]
	*/
	wxRegister (callback) {
		// 这边的接口请换成你们自己的
		var data = Qs.stringify({'reqUrl':window.location.href})
		axios.post('/php/getToken.php',data, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then((res) => {
			res = Qs.parse(res.data)
			wx.config({
				debug: false, // 开启调试模式
				appId: res.appId, // 必填，公众号的唯一标识
				timestamp: res.timestamp, // 必填，生成签名的时间戳
				nonceStr: res.nonceStr, // 必填，生成签名的随机串
				signature: res.signature, // 必填，签名，见附录1
				jsApiList: [
				'updateAppMessageShareData', // 获取“分享给朋友”按钮点击状态及自定义分享内容接口
				'updateTimelineShareData' // 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
				] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
			})
		}).catch((error) => {
				console.log(error)
		})
		wx.ready((res) => {
			// 如果需要定制ready回调方法
			if (callback) {
			callback()
			}
		})
	},
	/**
	* [ShareTimeline 微信分享到朋友圈]
	* @param {[type]} option [分享信息]
	* @param {[type]} success [成功回调]
	* @param {[type]} error   [失败回调]
	*/
	ShareTimeline (option) {
		wx.updateTimelineShareData({
			title: option.title, // 分享标题
			link: option.link, // 分享链接
			imgUrl: option.imgUrl, // 分享图标
			success () {
			// 用户成功分享后执行的回调函数
			option.success()
			},
			cancel () {
			// 用户取消分享后执行的回调函数
			option.error()
			}
		})
	},
	/**
	* [ShareAppMessage 微信分享给朋友]
	* @param {[type]} option [分享信息]
	* @param {[type]} success [成功回调]
	* @param {[type]} error   [失败回调]
	*/
	ShareAppMessage (option) {
		wx.updateAppMessageShareData({
			title: option.title, // 分享标题
			desc: option.desc, // 分享描述
			link: option.link, // 分享链接
			imgUrl: option.imgUrl, // 分享图标
			success () {
			// 用户成功分享后执行的回调函数
			option.success()
			},
			cancel () {
			// 用户取消分享后执行的回调函数
			option.error()
			}
		})
	}
}
export default wxApi