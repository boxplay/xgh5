webpackJsonp([2],{CH82:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("DMPO"),o=i("CRWL"),a=(i("Drwf"),i("HX+s"),i("r8N3"),{name:"Index",data:function(){return{complete:!1,DayIndex:1,DayList:[],imgList:[],swiperOption:{autoplay:!0,speed:1e3},swiperOptionForMedia:{autoplay:!0,speed:1e3},playerOptions:[],menuTop:!1,index:1,offsetTop:0,screenWidth:0,Imgcomplete:!1,goWhere:"what"}},methods:{CplayerPlay:function(e,t){"swiper"==t&&this.swiper.autoplay.stop()},CplayerPause:function(e,t){},changeDay:function(e){this.DayIndex=e},imgLoad:function(){this.Imgcomplete=!0;var e=document.querySelector("#topMennuFormob").offsetHeight;document.querySelector("#blankBox").style.height=e+"px"},handleScroll:function(){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,t=document.querySelector("#topMennuFormobBox").offsetTop;this.menuTop=e>t;var i=document.querySelector("#what").offsetTop-28,s=document.querySelector("#where").offsetTop-28,o=document.querySelector("#who").offsetTop-28;if(e>i&&e<s&&"what"!=this.goWhere?this.goWhere="what":e>s&&e<o&&"where"!=this.goWhere?this.goWhere="where":e>o&&"who"!=this.goWhere&&(this.goWhere="who"),this.imgList.xgPlayMedias.isShow){var a=document.querySelector("#what").offsetTop,r=document.querySelector("#videoBottom").clientHeight+document.querySelector("#bannerAndLogo").clientHeight,n=document.querySelector("#videoBottom").offsetTop-document.querySelector("#videoBottom").clientHeight;e>a&&this.playerTop.pause(),e<n-r&&(this.player0.pause(),this.player1.pause(),this.player2.pause())}},goTicket:function(){window.location.href="https://traveldetail.fliggy.com/item.htm?id=596217589260"},goPoint:function(e){var t;this.goWhere=e,"what"==e?t=document.querySelector("#what"):"where"==e?t=document.querySelector("#where"):"who"==e&&(t=document.querySelector("#who"));var i=t.offsetTop;this.offsetTop=i-28;this._isMobile()?(console.log("手机端"),this.scrollEvent(e)):(console.log("PC端"),this.scrollEvent(e))},scrollEvent:function(e){if(this._isMobile()){if("what"==e)document.getElementById("what").scrollIntoView(!0);else if("where"==e){document.getElementById("where").scrollIntoView(!0)}else if("who"==e){document.getElementById("who").scrollIntoView(!0)}}else{document.documentElement.scrollTop;window.scrollTo(0,this.offsetTop)}},_isMobile:function(){return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)}},components:{swiper:s.swiper,swiperSlide:s.swiperSlide,videoPlayer:o.videoPlayer},computed:{player0:function(){return this.$refs.videoPlayerBottom0.player},player1:function(){return this.$refs.videoPlayerBottom1.player},player2:function(){return this.$refs.videoPlayerBottom2.player},playerTop:function(){return this.$refs.videoPlayerTop.player},swiper:function(){return this.$refs.videoSwiper.swiper}},mounted:function(){var e=this,t=this;this.$axios.get("/static/day.json").then(function(e){t.DayList=e.data}),this.$axios.get("/static/img.json").then(function(i){t.imgList=i.data,t.complete=!0,e.$nextTick(function(){t.screenWidth=e.$refs.main.clientWidth?e.$refs.main.clientWidth:"414";var i=e.screenWidth-20;document.getElementById("goTicket").style.right="calc(50% - "+i/2+"px)"}),window.onresize=function(){e.$nextTick(function(){t.screenWidth=e.$refs.main.clientWidth;var i=e.screenWidth-20;document.getElementById("goTicket").style.right="calc(50% - "+i/2+"px)"})}}),window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}}),r={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[0==e.complete?i("div",{staticClass:"loadingPage"},[i("h2",[e._v("Loading")])]):e._e(),e._v(" "),1==e.complete?i("div",{ref:"main",staticClass:"main"},[i("div",{staticClass:"imgBox"},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.imgList.xgPlayTitle.isShow,expression:"imgList.xgPlayTitle.isShow"}],staticClass:"imgBoxImg",staticStyle:{position:"relative"}},[i("img",{attrs:{src:e.imgList.xgPlayTitle.val[0],alt:"",width:"100%"},on:{load:e.imgLoad}}),e._v(" "),e._m(0)]),e._v(" "),i("div",{staticStyle:{"margin-top":"-4%"},attrs:{id:"topMennuFormobBox"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.menuTop,expression:"menuTop"}],ref:"blankBox",attrs:{id:"blankBox"}}),e._v(" "),i("div",{class:e.menuTop?"fixedMenu":"relativeMenu",staticStyle:{"max-width":"700px"},attrs:{id:"topMennuFormob"}},[i("div",{staticStyle:{width:"100%",position:"relative"}},[i("img",{directives:[{name:"show",rawName:"v-show",value:"who"==e.goWhere,expression:"goWhere == 'who'"}],ref:"imgHeight",attrs:{id:"imgHeight",src:"https://xgh5.someet.cc/who.png",alt:"",width:"100%"}}),e._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:"where"==e.goWhere,expression:"goWhere == 'where'"}],attrs:{src:"https://xgh5.someet.cc/where.png",alt:"",width:"100%"}}),e._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:"what"==e.goWhere,expression:"goWhere == 'what'"}],attrs:{src:"https://xgh5.someet.cc/what.png",alt:"",width:"100%"}}),e._v(" "),i("div",{staticClass:"menu-list-mob",staticStyle:{position:"absolute",opacity:"0"}},[i("span",{staticStyle:{width:"calc(100% / 3)"},on:{click:function(t){return e.goPoint("what")}}},[e._v("\n\t\t\t\t\t\t\t\t玩什么\n\t\t\t\t\t\t\t")]),e._v(" "),i("span",{staticStyle:{width:"calc(100% / 3)"},on:{click:function(t){return e.goPoint("where")}}},[e._v("\n\t\t\t\t\t\t\t\t在哪玩\n\t\t\t\t\t\t\t")]),e._v(" "),i("span",{staticStyle:{width:"calc(100% / 3)"},on:{click:function(t){return e.goPoint("who")}}},[e._v("\n\t\t\t\t\t\t\t\t跟谁玩\n\t\t\t\t\t\t\t")])])])])]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.imgList.xgPlayVideoTop.isShow&&1==e.Imgcomplete,expression:"imgList.xgPlayVideoTop.isShow && Imgcomplete==true"}],staticClass:"imgBoxImg relativeBox",staticStyle:{"margin-top":"-11%"}},[i("img",{attrs:{src:e.imgList.xgPlayVideoTop.img,alt:"",width:"100%"}}),e._v(" "),i("div",{staticClass:"videoBox1"},[i("video-player",{ref:"videoPlayerTop",staticClass:"video-player vjs-custom-skin",attrs:{playsinline:!0,options:e.imgList.xgPlayVideoTop.options},on:{play:function(t){return e.CplayerPlay(t,"top")},pause:function(t){return e.CplayerPause(t,"top")}}})],1)]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.imgList.xgPlayWhat.isShow,expression:"imgList.xgPlayWhat.isShow"}],staticClass:"imgBoxImg",attrs:{id:"what"}},[i("img",{attrs:{src:e.imgList.xgPlayWhat.val[0],alt:"",width:"100%"}})]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.imgList.xgPlayWhere.isShow,expression:"imgList.xgPlayWhere.isShow"}],staticClass:"imgBoxImg",attrs:{id:"where"}},[i("img",{attrs:{src:e.imgList.xgPlayWhere.val[0],alt:"",width:"100%"}})]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.imgList.xgPlayWho.isShow,expression:"imgList.xgPlayWho.isShow"}],staticClass:"imgBoxImg",staticStyle:{position:"relative"},attrs:{id:"who"}},[i("img",{attrs:{src:e.imgList.xgPlayWho.val[0],alt:"",width:"100%"}}),e._v(" "),i("router-link",{attrs:{to:"/rule"}},[i("div",{staticClass:"ruleBox"})])],1),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.imgList.xgPlayBanner.isShow,expression:"imgList.xgPlayBanner.isShow"}],staticClass:"imgBoxImg"},[e.imgList.xgPlaySwiper?i("div",{directives:[{name:"show",rawName:"v-show",value:e.imgList.xgPlaySwiper.isShow,expression:"imgList.xgPlaySwiper.isShow"}],staticClass:"swiper1"},[i("swiper",{staticStyle:{height:"100%"},attrs:{options:e.swiperOption}},e._l(e.imgList.xgPlaySwiper.val,function(e,t){return i("swiper-slide",{key:t,staticClass:"swiper1-video"},[i("img",{attrs:{src:e,alt:"",width:"100%"}})])}),1)],1):e._e()]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.imgList.xgPlayMedias.isShow&&1==e.Imgcomplete,expression:"imgList.xgPlayMedias.isShow  && Imgcomplete==true"}],staticClass:"imgBoxImg relativeBox",attrs:{id:"videoBottom"}},[i("img",{attrs:{src:"https://img.someet.cc/video.jpg",alt:"",width:"100%"}}),e._v(" "),1==e.complete?i("div",{directives:[{name:"show",rawName:"v-show",value:e.imgList.xgPlayMedias.isShow,expression:"imgList.xgPlayMedias.isShow"}],staticClass:"swiper2"},[i("swiper",{ref:"videoSwiper",staticStyle:{height:"100%"},attrs:{options:e.swiperOptionForMedia}},[i("swiper-slide",{staticClass:"swiper1-video"},[i("video-player",{ref:"videoPlayerBottom0",staticClass:"video-player vjs-custom-skin",attrs:{playsinline:!0,options:e.imgList.xgPlayMedias.options[0]},on:{play:function(t){return e.CplayerPlay(t,"swiper")},pause:function(t){return e.CplayerPause(t,"swiper")}}})],1),e._v(" "),i("swiper-slide",{staticClass:"swiper1-video"},[i("video-player",{ref:"videoPlayerBottom1",staticClass:"video-player vjs-custom-skin",attrs:{playsinline:!0,options:e.imgList.xgPlayMedias.options[1]},on:{play:function(t){return e.CplayerPlay(t,"swiper")},pause:function(t){return e.CplayerPause(t,"swiper")}}})],1),e._v(" "),i("swiper-slide",{staticClass:"swiper1-video"},[i("video-player",{ref:"videoPlayerBottom2",staticClass:"video-player vjs-custom-skin",attrs:{playsinline:!0,options:e.imgList.xgPlayMedias.options[2]},on:{play:function(t){return e.CplayerPlay(t,"swiper")},pause:function(t){return e.CplayerPause(t,"swiper")}}})],1)],1)],1):e._e()]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.imgList.xgPlayHzLogo.isShow,expression:"imgList.xgPlayHzLogo.isShow"}],staticClass:"imgBoxImg",staticStyle:{"margin-top":"-2px"},attrs:{id:"bannerAndLogo"}},[i("img",{attrs:{src:e.imgList.xgPlayHzLogo.val[0],alt:"",width:"100%"}})]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:1==e.Imgcomplete,expression:"Imgcomplete==true"}],staticClass:"goTicket",attrs:{id:"goTicket"},on:{click:e.goTicket}},[i("img",{attrs:{src:"https://xgh5.someet.cc/goTicket.png",width:"100%",alt:""}})])])]):e._e()])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"slideBox"},[t("div",{staticClass:"slideBoxList"},[t("div",{staticClass:"chevron",staticStyle:{position:"absolute"}}),this._v(" "),t("div",{staticClass:"chevron"}),this._v(" "),t("div",{staticClass:"chevron"}),this._v(" "),t("div",{staticClass:"chevron"})])])}]};var n=i("C7Lr")(a,r,!1,function(e){i("Y3DI"),i("fmXO")},"data-v-799d5c49",null);t.default=n.exports},Y3DI:function(e,t){},fmXO:function(e,t){}});
//# sourceMappingURL=2.05e7b6c49b1a6c1702de.js.map