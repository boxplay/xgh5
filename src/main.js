// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import router from './router'
Vue.prototype.$axios = axios
import '@/assets/css/common.css'
router.beforeEach((to, from, next) => {
	var ismobile = localStorage.getItem('ismobile');
	if(ismobile == null){
		let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)

		ismobile = flag ? 1 : 0
	}
	// 电脑
	if (ismobile == 0) {
		if (to.path != '/') {
			if(to.path == '/prule'){
				next()
			}else{
				next('/')
			}
		} else {
			next();
		}
	}
	// 手机
	if (ismobile == 1) {
		
		if (to.path != '/mob') {
			if(to.path == '/rule'){
				next()
			}else{
				next('/mob');
			}
		} else {
			next();
		}
	}
})
router.afterEach((to, from, next) => { 
    gtag('config', 'UA-100002932-38', {'page_path': to.fullPath});
});
Vue.config.productionTip = false
Vue.use(window.VueVideoPlayer)
Vue.use(window.VueAwesomeSwiper)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
