webpackJsonp([1],{"JL+C":function(e,t){},fGoN:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,n,s,r={name:"Index",data:function(){return{complete:!1,DayIndex:1,DayList:[],imgList:[],swiperOption:{autoplay:!0,speed:1e3},swiperOptionForMedia:{autoplay:!0,speed:1e3},playerOptions:[],menuTop:!1,index:1,offsetTop:0,screenWidth:0,Imgcomplete:!1,goWhere:"what"}},methods:(i={CplayerPlay:function(e,t){"swiper"==t&&this.swiper.autoplay.stop()},CplayerPause:function(e,t){},changeDay:function(e){this.DayIndex=e},imgLoad:function(){this.Imgcomplete=!0;var e=document.querySelector("#topMennuFormob").offsetHeight;document.querySelector("#blankBox").style.height=e+"px"},handleScroll:function(){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,t=document.querySelector("#what_pc").offsetTop-28,o=document.querySelector("#where_pc").offsetTop-28,i=document.querySelector("#who_pc").offsetTop-28;if(e>t&&e<o&&"what"!=this.goWhere?this.goWhere="what":e>o&&e<i&&"where"!=this.goWhere?this.goWhere="where":e>i&&"who"!=this.goWhere&&(this.goWhere="who"),e>document.querySelector("#what_pc").offsetTop&&this.playerTop.pause(),this.imgList.xgPlayMedias.isShow){var n=document.querySelector("#videoBottom").clientHeight+document.querySelector("#bannerAndLogo").clientHeight;e<document.querySelector("#videoBottom").offsetTop-document.querySelector("#videoBottom").clientHeight-n&&(this.player0.pause(),this.player1.pause(),this.player2.pause())}},goTicket:function(){window.location.href="https://traveldetail.fliggy.com/item.htm?id=596217589260"},goPoint:function(e){var t;this.goWhere=e,"what"==e?t=document.querySelector("#what_pc"):"where"==e?t=document.querySelector("#where_pc"):"who"==e&&(t=document.querySelector("#who_pc"));var o=t.offsetTop;this.offsetTop=o-28;this._isMobile()?(console.log("手机端"),this.scrollEvent(e)):(console.log("PC端"),this.scrollEvent(e))},scrollEvent:function(e){if(this._isMobile()){if("what"==e)document.getElementById("what_pc").scrollIntoView(!0);else if("where"==e){document.getElementById("where_pc").scrollIntoView(!0)}else if("who"==e){document.getElementById("who_pc").scrollIntoView(!0)}}else{document.documentElement.scrollTop;window.scrollTo(0,this.offsetTop)}},_isMobile:function(){return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)}},n="goTicket",s=function(){window.location.href="https://traveldetail.fliggy.com/item.htm?id=596217589260"},n in i?Object.defineProperty(i,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):i[n]=s,i),components:{},computed:{player0:function(){return this.$refs.videoPlayerBottom0.player},player1:function(){return this.$refs.videoPlayerBottom1.player},player2:function(){return this.$refs.videoPlayerBottom2.player},playerTop:function(){return this.$refs.videoPlayerTop.player},swiper:function(){return this.$refs.videoSwiper.swiper}},mounted:function(){var e=this,t=this;this.$axios.get("/static/img.json").then(function(o){t.imgList=o.data,t.complete=!0,e.$nextTick(function(){t.screenWidth=e.$refs.main.clientWidth?e.$refs.main.clientWidth:"414";e.screenWidth}),window.onresize=function(){e.$nextTick(function(){t.screenWidth=e.$refs.main.clientWidth,e.screenWidth})}}),window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},a={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[0==e.complete?o("div",{staticClass:"loadingPage"},[o("h2",[e._v("Loading")])]):e._e(),e._v(" "),1==e.complete?o("div",{ref:"main",staticClass:"main relativeBox",staticStyle:{"min-width":"700px","margin-top":"5%"}},[o("img",{staticStyle:{display:"block"},attrs:{src:"https://xgh5.someet.cc/pc.jpeg",alt:"",width:"100%"}}),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.imgList.xgPlayVideoTop.isShow,expression:"imgList.xgPlayVideoTop.isShow"}],staticClass:"imgBoxImg_pc"},[o("div",{staticClass:"videoBox1"},[o("video-player",{ref:"videoPlayerTop",staticClass:"video-player vjs-custom-skin",attrs:{playsinline:!0,options:e.imgList.xgPlayVideoTop.options},on:{play:function(t){return e.CplayerPlay(t,"top")},pause:function(t){return e.CplayerPause(t,"top")}}})],1)]),e._v(" "),o("div",{staticClass:"positionLine",attrs:{id:"what_pc"}},[e._v("\n\t\t\t这是分界线\n\t\t")]),e._v(" "),o("div",{staticClass:"positionLine",attrs:{id:"where_pc"}},[e._v("\n\t\t\t这是分界线\n\t\t")]),e._v(" "),o("div",{staticClass:"positionLine",attrs:{id:"who_pc"}},[e._v("\n\t\t\t这是分界线\n\t\t")]),e._v(" "),o("router-link",{attrs:{to:"/prule"}},[o("div",{staticClass:"positionBlock",attrs:{id:"rule_pc"}},[e._v("\n\t\t\t\t这是分界线\n\t\t\t")])])],1):e._e(),e._v(" "),o("div",{attrs:{id:"topMenuForPc"}},[e._m(0),e._v(" "),o("div",{staticClass:"menuChildBox child-right"},[o("div",{staticClass:"menu-list-mob-pc"},[o("span",{on:{click:function(t){return e.goPoint("what")}}},[o("img",{directives:[{name:"show",rawName:"v-show",value:"what"!=e.goWhere,expression:"goWhere!='what'"}],attrs:{src:"https://xgh5.someet.cc/btn/what_btn.png",alt:"",width:"100%"}}),e._v(" "),o("img",{directives:[{name:"show",rawName:"v-show",value:"what"==e.goWhere,expression:"goWhere=='what'"}],attrs:{src:"https://xgh5.someet.cc/btn/what_btn_blue.png",alt:"",width:"100%"}})]),e._v(" "),o("span",{on:{click:function(t){return e.goPoint("where")}}},[o("img",{directives:[{name:"show",rawName:"v-show",value:"where"!=e.goWhere,expression:"goWhere!='where'"}],attrs:{src:"https://xgh5.someet.cc/btn/where_btn.png",alt:"",width:"100%"}}),e._v(" "),o("img",{directives:[{name:"show",rawName:"v-show",value:"where"==e.goWhere,expression:"goWhere=='where'"}],attrs:{src:"https://xgh5.someet.cc/btn/where_btn_blue.png",alt:"",width:"100%"}})]),e._v(" "),o("span",{on:{click:function(t){return e.goPoint("who")}}},[o("img",{directives:[{name:"show",rawName:"v-show",value:"who"!=e.goWhere,expression:"goWhere!='who'"}],attrs:{src:"https://xgh5.someet.cc/btn/who_btn.png",alt:"",width:"100%"}}),e._v(" "),o("img",{directives:[{name:"show",rawName:"v-show",value:"who"==e.goWhere,expression:"goWhere=='who'"}],attrs:{src:"https://xgh5.someet.cc/btn/who_btn_blue.png",alt:"",width:"100%"}})]),e._v(" "),o("span",{on:{click:e.goTicket}},[o("img",{attrs:{src:"https://xgh5.someet.cc/btn/goTicket_btn_blue.png",alt:"",width:"100%"}})])])]),e._v(" "),o("div",{staticClass:"menuChildBox child-blank"})])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"menuChildBox child-left"},[t("img",{attrs:{src:"https://xgh5.someet.cc/logo_white.png",alt:"",width:"100%"}})])}]};var c=o("C7Lr")(r,a,!1,function(e){o("pn8o"),o("JL+C")},"data-v-a42e5188",null);t.default=c.exports},pn8o:function(e,t){}});
//# sourceMappingURL=1.0f2a98ef835657906f13.js.map