webpackJsonp([2],{675:function(e,t,n){var o=n(0)(n(689),n(690),!1,function(e){n(687)},null,null);e.exports=o.exports},687:function(e,t,n){var o=n(688);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(6)("599d0e00",o,!0,{})},688:function(e,t,n){(e.exports=n(2)(!1)).push([e.i,".warning{color:red}",""])},689:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(1),s=(o=r)&&o.__esModule?o:{default:o},a=n(105);t.default={data:function(){return{d:"",response:"",u:a.TEST.MOCK}},mounted:function(){var e,t=(e=s.default.mark(function e(){var t,n,o,r;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$http.post(this.u+"?a=123213");case 2:return t=e.sent,n=t.data,this.response=JSON.stringify(n),e.next=7,this.$http.get("/doctor/manage/list");case 7:o=e.sent,r=o.data,console.log(r);case 10:case"end":return e.stop()}},e,this)}),function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function o(r,s){try{var a=t[r](s),i=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(i).then(function(e){o("next",e)},function(e){o("throw",e)});e(i)}("next")})});return function(){return t.apply(this,arguments)}}(),beforeRouteLeave:function(e,t,n){alert("ok"),n()},beforeRouteEnter:function(e,t,n){console.log("route enter"),n()},beforeResolve:function(e,t,n){console.log("route resolve"),n()},beforeCreate:function(){console.log("before create")},created:function(){console.log("create")},methods:{routeto:function(){this.$router.push("/test/component")},t:function(){this.$store.dispatch("testAuth/test",{u:123})},testH:function(){}}}},690:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("测试i18n: "+e._s(e.$t("base.key1"))+" (看到value1 而不是base.key1)")]),e._v(" "),n("h1",[e._v("测试路由: /path/to 得到当前页面")]),e._v(" "),n("h1",[e._v("测试路由跳转: /test/component "),n("button",{on:{click:e.routeto}},[e._v("->")])]),e._v(" "),n("button",{on:{click:e.t}},[e._v("测试store: 点击后填充store 刷新页面, store内容依旧存在.")]),e._v(" "),n("div",[e._v("\n        测试验证1: \n        "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.d,expression:"d"},{name:"validate",rawName:"v-validate",value:"required|numeric|min_value:5",expression:"'required|numeric|min_value:5'"}],attrs:{type:"text","data-vv-name":"测试验证"},domProps:{value:e.d},on:{input:[function(t){t.target.composing||(e.d=t.target.value)},e.testH]}}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("测试验证"),expression:"errors.has('测试验证')"}],staticClass:"warning"},[e._v(e._s(e.errors.first("测试验证"))+".")])]),e._v(" "),n("div",[n("h1",[e._v("测试mock(将.mock.example 复制一份重命名 .mock):")]),e._v("\n        请求: "+e._s(e.u)+"\n        方法: POST\n        响应: "+e._s(e.response?"√"+e.response:"✘")+"\n    ")])])},staticRenderFns:[]}}});