webpackJsonp([0],{"8idN":function(e,t){},CH82:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i("X1H5"),a=i.n(o),s=i("OMN4"),n=i.n(s),r={isweixin:function(){if("micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i))return!0},wxRegister:function(e){var t=Qs.stringify({reqUrl:window.location.href});n.a.post("/php/getToken.php",t,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){e=Qs.parse(e.data),a.a.config({debug:!1,appId:e.appId,timestamp:e.timestamp,nonceStr:e.nonceStr,signature:e.signature,jsApiList:["updateAppMessageShareData","updateTimelineShareData"]})}).catch(function(e){console.log(e)}),a.a.ready(function(t){e&&e()})},ShareTimeline:function(e){a.a.updateTimelineShareData({title:e.title,link:e.link,imgUrl:e.imgUrl,success:function(){e.success()},cancel:function(){e.error()}})},ShareAppMessage:function(e){a.a.updateAppMessageShareData({title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl,success:function(){e.success()},cancel:function(){e.error()}})}};function c(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var l={name:"Index",data:function(){var e,t=this;return{daySelect:0,complete:!1,DayList:[],imgList:[],swiperOption:{autoplay:!0,speed:1e3},swiperOptionForBanner:{autoplay:!1,speed:2e3},swiperOptionForMedia:(e={autoplay:!1,speed:1e3,effect:"coverflow",slidesPerView:3,centeredSlides:!0,initialSlide:2,loop:!1},c(e,"slidesPerView","auto"),c(e,"slideToClickedSlide",!1),c(e,"coverflowEffect",{rotate:0,stretch:-40,depth:200,modifier:2,slideShadows:!0}),c(e,"on",{slideChangeTransitionEnd:function(){t.stopVideo()}}),e),playerOptions:[],menuTop:!1,index:1,offsetTop:0,screenWidth:0,Imgcomplete:!1,goWhere:"what",isPlayTop:0,videoPlayIndex:""}},methods:{stopVideo:function(){this.player0.pause(),this.player1.pause(),this.player2.pause(),this.player3.pause(),this.player4.pause()},CplayerPlay:function(e,t){"swiper"==t&&this.swiper.autoplay.stop()},CplayerPause:function(e,t){},onPlayerEnded:function(e){this.videoPlayIndex=""},playerStateChanged:function(e){console.log("playing")},playVideo:function(e,t){console.log("开始播放",t+"-----"+e),this.isPlayTop?(this.isPlayTop=0,this.playerTop.pause(),this.player0.pause(),this.player1.pause(),this.player2.pause(),this.player3.pause(),this.player4.pause()):(this.isPlayTop=1,"top"==e?(this.playerTop.play(),this.player0.pause(),this.player1.pause(),this.player2.pause(),this.player3.pause(),this.player4.pause()):"bottom"==e&&(this.videoPlayIndex=t,this.playerTop.pause(),this.swiper.autoplay.stop(),0==t?(this.player0.play(),this.player1.pause(),this.player2.pause(),this.player3.pause(),this.player4.pause()):1==t?(this.player0.pause(),this.player1.play(),this.player2.pause(),this.player3.pause(),this.player4.pause()):2==t?(this.player0.pause(),this.player1.pause(),this.player2.play(),this.player3.pause(),this.player4.pause()):3==t?(this.player0.pause(),this.player1.pause(),this.player2.pause(),this.player3.play(),this.player4.pause()):4==t&&(this.player0.pause(),this.player1.pause(),this.player2.pause(),this.player3.pause(),this.player4.play())))},changeDay:function(e){this.daySelect=e,console.log(this.daySelect)},imgLoad:function(){this.Imgcomplete=!0,this.getSwiperHeight()},handleScroll:function(){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,t=document.querySelector("#topMennuFormobBox").offsetTop;this.menuTop=e>t;var i=document.querySelector("#mob-what_pc").offsetTop-28,o=document.querySelector("#mob-where_pc").offsetTop-28,a=document.querySelector("#mob-who_pc").offsetTop-28;if(e>i&&e<o&&"what"!=this.goWhere?this.goWhere="what":e>o&&e<a&&"where"!=this.goWhere?this.goWhere="where":e>a&&"who"!=this.goWhere&&(this.goWhere="who"),e>document.querySelector("#mob-what_pc").offsetTop&&this.playerTop.pause(),this.imgList.xgPlayMedias.isShow){var s=document.querySelector("#videoBottom").clientHeight;e<document.querySelector("#videoBottom").offsetTop-document.querySelector("#videoBottom").clientHeight-s&&(this.player0.pause(),this.player1.pause(),this.player2.pause(),this.player3.pause(),this.player4.pause())}},goTicket:function(){window.location.href="https://traveldetail.fliggy.com/item.htm?id=596217589260"},goPoint:function(e){var t;this.goWhere=e,"what"==e?t=document.querySelector("#mob-what_pc"):"where"==e?t=document.querySelector("#mob-where_pc"):"who"==e&&(t=document.querySelector("#mob-who_pc"));var i=t.offsetTop;this.offsetTop=i-28;this._isMobile(),this.scrollEvent(e)},goRule:function(){window.location.href="https://d.toutiao.com/k99/"},scrollEvent:function(e){if(this._isMobile()){if(console.log(e),"what"==e)document.getElementById("mob-what_pc").scrollIntoView(!0);else if("where"==e){document.getElementById("mob-where_pc").scrollIntoView(!0)}else if("who"==e){document.getElementById("mob-who_pc").scrollIntoView(!0)}}else{document.documentElement.scrollTop;window.scrollTo(0,this.offsetTop)}},_isMobile:function(){return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)},isIOS:function(){return isApp()&&navigator.userAgent.indexOf("iOS")>-1},isInIOS:function(){return!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)},wxRegCallback:function(){this.wxShareTimeline(),this.wxShareAppMessage()},wxShareTimeline:function(){var e={title:"2019西瓜PLAY视频嘉年华",link:window.location.href,imgUrl:"https://xgh5.someet.cc/logo-xigua.png"};r.ShareTimeline(e)},wxShareAppMessage:function(){var e={title:"2019西瓜PLAY视频嘉年华",desc:"一艘承载数千创作人的神奇方舟，一个用58天建造的海上世界。8.22-8.26 五天四夜邮轮嘉年华之旅等你来！",link:window.location.href,imgUrl:"https://xgh5.someet.cc/logo-xigua.png"};r.ShareAppMessage(e)},getSwiperHeight:function(){var e=this;e.$nextTick(function(){e.screenWidth=e.$refs.main.clientWidth?e.$refs.main.clientWidth:"414";var t=e.screenWidth-20;document.getElementById("goTicket").style.right="calc(50% - "+t/2+"px)",window.addEventListener("scroll",e.handleScroll),e.isInIOS()&&window.addEventListener("touchmove",e.handleScroll)})}},watch:{$route:function(e,t){"/rule"==e.path&&window.removeEventListener("scroll",this.handleScroll),"/mob"==e.path&&window.addEventListener("scroll",this.handleScroll)}},components:{},computed:{player0:function(){return this.$refs.videoPlayerBottom0.player},player1:function(){return this.$refs.videoPlayerBottom1.player},player2:function(){return this.$refs.videoPlayerBottom2.player},player3:function(){return this.$refs.videoPlayerBottom3.player},player4:function(){return this.$refs.videoPlayerBottom4.player},playerTop:function(){return this.$refs.videoPlayerTop.player},swiper:function(){return this.$refs.videoSwiper.swiper}},mounted:function(){var e=this;this.$axios.get("/static/img.json").then(function(t){e.imgList=t.data,e.complete=!0}),r.isweixin()&&(console.log("微信环境"),r.wxRegister(this.wxRegCallback))},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)}},d={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[0==e.complete?i("div",{staticClass:"loadingPage"},[e._m(0)]):e._e(),e._v(" "),1==e.complete?i("div",{ref:"main",staticClass:"mob-main relativeBox mobCss"},[i("img",{staticStyle:{display:"block"},attrs:{src:"https://xgh5.someet.cc/718-1.jpg",alt:"",width:"100%"},on:{load:e.imgLoad}}),e._v(" "),i("img",{staticStyle:{display:"block"},attrs:{src:"https://xgh5.someet.cc/718-2.jpg",alt:"",width:"100%"}}),e._v(" "),i("img",{staticStyle:{display:"block"},attrs:{src:"https://xgh5.someet.cc/718-3.jpg",alt:"",width:"100%"}}),e._v(" "),i("div",{staticClass:"mob-day-main"},[i("div",{staticClass:"mob-day-box"},[i("div",{staticClass:"mob-day-title"},[e._v("\n\t\t\t\t\t活动日程\n\t\t\t\t")]),e._v(" "),i("div",{staticClass:"mob-day-container"},[i("div",{staticClass:"mob-day-container-btn"},[i("div",{directives:[{name:"show",rawName:"v-show",value:0==e.daySelect,expression:"daySelect == 0"}]},[i("img",{attrs:{src:"https://xgh5.someet.cc/day.png",width:"100%",alt:""}})]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:1==e.daySelect,expression:"daySelect == 1"}]},[i("img",{attrs:{src:"https://xgh5.someet.cc/day.png",width:"100%",alt:""}})]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:2==e.daySelect,expression:"daySelect == 2"}]},[i("img",{attrs:{src:"https://xgh5.someet.cc/day.png",width:"100%",alt:""}})]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:3==e.daySelect,expression:"daySelect == 3"}]},[i("img",{attrs:{src:"https://xgh5.someet.cc/day.png",width:"100%",alt:""}})])]),e._v(" "),i("div",{staticClass:"mob-day-container-img"},[i("div",{staticStyle:{width:"calc(100% / 4)","box-sizing":"border-box"},on:{click:function(t){return e.changeDay(0)}}},[e._v("\n\t\t\t\t\t\t\t1\n\t\t\t\t\t\t")]),e._v(" "),i("div",{staticStyle:{width:"calc(100% / 4)","box-sizing":"border-box"},on:{click:function(t){return e.changeDay(1)}}},[e._v("\n\t\t\t\t\t\t\t2\n\t\t\t\t\t\t")]),e._v(" "),i("div",{staticStyle:{width:"calc(100% / 4)","box-sizing":"border-box"},on:{click:function(t){return e.changeDay(2)}}},[e._v("\n\t\t\t\t\t\t\t3\n\t\t\t\t\t\t")]),e._v(" "),i("div",{staticStyle:{width:"calc(100% / 4)","box-sizing":"border-box"},on:{click:function(t){return e.changeDay(3)}}},[e._v("\n\t\t\t\t\t\t\t4\n\t\t\t\t\t\t")])])]),e._v(" "),i("div",{staticClass:"mob-day-content"},[i("img",{directives:[{name:"show",rawName:"v-show",value:0==e.daySelect,expression:"daySelect == 0"}],attrs:{width:"100%",src:"https://xgh5.someet.cc/act.png",alt:""}}),e._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:1==e.daySelect,expression:"daySelect == 1"}],attrs:{width:"100%",src:"https://xgh5.someet.cc/act.png",alt:""}}),e._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:2==e.daySelect,expression:"daySelect == 2"}],attrs:{width:"100%",src:"https://xgh5.someet.cc/act.png",alt:""}}),e._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:3==e.daySelect,expression:"daySelect == 3"}],attrs:{width:"100%",src:"https://xgh5.someet.cc/act.png",alt:""}})])])]),e._v(" "),i("img",{staticStyle:{display:"block"},attrs:{src:"https://xgh5.someet.cc/718-4.jpg",alt:"",width:"100%"}}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:1==e.Imgcomplete,expression:"Imgcomplete==true"}],staticClass:"mob-slideBox"},[e._m(1)]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:1==e.complete&&1==e.Imgcomplete,expression:"complete==true &&  Imgcomplete==true"}],ref:"topMennuFormobBox",staticStyle:{position:"absolute",top:"13%"},attrs:{id:"topMennuFormobBox"}},[i("div",{class:e.menuTop?"mob-fixedMenu":"mob-relativeMenu",staticStyle:{"max-width":"700px"},attrs:{id:"topMennuFormob"}},[i("div",{staticStyle:{width:"100%",position:"relative"}},[i("img",{directives:[{name:"show",rawName:"v-show",value:"who"==e.goWhere,expression:"goWhere == 'who'"}],ref:"imgHeight",attrs:{id:"imgHeight",src:"https://xgh5.someet.cc/who.png",alt:"",width:"100%"}}),e._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:"where"==e.goWhere,expression:"goWhere == 'where'"}],attrs:{src:"https://xgh5.someet.cc/where.png",alt:"",width:"100%"}}),e._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:"what"==e.goWhere,expression:"goWhere == 'what'"}],attrs:{src:"https://xgh5.someet.cc/what.png",alt:"",width:"100%"}}),e._v(" "),i("div",{staticClass:"mob-menu-list-mob-pc",staticStyle:{position:"absolute",opacity:"0",top:"-9%"}},[i("span",{staticStyle:{width:"calc(100% / 3)"},on:{click:function(t){return e.goPoint("what")}}},[e._v("\n\t\t\t\t\t\t\t玩什么\n\t\t\t\t\t\t")]),e._v(" "),i("span",{staticStyle:{width:"calc(100% / 3)"},on:{click:function(t){return e.goPoint("where")}}},[e._v("\n\t\t\t\t\t\t\t在哪玩\n\t\t\t\t\t\t")]),e._v(" "),i("span",{staticStyle:{width:"calc(100% / 3)"},on:{click:function(t){return e.goPoint("who")}}},[e._v("\n\t\t\t\t\t\t\t跟谁玩\n\t\t\t\t\t\t")])])])])]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.imgList.xgPlayVideoTop.isShow&&1==e.Imgcomplete&&1==e.complete,expression:"imgList.xgPlayVideoTop.isShow && Imgcomplete==true && complete==true"}],staticClass:"mob-imgBoxImg_pc"},[i("div",{staticClass:"videoBox1",on:{click:function(t){return e.playVideo("top",0)}}},[i("div",{staticClass:"vPage",staticStyle:{position:"absolute"},attrs:{id:"vPage"}}),e._v(" "),i("video-player",{ref:"videoPlayerTop",staticClass:"video-player vjs-custom-skin",attrs:{id:"mob-imgBoxImg_pc",playsinline:!0,options:e.imgList.xgPlayVideoTop.options},on:{play:function(t){return e.CplayerPlay(t,"top")},pause:function(t){return e.CplayerPause(t,"top")}}})],1)]),e._v(" "),i("div",{staticClass:"mob-positionLine",attrs:{id:"mob-what_pc"}},[e._v("\n\t\t\t这是分界线\n\t\t")]),e._v(" "),i("div",{staticClass:"mob-positionLine",attrs:{id:"mob-where_pc"}},[e._v("\n\t\t\t这是分界线\n\t\t")]),e._v(" "),i("div",{staticClass:"mob-positionLine",attrs:{id:"mob-who_pc"}},[e._v("\n\t\t\t这是分界线\n\t\t")]),e._v(" "),i("div",{staticClass:"mob-positionBlock",attrs:{id:"mob-rule_pc"},on:{click:e.goRule}},[e._v("\n\t\t\t这是分界线\n\t\t")]),e._v(" "),i("div",{staticClass:"mob-banner-div"},[i("div",{staticClass:"mob-banner-swiper"},[1==e.complete?i("swiper",{ref:"BannerSwiper",attrs:{id:"BannerSwiper",options:e.swiperOptionForBanner}},[i("swiper-slide",{staticClass:"swiper1-video"},[i("img",{attrs:{src:"https://xgh5.someet.cc/xgposter.jpg",width:"100%",alt:""}})]),e._v(" "),i("swiper-slide",{staticClass:"swiper1-video"},[i("img",{attrs:{src:"https://xgh5.someet.cc/xgposter.jpg",width:"100%",alt:""}})])],1):e._e()],1)]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.imgList.xgPlayMedias.isShow&&1==e.Imgcomplete&&1==e.complete,expression:"imgList.xgPlayMedias.isShow  && Imgcomplete==true && complete == true"}],staticClass:"imgBoxImg relativeBox",attrs:{id:"videoBottom"}},[1==e.complete?i("div",{directives:[{name:"show",rawName:"v-show",value:e.imgList.xgPlayMedias.isShow,expression:"imgList.xgPlayMedias.isShow"}],staticClass:"swiper2"},[e.imgList.xgPlayMedias.isShow&&1==e.complete?i("swiper",{ref:"videoSwiper",attrs:{id:"videoSwiper",options:e.swiperOptionForMedia}},[i("swiper-slide",{staticClass:"swiper1-video"},[i("div",{staticClass:"videoBox1",on:{click:function(t){return e.playVideo("bottom",0)}}},[i("div",{staticClass:"vPage",staticStyle:{position:"absolute"},attrs:{id:"vPage"}},[i("div",{class:0===e.videoPlayIndex?"videoPage videoPageHide":"videoPage"},[e._v("\n\t\t\t\t\t\t\t\t\t"+e._s(e.imgList.xgPlayMedias.title[0])+"\n\t\t\t\t\t\t\t\t")])]),e._v(" "),i("div",{staticClass:"videoBackBox"},[i("img",{attrs:{src:"https://xgh5planb.someet.cc/videoBack.png",alt:"",width:"100%"}})]),e._v(" "),i("div",{staticClass:"video-vue-box"},[i("video-player",{ref:"videoPlayerBottom0",staticClass:"video-player vjs-custom-skin smallVideo",attrs:{id:"mob-imgBoxImg_pc",playsinline:!0,options:e.imgList.xgPlayMedias.options[0]},on:{play:function(t){return e.CplayerPlay(t,"top")},pause:function(t){return e.CplayerPause(t,"top")},ended:function(t){return e.onPlayerEnded(t)}}})],1)])]),e._v(" "),i("swiper-slide",{staticClass:"swiper1-video"},[i("div",{staticClass:"videoBox1",on:{click:function(t){return e.playVideo("bottom",1)}}},[i("div",{staticClass:"vPage",staticStyle:{position:"absolute"},attrs:{id:"vPage"}},[i("div",{class:1===e.videoPlayIndex?"videoPage videoPageHide":"videoPage"},[e._v("\n\t\t\t\t\t\t\t\t\t"+e._s(e.imgList.xgPlayMedias.title[1])+"\n\t\t\t\t\t\t\t\t")])]),e._v(" "),i("div",{staticClass:"videoBackBox"},[i("img",{attrs:{src:"https://xgh5planb.someet.cc/videoBack.png",alt:"",width:"100%"}})]),e._v(" "),i("div",{staticClass:"video-vue-box"},[i("video-player",{ref:"videoPlayerBottom1",staticClass:"video-player vjs-custom-skin smallVideo",attrs:{id:"mob-imgBoxImg_pc",playsinline:!0,options:e.imgList.xgPlayMedias.options[1]},on:{play:function(t){return e.CplayerPlay(t,"top")},pause:function(t){return e.CplayerPause(t,"top")},ended:function(t){return e.onPlayerEnded(t)}}})],1)])]),e._v(" "),i("swiper-slide",{staticClass:"swiper1-video"},[i("div",{staticClass:"videoBox1",on:{click:function(t){return e.playVideo("bottom",2)}}},[i("div",{staticClass:"vPage",staticStyle:{position:"absolute"},attrs:{id:"vPage"}},[i("div",{class:2===e.videoPlayIndex?"videoPage videoPageHide":"videoPage"},[e._v("\n\t\t\t\t\t\t\t\t\t"+e._s(e.imgList.xgPlayMedias.title[2])+"\n\t\t\t\t\t\t\t\t")])]),e._v(" "),i("div",{staticClass:"videoBackBox"},[i("img",{attrs:{src:"https://xgh5planb.someet.cc/videoBack.png",alt:"",width:"100%"}})]),e._v(" "),i("div",{staticClass:"video-vue-box"},[i("video-player",{ref:"videoPlayerBottom2",staticClass:"video-player vjs-custom-skin smallVideo",attrs:{id:"mob-imgBoxImg_pc",playsinline:!0,options:e.imgList.xgPlayMedias.options[2]},on:{play:function(t){return e.CplayerPlay(t,"top")},pause:function(t){return e.CplayerPause(t,"top")},ended:function(t){return e.onPlayerEnded(t)}}})],1)])]),e._v(" "),i("swiper-slide",{staticClass:"swiper1-video"},[i("div",{staticClass:"videoBox1",on:{click:function(t){return e.playVideo("bottom",3)}}},[i("div",{staticClass:"vPage",staticStyle:{position:"absolute"},attrs:{id:"vPage"}},[i("div",{class:3===e.videoPlayIndex?"videoPage videoPageHide":"videoPage"},[e._v("\n\t\t\t\t\t\t\t\t\t"+e._s(e.imgList.xgPlayMedias.title[3])+"\n\t\t\t\t\t\t\t\t")])]),e._v(" "),i("div",{staticClass:"videoBackBox"},[i("img",{attrs:{src:"https://xgh5planb.someet.cc/videoBack.png",alt:"",width:"100%"}})]),e._v(" "),i("div",{staticClass:"video-vue-box"},[i("video-player",{ref:"videoPlayerBottom3",staticClass:"video-player vjs-custom-skin smallVideo",attrs:{id:"mob-imgBoxImg_pc",playsinline:!0,options:e.imgList.xgPlayMedias.options[3]},on:{play:function(t){return e.CplayerPlay(t,"top")},pause:function(t){return e.CplayerPause(t,"top")},ended:function(t){return e.onPlayerEnded(t)}}})],1)])]),e._v(" "),i("swiper-slide",{staticClass:"swiper1-video"},[i("div",{staticClass:"videoBox1",on:{click:function(t){return e.playVideo("bottom",4)}}},[i("div",{staticClass:"vPage",staticStyle:{position:"absolute"},attrs:{id:"vPage"}},[i("div",{class:4===e.videoPlayIndex?"videoPage videoPageHide":"videoPage"},[e._v("\n\t\t\t\t\t\t\t\t\t"+e._s(e.imgList.xgPlayMedias.title[4])+"\n\t\t\t\t\t\t\t\t")])]),e._v(" "),i("div",{staticClass:"videoBackBox"},[i("img",{attrs:{src:"https://xgh5planb.someet.cc/videoBack.png",alt:"",width:"100%"}})]),e._v(" "),i("div",{staticClass:"video-vue-box"},[i("video-player",{ref:"videoPlayerBottom4",staticClass:"video-player vjs-custom-skin smallVideo",attrs:{id:"mob-imgBoxImg_pc",playsinline:!0,options:e.imgList.xgPlayMedias.options[4]},on:{play:function(t){return e.CplayerPlay(t,"top")},pause:function(t){return e.CplayerPause(t,"top")},ended:function(t){return e.onPlayerEnded(t)}}})],1)])])],1):e._e()],1):e._e()])]):e._e(),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:1==e.Imgcomplete,expression:"Imgcomplete==true"}],staticClass:"goTicket",attrs:{id:"goTicket"},on:{click:e.goTicket}},[i("img",{attrs:{src:"https://xgh5.someet.cc/goTicket.png",width:"100%",alt:""}})])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"xiguaCircle"},[t("img",{attrs:{src:"https://xgh5.someet.cc/loading.jpg",alt:"",width:"100%;"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mob-slideBoxList"},[t("div",{staticClass:"mob-chevron",staticStyle:{position:"absolute"}}),this._v(" "),t("div",{staticClass:"mob-chevron"}),this._v(" "),t("div",{staticClass:"mob-chevron"}),this._v(" "),t("div",{staticClass:"mob-chevron"})])}]};var p=i("C7Lr")(l,d,!1,function(e){i("paCA"),i("8idN")},"data-v-0c0a871c",null);t.default=p.exports},X1H5:function(e,t){var i;i=window,e.exports=function(e,t){function i(t,i,o){e.WeixinJSBridge?WeixinJSBridge.invoke(t,a(i),function(e){n(t,e,o)}):c(t,o)}function o(t,i,o){e.WeixinJSBridge?WeixinJSBridge.on(t,function(e){o&&o.trigger&&o.trigger(e),n(t,e,i)}):c(t,o||i)}function a(e){return(e=e||{}).appId=C.appId,e.verifyAppId=C.appId,e.verifySignType="sha1",e.verifyTimestamp=C.timestamp+"",e.verifyNonceStr=C.nonceStr,e.verifySignature=C.signature,e}function s(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function n(e,t,i){"openEnterpriseChat"==e&&(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var o=t.errMsg;o||(o=t.err_msg,delete t.err_msg,o=function(e,t){var i=e,o=m[i];o&&(i=o);var a="ok";if(t){var s=t.indexOf(":");"confirm"==(a=t.substring(s+1))&&(a="ok"),"failed"==a&&(a="fail"),-1!=a.indexOf("failed_")&&(a=a.substring(7)),-1!=a.indexOf("fail_")&&(a=a.substring(5)),"access denied"!=(a=(a=a.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=a||(a="permission denied"),"config"==i&&"function not exist"==a&&(a="ok"),""==a&&(a="fail")}return t=i+":"+a}(e,o),t.errMsg=o),(i=i||{})._complete&&(i._complete(t),delete i._complete),o=t.errMsg||"",C.debug&&!i.isInnerInvoke&&alert(JSON.stringify(t));var a=o.indexOf(":");switch(o.substring(a+1)){case"ok":i.success&&i.success(t);break;case"cancel":i.cancel&&i.cancel(t);break;default:i.fail&&i.fail(t)}i.complete&&i.complete(t)}function r(e){if(e){for(var t=0,i=e.length;t<i;++t){var o=e[t],a=u[o];a&&(e[t]=a)}return e}}function c(e,t){if(!(!C.debug||t&&t.isInnerInvoke)){var i=m[e];i&&(e=i),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function l(){return(new Date).getTime()}function d(t){S&&(e.WeixinJSBridge?t():h.addEventListener&&h.addEventListener("WeixinJSBridgeReady",t,!1))}function p(){L.invoke||(L.invoke=function(t,i,o){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,a(i),o)},L.on=function(t,i){e.WeixinJSBridge&&WeixinJSBridge.on(t,i)})}if(!e.jWeixin){var u={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},m=function(){var e={};for(var t in u)e[u[t]]=t;return e}(),h=e.document,g=h.title,v=navigator.userAgent.toLowerCase(),f=navigator.platform.toLowerCase(),y=!(!f.match("mac")&&!f.match("win")),w=-1!=v.indexOf("wxdebugger"),S=-1!=v.indexOf("micromessenger"),_=-1!=v.indexOf("android"),x=-1!=v.indexOf("iphone")||-1!=v.indexOf("ipad"),P=function(){var e=v.match(/micromessenger\/(\d+\.\d+\.\d+)/)||v.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),b={initStartTime:l(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},I={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:x?1:_?2:-1,clientVersion:P,url:encodeURIComponent(location.href)},C={},k={_completes:[]},T={state:0,data:{}};d(function(){b.initEndTime=l()});var B=!1,M=[],L={config:function(e){C=e,c("config",e);var t=!1!==C.check;d(function(){if(t)i(u.config,{verifyJsApiList:r(C.jsApiList)},function(){k._complete=function(e){b.preVerifyEndTime=l(),T.state=1,T.data=e},k.success=function(e){I.isPreVerifyOk=0},k.fail=function(e){k._fail?k._fail(e):T.state=-1};var e=k._completes;return e.push(function(){!function(e){if(!(y||w||C.debug||P<"6.0.2"||I.systemType<0)){var t=new Image;I.appId=C.appId,I.initTime=b.initEndTime-b.initStartTime,I.preVerifyTime=b.preVerifyEndTime-b.preVerifyStartTime,L.getNetworkType({isInnerInvoke:!0,success:function(e){I.networkType=e.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+I.version+"&o="+I.isPreVerifyOk+"&s="+I.systemType+"&c="+I.clientVersion+"&a="+I.appId+"&n="+I.networkType+"&i="+I.initTime+"&p="+I.preVerifyTime+"&u="+I.url;t.src=i}})}}()}),k.complete=function(t){for(var i=0,o=e.length;i<o;++i)e[i]();k._completes=[]},k}()),b.preVerifyStartTime=l();else{T.state=1;for(var e=k._completes,o=0,a=e.length;o<a;++o)e[o]();k._completes=[]}}),p()},ready:function(e){0!=T.state?e():(k._completes.push(e),!S&&C.debug&&e())},error:function(e){P<"6.0.2"||(-1==T.state?e(T.data):k._fail=e)},checkJsApi:function(e){i("checkJsApi",{jsApiList:r(e.jsApiList)},(e._complete=function(e){if(_){var t=e.checkResult;t&&(e.checkResult=JSON.parse(t))}e=function(e){var t=e.checkResult;for(var i in t){var o=m[i];o&&(t[o]=t[i],delete t[i])}return e}(e)},e))},onMenuShareTimeline:function(e){o(u.onMenuShareTimeline,{complete:function(){i("shareTimeline",{title:e.title||g,desc:e.title||g,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){o(u.onMenuShareAppMessage,{complete:function(t){"favorite"===t.scene?i("sendAppMessage",{title:e.title||g,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):i("sendAppMessage",{title:e.title||g,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){o(u.onMenuShareQQ,{complete:function(){i("shareQQ",{title:e.title||g,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){o(u.onMenuShareWeibo,{complete:function(){i("shareWeiboApp",{title:e.title||g,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){o(u.onMenuShareQZone,{complete:function(){i("shareQZone",{title:e.title||g,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){i("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){i("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){i("startRecord",{},e)},stopRecord:function(e){i("stopRecord",{},e)},onVoiceRecordEnd:function(e){o("onVoiceRecordEnd",e)},playVoice:function(e){i("playVoice",{localId:e.localId},e)},pauseVoice:function(e){i("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){i("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){o("onVoicePlayEnd",e)},uploadVoice:function(e){i("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){i("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){i("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){i("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(_){var t=e.localIds;try{t&&(e.localIds=JSON.parse(t))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){i(u.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){i("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){i("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===B?(B=!0,i("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(B=!1,M.length>0){var t=M.shift();wx.getLocalImgData(t)}},e))):M.push(e)},getNetworkType:function(e){i("getNetworkType",{},(e._complete=function(e){e=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var o=t.indexOf(":"),a=t.substring(o+1);switch(a){case"wifi":case"edge":case"wwan":e.networkType=a;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){i("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},i(u.getLocation,{type:e.type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){i("hideOptionMenu",{},e)},showOptionMenu:function(e){i("showOptionMenu",{},e)},closeWindow:function(e){i("closeWindow",{},e=e||{})},hideMenuItems:function(e){i("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){i("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){i("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){i("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){i("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(x){var t=e.resultStr;if(t){var i=JSON.parse(t);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e))},openAddress:function(e){i(u.openAddress,{},(e._complete=function(e){e=function(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}(e)},e))},openProductSpecificView:function(e){i(u.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var t=e.cardList,o=[],a=0,s=t.length;a<s;++a){var n=t[a],r={card_id:n.cardId,card_ext:n.cardExt};o.push(r)}i(u.addCard,{card_list:o},(e._complete=function(e){var t=e.card_list;if(t){for(var i=0,o=(t=JSON.parse(t)).length;i<o;++i){var a=t[i];a.cardId=a.card_id,a.cardExt=a.card_ext,a.isSuccess=!!a.is_succ,delete a.card_id,delete a.card_ext,delete a.is_succ}e.cardList=t,delete e.card_list}},e))},chooseCard:function(e){i("chooseCard",{app_id:C.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var t=e.cardList,o=[],a=0,s=t.length;a<s;++a){var n=t[a],r={card_id:n.cardId,code:n.code};o.push(r)}i(u.openCard,{card_list:o},e)},consumeAndShareCard:function(e){i(u.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){i(u.chooseWXPay,s(e),e)},openEnterpriseRedPacket:function(e){i(u.openEnterpriseRedPacket,s(e),e)},startSearchBeacons:function(e){i(u.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){i(u.stopSearchBeacons,{},e)},onSearchBeacons:function(e){o(u.onSearchBeacons,e)},openEnterpriseChat:function(e){i("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){i("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&e.length>0){var t=e.split("?")[0],i=e.split("?")[1];return t+=".html",void 0!==i?t+"?"+i:t}}(e.path),envVersion:e.envVersion},e)},miniProgram:{navigateBack:function(e){e=e||{},d(function(){i("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)})},navigateTo:function(e){d(function(){i("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)})},redirectTo:function(e){d(function(){i("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)})},switchTab:function(e){d(function(){i("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)})},reLaunch:function(e){d(function(){i("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)})},postMessage:function(e){d(function(){i("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)})},getEnv:function(t){d(function(){t({miniprogram:"miniprogram"===e.__wxjs_environment})})}}},V=1,A={};return h.addEventListener("error",function(e){if(!_){var t=e.target,i=t.tagName,o=t.src;if(("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i)&&-1!=o.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var a=t["wx-id"];if(a||(a=V++,t["wx-id"]=a),A[a])return;A[a]=!0,wx.ready(function(){wx.getLocalImgData({localId:o,success:function(e){t.src=e.localData}})})}}},!0),h.addEventListener("load",function(e){if(!_){var t=e.target,i=t.tagName;if(t.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var o=t["wx-id"];o&&(A[o]=!1)}}},!0),t&&(e.wx=e.jWeixin=L),L}}(i)},paCA:function(e,t){}});
//# sourceMappingURL=0.46cf9058afd1e7da2485.js.map