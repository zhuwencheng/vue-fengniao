webpackJsonp([14,26],{114:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var A=t(60),a=t.n(A);e.default={name:"helpCenter",components:{Back:a.a},methods:{tabChange:function(n){void 0==n.isShow?this.$set(n,"isShow",!0):n.isShow=!n.isShow}},data:function(){return{faqData:[{title:"借款是否会收取服务费？",bd:"用户通过蜂鸟钱包借款，服务费在放款成功后一次扣除，选择不同金额，不同期限的产品，服务费不同。",isShow:!0},{title:"提前还款是否有违约金？",bd:"提前还款违约金=未还本金*提前还款罚率。不同产品提前还款违约金不同，部分产品暂无违约金。"},{title:"借款逾期是否有逾期罚息、逾期管理费？",bd:"逾期罚息=待还本金*逾期天数*逾期利率（0.065%）。逾期管理费=逾期天数*每日逾期管理费（10元/日）。为避免影响用户征信，请用户务必在借款到期前还款。"}]}}}},171:function(n,e,t){e=n.exports=t(30)(),e.push([n.i,"\n.faqAudit .cantainer[data-v-6f39e813] {\n  background: #fff;\n}\n.faqAudit .cantainer .faq-wp[data-v-6f39e813] {\n  margin: 1rem 1rem 0;\n  border-bottom: 1px solid #ebebeb;\n  color: #666;\n}\n.faqAudit .cantainer .faq-wp .hd[data-v-6f39e813] {\n  font-size: 1.6rem;\n  line-height: 2rem;\n  padding: 1rem 0;\n}\n.faqAudit .cantainer .faq-wp .hd .index[data-v-6f39e813] {\n  color: #2297f8;\n  margin-right: 1rem;\n}\n.faqAudit .cantainer .faq-wp .bd[data-v-6f39e813] {\n  padding: 1rem;\n  margin-bottom: .8rem;\n  background: #f4f4f4;\n  line-height: 1.8em;\n  border-radius: 6px;\n  position: relative;\n  display: none;\n}\n.faqAudit .cantainer .faq-wp .bd.active[data-v-6f39e813] {\n  display: block;\n}\n.faqAudit .cantainer .faq-wp .bd[data-v-6f39e813]:after {\n  content: '';\n  position: absolute;\n  width: 0;\n  height: 0;\n  border: 8px solid transparent;\n  border-bottom-color: #f4f4f4;\n  left: 4em;\n  top: -16px;\n}\n","",{version:3,sources:["/./src/components/faqAudit/main4.vue"],names:[],mappings:";AACA;EACE,iBAAiB;CAClB;AACD;EACE,oBAAoB;EACpB,iCAAiC;EACjC,YAAY;CACb;AACD;EACE,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;CACjB;AACD;EACE,eAAe;EACf,mBAAmB;CACpB;AACD;EACE,cAAc;EACd,qBAAqB;EACrB,oBAAoB;EACpB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,cAAc;CACf;AACD;EACE,eAAe;CAChB;AACD;EACE,YAAY;EACZ,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,8BAA8B;EAC9B,6BAA6B;EAC7B,UAAU;EACV,WAAW;CACZ",file:"main4.vue",sourcesContent:["\n.faqAudit .cantainer[data-v-6f39e813] {\n  background: #fff;\n}\n.faqAudit .cantainer .faq-wp[data-v-6f39e813] {\n  margin: 1rem 1rem 0;\n  border-bottom: 1px solid #ebebeb;\n  color: #666;\n}\n.faqAudit .cantainer .faq-wp .hd[data-v-6f39e813] {\n  font-size: 1.6rem;\n  line-height: 2rem;\n  padding: 1rem 0;\n}\n.faqAudit .cantainer .faq-wp .hd .index[data-v-6f39e813] {\n  color: #2297f8;\n  margin-right: 1rem;\n}\n.faqAudit .cantainer .faq-wp .bd[data-v-6f39e813] {\n  padding: 1rem;\n  margin-bottom: .8rem;\n  background: #f4f4f4;\n  line-height: 1.8em;\n  border-radius: 6px;\n  position: relative;\n  display: none;\n}\n.faqAudit .cantainer .faq-wp .bd.active[data-v-6f39e813] {\n  display: block;\n}\n.faqAudit .cantainer .faq-wp .bd[data-v-6f39e813]:after {\n  content: '';\n  position: absolute;\n  width: 0;\n  height: 0;\n  border: 8px solid transparent;\n  border-bottom-color: #f4f4f4;\n  left: 4em;\n  top: -16px;\n}\n"],sourceRoot:"webpack://"}])},195:function(n,e,t){var A=t(171);"string"==typeof A&&(A=[[n.i,A,""]]),A.locals&&(n.exports=A.locals);t(31)("5d1f4b0a",A,!0)},230:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"faqAudit"},[t("Back",[n._v("费用问题")]),n._v(" "),t("div",{staticClass:"cantainer"},n._l(n.faqData,function(e,A){return t("div",{staticClass:"faq-wp"},[t("p",{staticClass:"hd",on:{click:function(t){n.tabChange(e)}}},[t("span",{staticClass:"index"},[n._v(n._s(A+1))]),n._v(n._s(e.title))]),n._v(" "),t("p",{class:{active:e.isShow,bd:!0}},[n._v(n._s(e.bd))])])}))],1)},staticRenderFns:[]}},43:function(n,e,t){t(195);var A=t(1)(t(114),t(230),"data-v-6f39e813",null);n.exports=A.exports},56:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"back",props:["back"],methods:{goback:function(){return"undefined"!=typeof xjd&&this.$route.path==this.$store.state.enterUrl?(xjd.goBack(),!1):void this.$router.go(-1)}},mounted:function(){"undefined"!=typeof xjd&&void 0!=xjd.changeNaviForIOS&&this.$nextTick(function(){xjd.changeNaviForIOS()})},created:function(){window.title=this.$slots.default}}},57:function(n,e,t){e=n.exports=t(30)(),e.push([n.i,"\n.body-header {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 4.8rem;\n  width: 100%;\n  box-sizing: border-box;\n}\n.blueHeader {\n  background: linear-gradient(to right, #1373ee, #2cb0fe);\n}\n.blueHeader .title {\n  font-size: 1.8rem;\n  font-weight: 500;\n  line-height: 4.8rem;\n  margin: 0 30px;\n  color: #fff;\n  text-align: center;\n  height: 4.8rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.blueHeader .back-btn {\n  height: 4.8rem;\n  width: 3rem;\n  position: absolute;\n  cursor: pointer;\n  background: url("+t(59)+") no-repeat center center;\n  background-size: 28%;\n  top: 0;\n  left: 0;\n}\n","",{version:3,sources:["/./src/components/toolcomponents/back.vue"],names:[],mappings:";AACA;EACE,mBAAmB;EACnB,QAAQ;EACR,OAAO;EACP,eAAe;EACf,YAAY;EACZ,uBAAuB;CACxB;AACD;EACE,wDAAwD;CACzD;AACD;EACE,kBAAkB;EAClB,iBAAiB;EACjB,oBAAoB;EACpB,eAAe;EACf,YAAY;EACZ,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,wBAAwB;EACxB,oBAAoB;CACrB;AACD;EACE,eAAe;EACf,YAAY;EACZ,mBAAmB;EACnB,gBAAgB;EAChB,kEAA+D;EAC/D,qBAAqB;EACrB,OAAO;EACP,QAAQ;CACT",file:"back.vue",sourcesContent:["\n.body-header {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 4.8rem;\n  width: 100%;\n  box-sizing: border-box;\n}\n.blueHeader {\n  background: linear-gradient(to right, #1373ee, #2cb0fe);\n}\n.blueHeader .title {\n  font-size: 1.8rem;\n  font-weight: 500;\n  line-height: 4.8rem;\n  margin: 0 30px;\n  color: #fff;\n  text-align: center;\n  height: 4.8rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.blueHeader .back-btn {\n  height: 4.8rem;\n  width: 3rem;\n  position: absolute;\n  cursor: pointer;\n  background: url(../../images/back.png) no-repeat center center;\n  background-size: 28%;\n  top: 0;\n  left: 0;\n}\n"],sourceRoot:"webpack://"}])},58:function(n,e,t){var A=t(57);"string"==typeof A&&(A=[[n.i,A,""]]),A.locals&&(n.exports=A.locals);t(31)("69f1a226",A,!0)},59:function(n,e){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAnCAYAAAF4YFiYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAYNJREFUeNpi/P//PwMMMDEgASI5AAHECDMAJvqKASjyCiQKEpmOrKYRIIAYkW1DVg/Dr2BsENGIJAEXhGG4JDYzGwECCJvgfAY08zaim7kR3aKN6LZvRHcSyKKfQMPZ0QMIJPATW6ihSCAHJVwCm+N/AgQQuuOxYZDrXhFUgC00sSrAphCrAmSF6/ApQDcRFIk/iVFIUAMuEzA0EApDuAZssYANZAIEEDEK2YD4PAsRikAJQA+f+9j+Q4AuPs+gKMKlEEMRNoVYFaErxKkIWSFeRTCFBBXBFBJUBCuAQECdYCRCdYBACLHpEa9idAGcirHpxqoYl5swFOMLEhTFhLICXDGhhMsICkEgDmUiIr+AFPsBBGitDk4ACGEgAMo9rPBauZoFm1AEH6ei2Y0b8DtCjJsHSDPrxB5HrZIKytbXoiG02zDEgBCEgBRkpQ4N7ULHDc2Zcw3N2dTqEwz5sCpL302vApTBp03qgpEVTcHozTDM9siEva+5hW/nboGDYpj/cAUUvDG78lRvdgAAAABJRU5ErkJggg=="},60:function(n,e,t){t(58);var A=t(1)(t(56),t(61),null,null);n.exports=A.exports},61:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"body-header blueHeader"},[t("div",{ref:"title",staticClass:"title",attrs:{id:"title"}},[n._t("default")],2),n._v(" "),t("div",{staticClass:"back-btn",attrs:{id:"back-btn"},on:{click:n.goback}})])},staticRenderFns:[]}}});