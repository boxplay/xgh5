webpackJsonp([0],{"3Mi8":function(e,t){},CH82:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("X1H5"),o=i.n(n),r=i("OMN4"),a=i.n(r),s={isweixin:function(){if("micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i))return!0},wxRegister:function(e){var t=Qs.stringify({reqUrl:window.location.href});a.a.post("/php/getToken.php",t,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){e=Qs.parse(e.data),o.a.config({debug:!1,appId:e.appId,timestamp:e.timestamp,nonceStr:e.nonceStr,signature:e.signature,jsApiList:["updateAppMessageShareData","updateTimelineShareData"]})}).catch(function(e){console.log(e)}),o.a.ready(function(t){e&&e()})},ShareTimeline:function(e){o.a.updateTimelineShareData({title:e.title,link:e.link,imgUrl:e.imgUrl,success:function(){e.success()},cancel:function(){e.error()}})},ShareAppMessage:function(e){o.a.updateAppMessageShareData({title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl,success:function(){e.success()},cancel:function(){e.error()}})}};var c,l,d,u={name:"Index",data:function(){return{complete:!1,DayIndex:1,DayList:[],imgList:[],swiperOption:{autoplay:!0,speed:1e3},swiperOptionForMedia:{autoplay:!0,speed:1e3},playerOptions:[],menuTop:!1,index:1,offsetTop:0,screenWidth:0,Imgcomplete:!1,goWhere:"what"}},methods:(c={CplayerPlay:function(e,t){"swiper"==t&&this.swiper.autoplay.stop()},CplayerPause:function(e,t){},changeDay:function(e){this.DayIndex=e},imgLoad:function(){this.Imgcomplete=!0},handleScroll:function(){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,t=document.querySelector("#topMennuFormobBox").offsetTop;this.menuTop=e>t;var i=document.querySelector("#mob-what_pc").offsetTop-28,n=document.querySelector("#mob-where_pc").offsetTop-28,o=document.querySelector("#mob-who_pc").offsetTop-28;if(e>i&&e<n&&"what"!=this.goWhere?this.goWhere="what":e>n&&e<o&&"where"!=this.goWhere?this.goWhere="where":e>o&&"who"!=this.goWhere&&(this.goWhere="who"),e>document.querySelector("#mob-what_pc").offsetTop&&this.playerTop.pause(),this.imgList.xgPlayMedias.isShow){var r=document.querySelector("#videoBottom").clientHeight+document.querySelector("#bannerAndLogo").clientHeight;e<document.querySelector("#videoBottom").offsetTop-document.querySelector("#videoBottom").clientHeight-r&&(this.player0.pause(),this.player1.pause(),this.player2.pause())}},goTicket:function(){window.location.href="https://traveldetail.fliggy.com/item.htm?id=596217589260"},goPoint:function(e){var t;this.goWhere=e,"what"==e?t=document.querySelector("#mob-what_pc"):"where"==e?t=document.querySelector("#mob-where_pc"):"who"==e&&(t=document.querySelector("#mob-who_pc"));var i=t.offsetTop;this.offsetTop=i-28;this._isMobile()?(console.log("手机端"),this.scrollEvent(e)):(console.log("PC端"),this.scrollEvent(e))},goRule:function(){this.$router.push("/rule")},scrollEvent:function(e){if(this._isMobile()){if(console.log(e),"what"==e)document.getElementById("mob-what_pc").scrollIntoView(!0);else if("where"==e){document.getElementById("mob-where_pc").scrollIntoView(!0)}else if("who"==e){document.getElementById("mob-who_pc").scrollIntoView(!0)}}else{document.documentElement.scrollTop;window.scrollTo(0,this.offsetTop)}},_isMobile:function(){return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)},wxRegCallback:function(){this.wxShareTimeline(),this.wxShareAppMessage()},wxShareTimeline:function(){var e={title:"2019西瓜PLAY视频嘉年华",link:window.location.href,imgUrl:"https://xgh5.someet.cc/logo-xigua.png"};s.ShareTimeline(e)},wxShareAppMessage:function(){var e={title:"2019西瓜PLAY视频嘉年华",desc:"一艘承载数千创作人的神奇方舟，一个用58天建造的海上世界。8.22-8.26 五天四夜邮轮嘉年华之旅等你来！",link:window.location.href,imgUrl:"https://xgh5.someet.cc/logo-xigua.png"};s.ShareAppMessage(e)}},l="goTicket",d=function(){window.location.href="https://traveldetail.fliggy.com/item.htm?id=596217589260"},l in c?Object.defineProperty(c,l,{value:d,enumerable:!0,configurable:!0,writable:!0}):c[l]=d,c),watch:{$route:function(e,t){"/rule"==e.path&&window.removeEventListener("scroll",this.handleScroll),"/mob"==e.path&&window.addEventListener("scroll",this.handleScroll)}},components:{},computed:{player0:function(){return this.$refs.videoPlayerBottom0.player},player1:function(){return this.$refs.videoPlayerBottom1.player},player2:function(){return this.$refs.videoPlayerBottom2.player},playerTop:function(){return this.$refs.videoPlayerTop.player},swiper:function(){return this.$refs.videoSwiper.swiper}},mounted:function(){var e=this;this.$axios.get("/static/img.json").then(function(t){e.imgList=t.data,e.complete=!0,e.$nextTick(function(){e.screenWidth=e.$refs.main.clientWidth?e.$refs.main.clientWidth:"414";var t=e.screenWidth-20;document.getElementById("goTicket").style.right="calc(50% - "+t/2+"px)"})}),this.$nextTick(function(){window.addEventListener("scroll",e.handleScroll)}),s.isweixin()&&(console.log("微信环境"),s.wxRegister(this.wxRegCallback))},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)}},p={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[0==e.complete?i("div",{staticClass:"loadingPage"},[e._m(0)]):e._e(),e._v(" "),1==e.complete?i("div",{ref:"main",staticClass:"mob-main relativeBox mobCss"},[i("img",{staticStyle:{display:"block"},attrs:{src:"https://xgh5.someet.cc/mob.jpg",alt:"",width:"100%"},on:{load:e.imgLoad}}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:1==e.Imgcomplete,expression:"Imgcomplete==true"}],staticClass:"mob-slideBox"},[e._m(1)]),e._v(" "),i("div",{ref:"topMennuFormobBox",staticStyle:{position:"absolute",top:"14%"},attrs:{id:"topMennuFormobBox"}},[i("div",{class:e.menuTop?"mob-fixedMenu":"mob-relativeMenu",staticStyle:{"max-width":"700px"},attrs:{id:"topMennuFormob"}},[i("div",{staticStyle:{width:"100%",position:"relative"}},[i("img",{directives:[{name:"show",rawName:"v-show",value:"who"==e.goWhere,expression:"goWhere == 'who'"}],ref:"imgHeight",attrs:{id:"imgHeight",src:"https://xgh5.someet.cc/who.png",alt:"",width:"100%"}}),e._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:"where"==e.goWhere,expression:"goWhere == 'where'"}],attrs:{src:"https://xgh5.someet.cc/where.png",alt:"",width:"100%"}}),e._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:"what"==e.goWhere,expression:"goWhere == 'what'"}],attrs:{src:"https://xgh5.someet.cc/what.png",alt:"",width:"100%"}}),e._v(" "),i("div",{staticClass:"mob-menu-list-mob-pc",staticStyle:{position:"absolute",opacity:"0",top:"-9%"}},[i("span",{staticStyle:{width:"calc(100% / 3)"},on:{click:function(t){return e.goPoint("what")}}},[e._v("\n\t\t\t\t\t\t\t玩什么\n\t\t\t\t\t\t")]),e._v(" "),i("span",{staticStyle:{width:"calc(100% / 3)"},on:{click:function(t){return e.goPoint("where")}}},[e._v("\n\t\t\t\t\t\t\t在哪玩\n\t\t\t\t\t\t")]),e._v(" "),i("span",{staticStyle:{width:"calc(100% / 3)"},on:{click:function(t){return e.goPoint("who")}}},[e._v("\n\t\t\t\t\t\t\t跟谁玩\n\t\t\t\t\t\t")])])])])]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.imgList.xgPlayVideoTop.isShow&&1==e.Imgcomplete,expression:"imgList.xgPlayVideoTop.isShow && Imgcomplete==true"}],staticClass:"mob-imgBoxImg_pc"},[i("div",{staticClass:"videoBox1"},[i("video-player",{ref:"videoPlayerTop",staticClass:"video-player vjs-custom-skin",attrs:{playsinline:!0,options:e.imgList.xgPlayVideoTop.options},on:{play:function(t){return e.CplayerPlay(t,"top")},pause:function(t){return e.CplayerPause(t,"top")}}})],1)]),e._v(" "),i("div",{staticClass:"mob-positionLine",attrs:{id:"mob-what_pc"}},[e._v("\n\t\t\t这是分界线\n\t\t")]),e._v(" "),i("div",{staticClass:"mob-positionLine",attrs:{id:"mob-where_pc"}},[e._v("\n\t\t\t这是分界线\n\t\t")]),e._v(" "),i("div",{staticClass:"mob-positionLine",attrs:{id:"mob-who_pc"}},[e._v("\n\t\t\t这是分界线\n\t\t")]),e._v(" "),i("div",{staticClass:"mob-positionBlock",attrs:{id:"mob-rule_pc"},on:{click:e.goRule}},[e._v("\n\t\t\t这是分界线\n\t\t")])]):e._e(),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:1==e.Imgcomplete,expression:"Imgcomplete==true"}],staticClass:"goTicket",attrs:{id:"goTicket"},on:{click:e.goTicket}},[i("img",{attrs:{src:"https://xgh5.someet.cc/goTicket.png",width:"100%",alt:""}})])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"xiguaCircle"},[t("img",{attrs:{src:"https://xgh5.someet.cc/loading.jpg",alt:"",width:"100%;"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mob-slideBoxList"},[t("div",{staticClass:"mob-chevron",staticStyle:{position:"absolute"}}),this._v(" "),t("div",{staticClass:"mob-chevron"}),this._v(" "),t("div",{staticClass:"mob-chevron"}),this._v(" "),t("div",{staticClass:"mob-chevron"})])}]};var m=i("C7Lr")(u,p,!1,function(e){i("3Mi8"),i("EfaB")},"data-v-38e91dbb",null);t.default=m.exports},EfaB:function(e,t){},X1H5:function(e,t){var i;i=window,e.exports=function(e,t){function i(t,i,n){e.WeixinJSBridge?WeixinJSBridge.invoke(t,o(i),function(e){a(t,e,n)}):c(t,n)}function n(t,i,n){e.WeixinJSBridge?WeixinJSBridge.on(t,function(e){n&&n.trigger&&n.trigger(e),a(t,e,i)}):c(t,n||i)}function o(e){return(e=e||{}).appId=b.appId,e.verifyAppId=b.appId,e.verifySignType="sha1",e.verifyTimestamp=b.timestamp+"",e.verifyNonceStr=b.nonceStr,e.verifySignature=b.signature,e}function r(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function a(e,t,i){"openEnterpriseChat"==e&&(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var n=t.errMsg;n||(n=t.err_msg,delete t.err_msg,n=function(e,t){var i=e,n=m[i];n&&(i=n);var o="ok";if(t){var r=t.indexOf(":");"confirm"==(o=t.substring(r+1))&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),"access denied"!=(o=(o=o.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=o||(o="permission denied"),"config"==i&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return t=i+":"+o}(e,n),t.errMsg=n),(i=i||{})._complete&&(i._complete(t),delete i._complete),n=t.errMsg||"",b.debug&&!i.isInnerInvoke&&alert(JSON.stringify(t));var o=n.indexOf(":");switch(n.substring(o+1)){case"ok":i.success&&i.success(t);break;case"cancel":i.cancel&&i.cancel(t);break;default:i.fail&&i.fail(t)}i.complete&&i.complete(t)}function s(e){if(e){for(var t=0,i=e.length;t<i;++t){var n=e[t],o=p[n];o&&(e[t]=o)}return e}}function c(e,t){if(!(!b.debug||t&&t.isInnerInvoke)){var i=m[e];i&&(e=i),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function l(){return(new Date).getTime()}function d(t){S&&(e.WeixinJSBridge?t():f.addEventListener&&f.addEventListener("WeixinJSBridgeReady",t,!1))}function u(){A.invoke||(A.invoke=function(t,i,n){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,o(i),n)},A.on=function(t,i){e.WeixinJSBridge&&WeixinJSBridge.on(t,i)})}if(!e.jWeixin){var p={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},m=function(){var e={};for(var t in p)e[p[t]]=t;return e}(),f=e.document,h=f.title,g=navigator.userAgent.toLowerCase(),v=navigator.platform.toLowerCase(),w=!(!v.match("mac")&&!v.match("win")),y=-1!=g.indexOf("wxdebugger"),S=-1!=g.indexOf("micromessenger"),_=-1!=g.indexOf("android"),I=-1!=g.indexOf("iphone")||-1!=g.indexOf("ipad"),T=function(){var e=g.match(/micromessenger\/(\d+\.\d+\.\d+)/)||g.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),k={initStartTime:l(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},x={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:I?1:_?2:-1,clientVersion:T,url:encodeURIComponent(location.href)},b={},M={_completes:[]},P={state:0,data:{}};d(function(){k.initEndTime=l()});var C=!1,B=[],A={config:function(e){b=e,c("config",e);var t=!1!==b.check;d(function(){if(t)i(p.config,{verifyJsApiList:s(b.jsApiList)},function(){M._complete=function(e){k.preVerifyEndTime=l(),P.state=1,P.data=e},M.success=function(e){x.isPreVerifyOk=0},M.fail=function(e){M._fail?M._fail(e):P.state=-1};var e=M._completes;return e.push(function(){!function(e){if(!(w||y||b.debug||T<"6.0.2"||x.systemType<0)){var t=new Image;x.appId=b.appId,x.initTime=k.initEndTime-k.initStartTime,x.preVerifyTime=k.preVerifyEndTime-k.preVerifyStartTime,A.getNetworkType({isInnerInvoke:!0,success:function(e){x.networkType=e.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+x.version+"&o="+x.isPreVerifyOk+"&s="+x.systemType+"&c="+x.clientVersion+"&a="+x.appId+"&n="+x.networkType+"&i="+x.initTime+"&p="+x.preVerifyTime+"&u="+x.url;t.src=i}})}}()}),M.complete=function(t){for(var i=0,n=e.length;i<n;++i)e[i]();M._completes=[]},M}()),k.preVerifyStartTime=l();else{P.state=1;for(var e=M._completes,n=0,o=e.length;n<o;++n)e[n]();M._completes=[]}}),u()},ready:function(e){0!=P.state?e():(M._completes.push(e),!S&&b.debug&&e())},error:function(e){T<"6.0.2"||(-1==P.state?e(P.data):M._fail=e)},checkJsApi:function(e){i("checkJsApi",{jsApiList:s(e.jsApiList)},(e._complete=function(e){if(_){var t=e.checkResult;t&&(e.checkResult=JSON.parse(t))}e=function(e){var t=e.checkResult;for(var i in t){var n=m[i];n&&(t[n]=t[i],delete t[i])}return e}(e)},e))},onMenuShareTimeline:function(e){n(p.onMenuShareTimeline,{complete:function(){i("shareTimeline",{title:e.title||h,desc:e.title||h,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){n(p.onMenuShareAppMessage,{complete:function(t){"favorite"===t.scene?i("sendAppMessage",{title:e.title||h,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):i("sendAppMessage",{title:e.title||h,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){n(p.onMenuShareQQ,{complete:function(){i("shareQQ",{title:e.title||h,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){n(p.onMenuShareWeibo,{complete:function(){i("shareWeiboApp",{title:e.title||h,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){n(p.onMenuShareQZone,{complete:function(){i("shareQZone",{title:e.title||h,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){i("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){i("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){i("startRecord",{},e)},stopRecord:function(e){i("stopRecord",{},e)},onVoiceRecordEnd:function(e){n("onVoiceRecordEnd",e)},playVoice:function(e){i("playVoice",{localId:e.localId},e)},pauseVoice:function(e){i("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){i("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){n("onVoicePlayEnd",e)},uploadVoice:function(e){i("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){i("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){i("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){i("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(_){var t=e.localIds;try{t&&(e.localIds=JSON.parse(t))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){i(p.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){i("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){i("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===C?(C=!0,i("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(C=!1,B.length>0){var t=B.shift();wx.getLocalImgData(t)}},e))):B.push(e)},getNetworkType:function(e){i("getNetworkType",{},(e._complete=function(e){e=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var n=t.indexOf(":"),o=t.substring(n+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){i("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},i(p.getLocation,{type:e.type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){i("hideOptionMenu",{},e)},showOptionMenu:function(e){i("showOptionMenu",{},e)},closeWindow:function(e){i("closeWindow",{},e=e||{})},hideMenuItems:function(e){i("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){i("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){i("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){i("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){i("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(I){var t=e.resultStr;if(t){var i=JSON.parse(t);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e))},openAddress:function(e){i(p.openAddress,{},(e._complete=function(e){e=function(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}(e)},e))},openProductSpecificView:function(e){i(p.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var t=e.cardList,n=[],o=0,r=t.length;o<r;++o){var a=t[o],s={card_id:a.cardId,card_ext:a.cardExt};n.push(s)}i(p.addCard,{card_list:n},(e._complete=function(e){var t=e.card_list;if(t){for(var i=0,n=(t=JSON.parse(t)).length;i<n;++i){var o=t[i];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=t,delete e.card_list}},e))},chooseCard:function(e){i("chooseCard",{app_id:b.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var t=e.cardList,n=[],o=0,r=t.length;o<r;++o){var a=t[o],s={card_id:a.cardId,code:a.code};n.push(s)}i(p.openCard,{card_list:n},e)},consumeAndShareCard:function(e){i(p.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){i(p.chooseWXPay,r(e),e)},openEnterpriseRedPacket:function(e){i(p.openEnterpriseRedPacket,r(e),e)},startSearchBeacons:function(e){i(p.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){i(p.stopSearchBeacons,{},e)},onSearchBeacons:function(e){n(p.onSearchBeacons,e)},openEnterpriseChat:function(e){i("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){i("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&e.length>0){var t=e.split("?")[0],i=e.split("?")[1];return t+=".html",void 0!==i?t+"?"+i:t}}(e.path),envVersion:e.envVersion},e)},miniProgram:{navigateBack:function(e){e=e||{},d(function(){i("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)})},navigateTo:function(e){d(function(){i("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)})},redirectTo:function(e){d(function(){i("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)})},switchTab:function(e){d(function(){i("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)})},reLaunch:function(e){d(function(){i("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)})},postMessage:function(e){d(function(){i("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)})},getEnv:function(t){d(function(){t({miniprogram:"miniprogram"===e.__wxjs_environment})})}}},L=1,E={};return f.addEventListener("error",function(e){if(!_){var t=e.target,i=t.tagName,n=t.src;if(("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i)&&-1!=n.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var o=t["wx-id"];if(o||(o=L++,t["wx-id"]=o),E[o])return;E[o]=!0,wx.ready(function(){wx.getLocalImgData({localId:n,success:function(e){t.src=e.localData}})})}}},!0),f.addEventListener("load",function(e){if(!_){var t=e.target,i=t.tagName;if(t.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var n=t["wx-id"];n&&(E[n]=!1)}}},!0),t&&(e.wx=e.jWeixin=A),A}}(i)}});
//# sourceMappingURL=0.8b2310fe82e717feb950.js.map