webpackJsonp([1],{CH82:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i("OMN4"),s=i.n(o),a={isweixin:function(){if("micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i))return!0},wxRegister:function(e){var t=Qs.stringify({reqUrl:window.location.href});s.a.post("/php/getToken.php",t,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){e=Qs.parse(e.data),wx.config({debug:!1,appId:e.appId,timestamp:e.timestamp,nonceStr:e.nonceStr,signature:e.signature,jsApiList:["updateAppMessageShareData","updateTimelineShareData"]})}).catch(function(e){console.log(e)}),wx.ready(function(t){e&&e()})},ShareTimeline:function(e){wx.updateTimelineShareData({title:e.title,link:e.link,imgUrl:e.imgUrl,success:function(){e.success()},cancel:function(){e.error()}})},ShareAppMessage:function(e){wx.updateAppMessageShareData({title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl,success:function(){e.success()},cancel:function(){e.error()}})}},r={name:"Index",data:function(){return{complete:!1,DayIndex:1,DayList:[],imgList:[],swiperOption:{autoplay:!0,speed:1e3},swiperOptionForMedia:{autoplay:!0,speed:1e3},playerOptions:[],menuTop:!1,index:1,offsetTop:0,screenWidth:0,Imgcomplete:!1,goWhere:"what",isRouterChange:"mob",menuTopHeight:40}},methods:{CplayerPlay:function(e,t){"swiper"==t&&this.swiper.autoplay.stop()},CplayerPause:function(e,t){},changeDay:function(e){this.DayIndex=e},imgLoad:function(){this.Imgcomplete=!0,this.menuTopHeight=document.querySelector("#topMennuFormobBox").clientHeight,console.log(this.menuTopHeight)},handleScroll:function(){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,t=document.querySelector("#topMennuFormobBox").offsetTop;0==document.querySelector("#topMennuFormobBox").clientHeight&&(document.querySelector("#topMennuFormobBox").style.height=this.menuTopHeight+"px"),this.menuTop=e>=t;var i=document.querySelector("#what").offsetTop-28,o=document.querySelector("#where").offsetTop-28,s=document.querySelector("#who").offsetTop-28;if(e>i&&e<o&&"what"!=this.goWhere?this.goWhere="what":e>o&&e<s&&"where"!=this.goWhere?this.goWhere="where":e>s&&"who"!=this.goWhere&&(this.goWhere="who"),e>document.querySelector("#what").offsetTop-28&&this.playerTop.pause(),this.imgList.xgPlayMedias.isShow){var a=document.querySelector("#videoBottom").clientHeight+document.querySelector("#bannerAndLogo").clientHeight;e<document.querySelector("#videoBottom").offsetTop-document.querySelector("#videoBottom").clientHeight-a&&(this.player0.pause(),this.player1.pause(),this.player2.pause())}},goTicket:function(){window.location.href="https://traveldetail.fliggy.com/item.htm?id=596217589260"},goRule:function(){window.removeEventListener("scroll",this.handleScroll),this.$router.push({path:"/rule"})},goPoint:function(e){var t;this.goWhere=e,"what"==e?t=document.querySelector("#topMennuFormobBox"):"where"==e?t=document.querySelector("#where"):"who"==e&&(t=document.querySelector("#who"));var i=t.offsetTop;"what"==e&&(i=document.querySelector("#topMennuFormobBox").offsetTop+document.querySelector("#what").offsetTop);this.offsetTop=i;this._isMobile()?(console.log("手机端"),this.scrollEvent(e)):(console.log("PC端"),this.scrollEvent(e))},scrollEvent:function(e){if(this._isMobile()){if("what"==e)document.getElementById("what").scrollIntoView(!0);else if("where"==e){document.getElementById("where").scrollIntoView(!0)}else if("who"==e){document.getElementById("who").scrollIntoView(!0)}}else{document.documentElement.scrollTop;window.scrollTo(0,this.offsetTop)}},_isMobile:function(){return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)},wxRegCallback:function(){this.wxShareTimeline(),this.wxShareAppMessage()},wxShareTimeline:function(){var e={title:"2019西瓜PLAY视频嘉年华",link:window.location.href,imgUrl:"https://xgh5.someet.cc/logo-xigua.png"};a.ShareTimeline(e)},wxShareAppMessage:function(){var e={title:"2019西瓜PLAY视频嘉年华",desc:"一艘承载数千创作人的神奇方舟，一个用58天建造的海上世界。8.22-8.26 五天四夜邮轮嘉年华之旅等你来！",link:window.location.href,imgUrl:"https://xgh5.someet.cc/logo-xigua.png"};a.ShareAppMessage(e)}},watch:{$route:function(e,t){"/rule"==e.path&&window.removeEventListener("scroll",this.handleScroll),"/mob"==e.path&&window.addEventListener("scroll",this.handleScroll)}},computed:{player0:function(){return this.$refs.videoPlayerBottom0.player},player1:function(){return this.$refs.videoPlayerBottom1.player},player2:function(){return this.$refs.videoPlayerBottom2.player},playerTop:function(){return this.$refs.videoPlayerTop.player},swiper:function(){return this.$refs.videoSwiper.swiper}},mounted:function(){var e=this;"Rule"==this.$route.name&&(this.isRouterChange="rule"),"Mob"==this.$route.name&&(this.isRouterChange="mob");var t=this;this.$axios.get("/static/img.json").then(function(i){t.imgList=i.data,t.complete=!0,e.$nextTick(function(){t.screenWidth=e.$refs.main.clientWidth?e.$refs.main.clientWidth:"414";var i=e.screenWidth-20;document.getElementById("goTicket").style.right="calc(50% - "+i/2+"px)";var o=document.documentElement.clientHeight;document.querySelector("#topMennuFormobBox").style.top="auto",document.querySelector("#topMennuFormobBox").style.bottom=.01*o+"px"}),window.onresize=function(){e.$nextTick(function(){t.screenWidth=e.$refs.main.clientWidth;var i=e.screenWidth-20;document.getElementById("goTicket").style.right="calc(50% - "+i/2+"px)"})}}),this.$nextTick(function(){window.addEventListener("scroll",this.handleScroll)}),a.isweixin()&&a.wxRegister(this.wxRegCallback)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)}},n={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{directives:[{name:"show",rawName:"v-show",value:1==e.complete,expression:"complete == true"}],staticClass:"loadingPage"},[i("h2",[e._v("Loading")])]),e._v(" "),1==e.complete?i("div",{ref:"main",staticClass:"main"},[i("div",{staticClass:"imgBox"},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.imgList.xgPlayTitle.isShow,expression:"imgList.xgPlayTitle.isShow"}],staticClass:"imgBoxImg relativeBox",staticStyle:{position:"relative"},attrs:{id:"menuBox"}},[i("img",{attrs:{src:e.imgList.xgPlayTitle.val[0],alt:"",width:"100%"},on:{load:e.imgLoad}}),e._v(" "),e._m(0),e._v(" "),i("div",{ref:"topMennuFormobBox",staticStyle:{position:"absolute"},attrs:{id:"topMennuFormobBox"}},[i("div",{class:e.menuTop?"fixedMenu":"relativeMenu",staticStyle:{"max-width":"700px"},attrs:{id:"topMennuFormob"}},[i("div",{staticStyle:{width:"100%",position:"relative"}},[i("img",{directives:[{name:"show",rawName:"v-show",value:"who"==e.goWhere,expression:"goWhere == 'who'"}],ref:"imgHeight",attrs:{id:"imgHeight",src:"https://xgh5.someet.cc/who.png",alt:"",width:"100%"}}),e._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:"where"==e.goWhere,expression:"goWhere == 'where'"}],attrs:{src:"https://xgh5.someet.cc/where.png",alt:"",width:"100%"}}),e._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:"what"==e.goWhere,expression:"goWhere == 'what'"}],attrs:{src:"https://xgh5.someet.cc/what.png",alt:"",width:"100%"}}),e._v(" "),i("div",{staticClass:"menu-list-mob",staticStyle:{position:"absolute",opacity:"0"}},[i("span",{staticStyle:{width:"calc(100% / 3)"},on:{click:function(t){return e.goPoint("what")}}}),e._v(" "),i("span",{staticStyle:{width:"calc(100% / 3)"},on:{click:function(t){return e.goPoint("where")}}}),e._v(" "),i("span",{staticStyle:{width:"calc(100% / 3)"},on:{click:function(t){return e.goPoint("who")}}})])])])])]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.imgList.xgPlayVideoTop.isShow&&1==e.Imgcomplete,expression:"imgList.xgPlayVideoTop.isShow && Imgcomplete==true"}],staticClass:"imgBoxImg relativeBox"},[i("img",{attrs:{src:e.imgList.xgPlayVideoTop.img,alt:"",width:"100%"}}),e._v(" "),i("div",{staticClass:"videoBox1"},[i("video-player",{ref:"videoPlayerTop",staticClass:"video-player vjs-custom-skin",attrs:{playsinline:!0,options:e.imgList.xgPlayVideoTop.options},on:{play:function(t){return e.CplayerPlay(t,"top")},pause:function(t){return e.CplayerPause(t,"top")}}})],1)]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.imgList.xgPlayWhat.isShow,expression:"imgList.xgPlayWhat.isShow"}],staticClass:"imgBoxImg relativeBox",attrs:{id:"what"}},[i("img",{attrs:{src:e.imgList.xgPlayWhat.val[0],alt:"",width:"100%"}})]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.imgList.xgPlayWhere.isShow,expression:"imgList.xgPlayWhere.isShow"}],staticClass:"imgBoxImg",attrs:{id:"where"}},[i("img",{attrs:{src:e.imgList.xgPlayWhere.val[0],alt:"",width:"100%"}})]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.imgList.xgPlayWho.isShow,expression:"imgList.xgPlayWho.isShow"}],staticClass:"imgBoxImg",staticStyle:{position:"relative"},attrs:{id:"who"}},[i("img",{attrs:{src:e.imgList.xgPlayWho.val[0],alt:"",width:"100%"}}),e._v(" "),i("router-link",{attrs:{to:"/rule"}},[i("div",{staticClass:"ruleBox"})])],1),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.imgList.xgPlayBanner.isShow,expression:"imgList.xgPlayBanner.isShow"}],staticClass:"imgBoxImg"},[e.imgList.xgPlaySwiper?i("div",{directives:[{name:"show",rawName:"v-show",value:e.imgList.xgPlaySwiper.isShow,expression:"imgList.xgPlaySwiper.isShow"}],staticClass:"swiper1"},[i("swiper",{staticStyle:{height:"100%"},attrs:{options:e.swiperOption}},e._l(e.imgList.xgPlaySwiper.val,function(e,t){return i("swiper-slide",{key:t,staticClass:"swiper1-video"},[i("img",{attrs:{src:e,alt:"",width:"100%"}})])}),1)],1):e._e()]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.imgList.xgPlayMedias.isShow&&1==e.Imgcomplete,expression:"imgList.xgPlayMedias.isShow  && Imgcomplete==true"}],staticClass:"imgBoxImg relativeBox",attrs:{id:"videoBottom"}},[i("img",{attrs:{src:"https://img.someet.cc/video.jpg",alt:"",width:"100%"}}),e._v(" "),1==e.complete?i("div",{directives:[{name:"show",rawName:"v-show",value:e.imgList.xgPlayMedias.isShow,expression:"imgList.xgPlayMedias.isShow"}],staticClass:"swiper2"},[i("swiper",{ref:"videoSwiper",staticStyle:{height:"100%"},attrs:{options:e.swiperOptionForMedia}},[i("swiper-slide",{staticClass:"swiper1-video"},[i("video-player",{ref:"videoPlayerBottom0",staticClass:"video-player vjs-custom-skin",attrs:{playsinline:!0,options:e.imgList.xgPlayMedias.options[0]},on:{play:function(t){return e.CplayerPlay(t,"swiper")},pause:function(t){return e.CplayerPause(t,"swiper")}}})],1),e._v(" "),i("swiper-slide",{staticClass:"swiper1-video"},[i("video-player",{ref:"videoPlayerBottom1",staticClass:"video-player vjs-custom-skin",attrs:{playsinline:!0,options:e.imgList.xgPlayMedias.options[1]},on:{play:function(t){return e.CplayerPlay(t,"swiper")},pause:function(t){return e.CplayerPause(t,"swiper")}}})],1),e._v(" "),i("swiper-slide",{staticClass:"swiper1-video"},[i("video-player",{ref:"videoPlayerBottom2",staticClass:"video-player vjs-custom-skin",attrs:{playsinline:!0,options:e.imgList.xgPlayMedias.options[2]},on:{play:function(t){return e.CplayerPlay(t,"swiper")},pause:function(t){return e.CplayerPause(t,"swiper")}}})],1)],1)],1):e._e()]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.imgList.xgPlayHzLogo.isShow,expression:"imgList.xgPlayHzLogo.isShow"}],staticClass:"imgBoxImg",staticStyle:{"margin-top":"-2px"},attrs:{id:"bannerAndLogo"}},[i("img",{attrs:{src:e.imgList.xgPlayHzLogo.val[0],alt:"",width:"100%"}})]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:1==e.Imgcomplete,expression:"Imgcomplete==true"}],staticClass:"goTicket",attrs:{id:"goTicket"},on:{click:e.goTicket}},[i("img",{attrs:{src:"https://xgh5.someet.cc/goTicket.png",width:"100%",alt:""}})])])]):e._e(),e._v(" "),i("router-view")],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"slideBox"},[t("div",{staticClass:"slideBoxList"},[t("div",{staticClass:"chevron",staticStyle:{position:"absolute"}}),this._v(" "),t("div",{staticClass:"chevron"}),this._v(" "),t("div",{staticClass:"chevron"}),this._v(" "),t("div",{staticClass:"chevron"})])])}]};var l=i("C7Lr")(r,n,!1,function(e){i("rkqa"),i("oOi8")},"data-v-495abf8f",null);t.default=l.exports},oOi8:function(e,t){},rkqa:function(e,t){}});
//# sourceMappingURL=1.7e7c932273aa77eb7354.js.map