webpackJsonp([1],{N0D2:function(t,e){},S3oN:function(t,e){},fGoN:function(t,e,i){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0});var s={name:"Index",data:function(){return{diySiwperBtnShowleft:!0,diySiwperBtnShowright:!0,complete:!1,daySelect:0,DayList:[],imgList:[],swiperOption:{autoplay:!0,speed:1e3},playerOptions:[],menuTop:!1,index:1,offsetTop:0,screenWidth:0,Imgcomplete:!1,goWhere:"what",isPlayTop:0,videoPlayIndex:"",swiperInit:!1,xgPlayMedias:{poster:"https://xgh5.someet.cc/ftposter.jpg",aspectRatio:"16:9",preload:"none",sources:[{src:"https://xgh5.someet.cc/ft.mp4",type:"video/mp4"}]}}},methods:{stopVideo:function(){this.player0.pause()},CplayerPlay:function(t,e){"swiper"==e&&this.swiper.autoplay.stop()},onPlayerEnded:function(t){this.videoPlayIndex=""},CplayerPause:function(t,e){},imgLoad:function(){this.Imgcomplete=!0,this.$nextTick(function(){$(document).ready(function(){$(".scrollbar-rail").scrollbar()})})},playVideo:function(t,e){console.log("开始播放",e+"-----"+t),this.isPlayTop?(this.videoPlayIndex="",this.isPlayTop=0,this.playerTop.pause(),this.player0.pause()):(this.isPlayTop=1,"top"==t?(this.playerTop.play(),this.player0.pause()):"bottom"==t&&(this.videoPlayIndex=e,this.playerTop.pause(),this.swiper.autoplay.stop(),0==e?this.player0.play():this.player0.pause()))},handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,e=document.querySelector("#what_pc").offsetTop-28,i=document.querySelector("#where_pc").offsetTop-28,o=document.querySelector("#who_pc").offsetTop-28;if(t>e&&t<i&&"what"!=this.goWhere?this.goWhere="what":t>i&&t<o&&"where"!=this.goWhere?this.goWhere="where":t>o&&"who"!=this.goWhere&&(this.goWhere="who"),t>document.querySelector("#what_pc").offsetTop&&this.playerTop.pause(),this.imgList.xgPlayMedias.isShow){document.querySelector("#videoBottomForPC").clientHeight;t<document.querySelector("#videoBottomForPC").offsetTop-document.querySelector("#videoBottomForPC").clientHeight-videoBottomForPC&&(this.player0.pause(),this.player1.pause(),this.player2.pause(),this.player3.pause(),this.player4.pause())}},changeDay:function(t){this.daySelect=t,console.log(this.daySelect)},goTicket:function(){window.location.href="https://traveldetail.fliggy.com/item.htm?id=596217589260"},goPoint:function(t){var e;this.goWhere=t,"what"==t?e=document.querySelector("#what_pc"):"where"==t?e=document.querySelector("#where_pc"):"who"==t&&(e=document.querySelector("#who_pc"));var i=e.offsetTop;this.offsetTop=i-28;this._isMobile()?(console.log("手机端"),this.scrollEvent(t)):(console.log("PC端"),this.scrollEvent(t))},goRule:function(){window.location.href="https://d.toutiao.com/k99/"},scrollEvent:function(t){if(this._isMobile()){if("what"==t)document.getElementById("what_pc").scrollIntoView(!0);else if("where"==t){document.getElementById("where_pc").scrollIntoView(!0)}else if("who"==t){document.getElementById("who_pc").scrollIntoView(!0)}}else{document.documentElement.scrollTop;window.scrollTo(0,this.offsetTop)}},_isMobile:function(){return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)}},components:{},computed:{player0:function(){return this.$refs.videoPlayerBottom.player},playerTop:function(){return this.$refs.videoPlayerTop.player}},mounted:function(){var t=this,e=this;this.$axios.get("/static/img.json").then(function(i){e.imgList=i.data,console.log(o(e.imgList)),e.complete=!0,e.$nextTick(function(){e.screenWidth=e.$refs.main.clientWidth?e.$refs.main.clientWidth:"414"}),window.onresize=function(){t.$nextTick(function(){e.screenWidth=e.$refs.main.clientWidth,e.screenWidth})}}),window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[0==t.complete?i("div",{staticClass:"loadingPage"},[t._m(0)]):t._e(),t._v(" "),1==t.complete?i("div",{ref:"main",staticClass:"main relativeBox",staticStyle:{"min-width":"1200px","margin-top":"5%"}},[i("img",{staticStyle:{display:"block"},attrs:{src:"https://xgh5.someet.cc/812-pc.jpg",alt:"",width:"100%"},on:{load:t.imgLoad}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.imgList.xgPlayVideoTop.isShow,expression:"imgList.xgPlayVideoTop.isShow"}],staticClass:"imgBoxImg_pc"},[i("div",{staticClass:"videoBox1"},[i("video-player",{ref:"videoPlayerTop",staticClass:"video-player vjs-custom-skin",attrs:{playsinline:!0,options:t.imgList.xgPlayVideoTop.options},on:{play:function(e){return t.CplayerPlay(e,"top")},pause:function(e){return t.CplayerPause(e,"top")}}})],1)]),t._v(" "),i("div",{staticClass:"positionLine",attrs:{id:"what_pc"}},[t._v("\n\t\t\t这是分界线\n\t\t")]),t._v(" "),i("div",{staticClass:"positionLine",attrs:{id:"where_pc"}},[t._v("\n\t\t\t这是分界线\n\t\t")]),t._v(" "),i("div",{staticClass:"positionLine",attrs:{id:"who_pc"}},[t._v("\n\t\t\t这是分界线\n\t\t")]),t._v(" "),i("div",{staticClass:"positionBlock",attrs:{id:"rule_pc"},on:{click:t.goRule}},[t._v("\n\t\t\t这是分界线\n\t\t")]),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"pc-day-main"},[i("div",{staticClass:"pc-day-box"},[i("div",{staticClass:"pc-day-container"},[i("div",{staticClass:"pc-day-container-img"},[i("div",{staticStyle:{width:"calc(100% / 4)","box-sizing":"border-box"},on:{click:function(e){return t.changeDay(0)}}},[i("img",{attrs:{src:0==t.daySelect?"https://xgh5.someet.cc/day22_red.png":"https://xgh5.someet.cc/day22.png",width:"100%",alt:""}})]),t._v(" "),i("div",{staticStyle:{width:"calc(100% / 4)","box-sizing":"border-box"},on:{click:function(e){return t.changeDay(1)}}},[i("img",{attrs:{src:1==t.daySelect?"https://xgh5.someet.cc/day23_red.png":"https://xgh5.someet.cc/day23.png",width:"100%",alt:""}})]),t._v(" "),i("div",{staticStyle:{width:"calc(100% / 4)","box-sizing":"border-box"},on:{click:function(e){return t.changeDay(2)}}},[i("img",{attrs:{src:2==t.daySelect?"https://xgh5.someet.cc/day24_red.png":"https://xgh5.someet.cc/day24.png",width:"100%",alt:""}})]),t._v(" "),i("div",{staticStyle:{width:"calc(100% / 4)","box-sizing":"border-box"},on:{click:function(e){return t.changeDay(3)}}},[i("img",{attrs:{src:3==t.daySelect?"https://xgh5.someet.cc/day25_red.png":"https://xgh5.someet.cc/day25.png",width:"100%",alt:""}})])])]),t._v(" "),i("div",{staticClass:"pc-day-content scrollbar-rail",class:0==t.daySelect||2==t.daySelect?"scroll-scrolly_visible":""},[i("img",{directives:[{name:"show",rawName:"v-show",value:0==t.daySelect,expression:"daySelect == 0"}],attrs:{width:"100%",src:"https://xgh5.someet.cc/act22.png",alt:""}}),t._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:1==t.daySelect,expression:"daySelect == 1"}],attrs:{width:"100%",src:"https://xgh5.someet.cc/act23.png",alt:""}}),t._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:2==t.daySelect,expression:"daySelect == 2"}],attrs:{width:"100%",src:"https://xgh5.someet.cc/act24.jpg",alt:""}}),t._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:3==t.daySelect,expression:"daySelect == 3"}],attrs:{width:"100%",src:"https://xgh5.someet.cc/act25.png",alt:""}})])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.imgList.xgPlayMedias.isShow&&1==t.Imgcomplete,expression:"imgList.xgPlayMedias.isShow  && Imgcomplete==true"}],staticClass:"imgBoxImg relativeBox",attrs:{id:"videoBottomForPC"}},[1==t.complete?i("div",{directives:[{name:"show",rawName:"v-show",value:t.imgList.xgPlayMedias.isShow,expression:"imgList.xgPlayMedias.isShow"}],staticClass:"swiper2"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.imgList.xgPlayMedias.isShow,expression:"imgList.xgPlayMedias.isShow"}],staticClass:"imgBoxImg_pc"},[i("div",{staticClass:"videoBox1"},[i("video-player",{ref:"videoPlayerBottom",staticClass:"video-player vjs-custom-skin",attrs:{playsinline:!0,options:t.xgPlayMedias},on:{play:function(e){return t.CplayerPlay(e,"top")},pause:function(e){return t.CplayerPause(e,"top")}}})],1)])]):t._e()])]):t._e(),t._v(" "),i("div",{attrs:{id:"topMenuForPc"}},[t._m(2),t._v(" "),i("div",{staticClass:"menuChildBox child-right"},[i("div",{staticClass:"menu-list-mob-pc"},[i("span"),t._v(" "),i("span",{on:{click:function(e){return t.goPoint("what")}}},[i("img",{directives:[{name:"show",rawName:"v-show",value:"what"!=t.goWhere,expression:"goWhere!='what'"}],attrs:{src:"https://xgh5.someet.cc/btn/what_btn.png",alt:"",width:"100%"}}),t._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:"what"==t.goWhere,expression:"goWhere=='what'"}],attrs:{src:"https://xgh5.someet.cc/btn/what_btn_blue.png",alt:"",width:"100%"}})]),t._v(" "),i("span",{on:{click:function(e){return t.goPoint("where")}}},[i("img",{directives:[{name:"show",rawName:"v-show",value:"where"!=t.goWhere,expression:"goWhere!='where'"}],attrs:{src:"https://xgh5.someet.cc/btn/where_btn.png",alt:"",width:"100%"}}),t._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:"where"==t.goWhere,expression:"goWhere=='where'"}],attrs:{src:"https://xgh5.someet.cc/btn/where_btn_blue.png",alt:"",width:"100%"}})]),t._v(" "),i("span",{on:{click:function(e){return t.goPoint("who")}}},[i("img",{directives:[{name:"show",rawName:"v-show",value:"who"!=t.goWhere,expression:"goWhere!='who'"}],attrs:{src:"https://xgh5.someet.cc/btn/who_btn.png",alt:"",width:"100%"}}),t._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:"who"==t.goWhere,expression:"goWhere=='who'"}],attrs:{src:"https://xgh5.someet.cc/btn/who_btn_blue.png",alt:"",width:"100%"}})])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"xiguaCircle"},[e("img",{attrs:{src:"https://xgh5.someet.cc/loading.jpg",alt:"",width:"100%;"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pc-banner-div"},[e("div",{staticClass:"pc-banner-swiper"},[e("div",[e("a",{attrs:{href:"https://www.toutiao.com/i6721317691421901326/"}},[e("img",{attrs:{src:"https://xgh5.someet.cc/ft_pc.jpg",width:"100%",alt:""}})])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"menuChildBox child-left"},[e("img",{attrs:{src:"https://xgh5.someet.cc/logo_white.png",alt:"",width:"100%"}})])}]};var n=i("C7Lr")(s,a,!1,function(t){i("N0D2"),i("S3oN")},"data-v-2bf3c963",null);e.default=n.exports}});
//# sourceMappingURL=1.1ce6d2b5fe371ee4f293.js.map